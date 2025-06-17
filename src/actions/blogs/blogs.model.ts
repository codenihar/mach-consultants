import { db } from "@/lib/db";
import { blogs } from "@/lib/drizzle/schema";
import { Blog, NewBlog } from "@/actions/blogs/blogs.types";
import { unstable_cache } from "next/cache";
import { eq } from "drizzle-orm";
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
        tags: [`user-blog-${id}`],
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
        tags: [`user-blogs`],
        revalidate: 3600,
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
