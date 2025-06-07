import { eq } from "drizzle-orm";
import { Blog, NewBlog } from "./blog.types";
import { blogs } from "@/lib/db/schema";
import { db } from "@/lib/db";

export class BlogsModel {
  static async createBlog(data: NewBlog): Promise<Blog> {
    const [blog] = await db.insert(blogs).values(data).returning();
    return blog;
  }

  static async getBlogById(id: string): Promise<Blog | null> {
    const [chat] = await db.select().from(blogs).where(eq(blogs.id, id));
    return chat || null;
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
    const result = await db.delete(blogs).where(eq(blogs.id, id));
    return result.rowCount !== null && result.rowCount > 0;
  }

  static async listChats(): Promise<Blog[]> {
    return await db.select().from(blogs);
  }
}
