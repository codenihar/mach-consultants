import { z } from "zod";
import { blogs } from "@/lib/drizzle/schema";
import {
  createSearchParamsCache,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";
import { commonParsers } from "@/lib/table/validations";

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
  pageCount: number;
};

export const blogSearchParamCache = createSearchParamsCache({
  ...commonParsers,
  blogId: parseAsString.withDefault(""),
  title: parseAsString.withDefault(""),
  type: parseAsString.withDefault(""),
  preference: parseAsInteger.withDefault(1),
  from: parseAsString.withDefault(""),
  to: parseAsString.withDefault(""),
});

export type GetBlogsSearchParamsSchema = Awaited<
  ReturnType<typeof blogSearchParamCache.parse>
>;
