import { z } from "zod";
import { blogs } from "@/lib/drizzle/schema";

export type Blog = typeof blogs.$inferSelect;
export type NewBlog = typeof blogs.$inferInsert;

export const blogSchema = z.object({
  title: z.string().min(1),
  featured_image_url: z.string(),
  preference: z.number().default(1),
  type: z.enum(["blog", "publication"]).default("blog"),
});

export type BlogResponse = {
  success: boolean;
  data?: Blog;
  error?: string;
};

export type BlogsResponse = {
  success: boolean;
  data?: Blog[];
  error?: string;
};
