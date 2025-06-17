import { db } from "@/lib/db";
import { blogs } from "@/lib/drizzle/schema";
import {
  Blog,
  NewBlog,
  GetBlogsSearchParamsSchema,
} from "@/actions/blogs/blogs.types";
import { unstable_cache } from "next/cache";
import { and, count, eq, gte, ilike, lte } from "drizzle-orm";
import { TBlogPostSchema } from "@/lib/validations";

export class BlogsModel {
  static async createBlog(data: NewBlog): Promise<Blog> {
    const [blog] = await db.insert(blogs).values(data).returning();
    return blog;
  }

  static async getBlogById(id: string): Promise<TBlogPostSchema> {
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
              columns: { block_type: true },
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
                  },
                },
              },
            },
          },
        });
        return blog as TBlogPostSchema;
      },
      [`blog-${id}`],
      {
        tags: [`blog-${id}`],
        revalidate: 3600,
      }
    );

    return await cachedBlog();
  }

  static async getBlogs(): Promise<TBlogPostSchema[]> {
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
              columns: { block_type: true },
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
                  },
                },
              },
            },
          },
        });
        return blogs as TBlogPostSchema[];
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
          const fromDate = input.from ? new Date(input.from) : undefined;
          const toDate = input.to ? new Date(input.to) : undefined;

          const where = and(
            input.blogId ? ilike(blogs.id, `%${input.blogId}%`) : undefined,
            input.title ? ilike(blogs.title, `%${input.title}%`) : undefined,
            input.type ? ilike(blogs.type, `%${input.type}%`) : undefined,
            fromDate ? gte(blogs.created_at, fromDate) : undefined,
            toDate ? lte(blogs.created_at, toDate) : undefined
          );

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
              .where(where);

            const total = await tx
              .select({
                count: count(),
              })
              .from(blogs)
              .where(where)
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
    data: Partial<NewBlog>
  ): Promise<Blog | null> {
    const [blog] = await db
      .update(blogs)
      .set({ ...data })
      .where(eq(blogs.id, id))
      .returning();
    return blog || null;
  }

  static async deleteBlog(id: string): Promise<boolean> {
    const result = await db
      .delete(blogs)
      .where(eq(blogs.id, id))
      .returning({ id: blogs.id });

    return result.length > 0;
  }
}
