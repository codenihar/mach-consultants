import { db } from "@/lib/db";
import { blogs } from "@/lib/drizzle/schema";
import {
  GetBlogsSearchParamsSchema,
  TContentBlockSchema,
  TBlogSchema,
} from "@/actions/blogs/blogs.types";
import { revalidateTag, unstable_cache } from "next/cache";
import { asc, count, desc, eq } from "drizzle-orm";
import { ContentBlocksService } from "@/actions/content-blocks/content-blocks.service";
import { HeaderBlocksService } from "@/actions/header-blocks/header-blocks.service";
import { ParagraphBlocksService } from "@/actions/paragraph-blocks/paragraph-blocks.service";
import { LinkBlocksService } from "@/actions/link-blocks/link-blocks.service";
import { DateTime } from "luxon";

export class BlogsModel {
  static async createBlog(
    data: Omit<TBlogSchema, "id" | "created_at" | "updated_at">
  ): Promise<TBlogSchema["id"]> {
    const { preference } = data;

    if (preference) {
      const existingBlog = await db.query.blogs.findFirst({
        where: (b, { eq }) => eq(b.preference, preference),
      });

      if (existingBlog) {
        await db
          .update(blogs)
          .set({ preference: 0 })
          .where(eq(blogs.id, existingBlog.id));

        revalidateTag(`blog-${existingBlog.id}`);
      }
    }

    const [newBlog] = await db
      .insert(blogs)
      .values({
        title: data.title,
        type: data.type,
        featured_image_url: data.featured_image_url,
        preference: data.preference,
      })
      .returning();

    for (let i = 0; i < data.contentBlocks.length; i++) {
      const block = data.contentBlocks[i] as TContentBlockSchema;
      const order = i + 1;

      const newBlock = await ContentBlocksService.createContentBlock({
        blog_id: newBlog.id,
        block_type: block.block_type,
        block_order: order,
      });

      switch (block.block_type) {
        case "header":
          await HeaderBlocksService.creatHeaderBlock({
            block_id: newBlock.data?.id,
            text: block.headerBlock.text,
            level: block.headerBlock.level,
          });
          break;
        case "paragraph":
          await ParagraphBlocksService.createParagraphBlock({
            block_id: newBlock.data?.id,
            text: block.paragraphBlock.text,
          });
          break;
        case "link":
          await LinkBlocksService.createLinkBlock({
            block_id: newBlock.data?.id,
            text: block.linkBlock.text,
            link: block.linkBlock.link,
          });
          break;
      }
    }
    return newBlog.id;
  }

  static async getBlogById(id: string): Promise<TBlogSchema> {
    const cachedBlog = unstable_cache(
      async () => {
        const blog = await db.query.blogs.findFirst({
          where: eq(blogs.id, id),
          columns: {
            id: true,
            title: true,
            featured_image_url: true,
            type: true,
            preference: true,
            created_at: true,
            updated_at: true,
          },
          with: {
            contentBlocks: {
              columns: { block_type: true, block_order: true },
              with: {
                headerBlock: {
                  columns: {
                    text: true,
                    level: true,
                  },
                },
                paragraphBlock: {
                  columns: {
                    text: true,
                    link: true,
                  },
                },
              },
            },
          },
        });
        return blog as TBlogSchema;
      },
      [`blog-${id}`],
      {
        tags: [`blog-${id}`],
        revalidate: 3600,
      }
    );

    return await cachedBlog();
  }

  static async getBlogs(): Promise<TBlogSchema[]> {
    const cachedBlogs = unstable_cache(
      async () => {
        const blogs = await db.query.blogs.findMany({
          columns: {
            id: true,
            title: true,
            featured_image_url: true,
            type: true,
            preference: true,
            created_at: true,
            updated_at: true,
          },
          with: {
            contentBlocks: {
              columns: { block_type: true, block_order: true },
              with: {
                headerBlock: {
                  columns: {
                    text: true,
                    level: true,
                  },
                },
                paragraphBlock: {
                  columns: {
                    text: true,
                    link: true,
                  },
                },
              },
            },
          },
        });
        return blogs as TBlogSchema[];
      },
      [`blogs`],
      {
        tags: [`blogs`],
        revalidate: 3600,
      }
    );

    return await cachedBlogs();
  }

  static async getAdminBlogs(input: GetBlogsSearchParamsSchema) {
    const cachedBlogs = unstable_cache(
      async () => {
        try {
          const offset = (input.page - 1) * input.perPage;

          const orderBy =
            input.sort.length > 0
              ? input.sort.map((item) => {
                  return item.desc ? desc(blogs[item.id]) : asc(blogs[item.id]);
                })
              : [desc(blogs.updated_at)];

          const { data, total } = await db.transaction(async (tx) => {
            const data = await tx
              .select({
                id: blogs.id,
                title: blogs.title,
                type: blogs.type,
                preference: blogs.preference,
                featured_image_url: blogs.featured_image_url,
                created_at: blogs.created_at,
                updated_at: blogs.updated_at,
              })
              .from(blogs)
              .limit(input.perPage)
              .offset(offset)
              .orderBy(...orderBy);

            const total = await tx
              .select({
                count: count(),
              })
              .from(blogs)
              .execute()
              .then((res) => res[0]?.count ?? 0);

            return { data, total };
          });

          const pageCount = Math.ceil(total / input.perPage);
          return { data, pageCount };
        } catch (error) {
          return { data: [], pageCount: 0 };
        }
      },
      [JSON.stringify(input)],
      {
        revalidate: 3600,
        tags: ["blogs"],
      }
    );
    return await cachedBlogs();
  }

  static async updateBlog(
    id: string,
    data: Partial<TBlogSchema>
  ): Promise<TBlogSchema["id"] | null> {
    const { contentBlocks, ...rest } = data;
    const { preference } = rest;

    if (preference) {
      const existingBlog = await db.query.blogs.findFirst({
        where: (b, { eq, and, ne }) =>
          and(eq(blogs.preference, preference), ne(b.id, id)),
      });

      if (existingBlog) {
        const currentBlog = await db.query.blogs.findFirst({
          where: (b, { eq }) => eq(b.id, id),
        });

        await db
          .update(blogs)
          .set({ preference: currentBlog?.preference ?? 0 })
          .where(eq(blogs.id, existingBlog.id));

        revalidateTag(`blog-${existingBlog.id}`);
      }
    }

    const [newBlog] = await db
      .update(blogs)
      .set({
        ...rest,
        updated_at: DateTime.now().toJSDate() as Date,
      })
      .where(eq(blogs.id, id))
      .returning();

    if (contentBlocks && Array.isArray(contentBlocks)) {
      const existingBlocks =
        await ContentBlocksService.getContentBlocksByBlogId(id);

      const blockIds =
        existingBlocks?.data && existingBlocks.data.map((b) => b.id);

      if (blockIds) {
        await HeaderBlocksService.deleteHeaderBlocks(blockIds);
        await ParagraphBlocksService.deleteParagraphBlocks(blockIds);
        await LinkBlocksService.deleteLinkBlocks(blockIds);
        await ContentBlocksService.deleteContentBlocks(blockIds);
      }

      for (let i = 0; i < contentBlocks.length; i++) {
        const block = contentBlocks[i] as TContentBlockSchema;
        const order = i + 1;

        const newBlock = await ContentBlocksService.createContentBlock({
          blog_id: id,
          block_type: block.block_type,
          block_order: order,
        });

        switch (block.block_type) {
          case "header":
            await HeaderBlocksService.creatHeaderBlock({
              block_id: newBlock.data?.id,
              text: block.headerBlock.text,
              level: block.headerBlock.level,
            });
            break;
          case "paragraph":
            await ParagraphBlocksService.createParagraphBlock({
              block_id: newBlock.data?.id,
              text: block.paragraphBlock.text,
            });
            break;
          case "link":
            await LinkBlocksService.createLinkBlock({
              block_id: newBlock.data?.id,
              text: block.linkBlock.text,
              link: block.linkBlock.link,
            });
            break;
        }
      }
    }

    return newBlog.id;
  }

  static async deleteBlog(id: string): Promise<boolean> {
    const result = await db
      .delete(blogs)
      .where(eq(blogs.id, id))
      .returning({ id: blogs.id });

    return result.length > 0;
  }
}
