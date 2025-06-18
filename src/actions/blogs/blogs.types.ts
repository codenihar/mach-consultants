import { z } from "zod";
import {
  createSearchParamsCache,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";
import { commonParsers } from "@/lib/table/validations";
import { blogs } from "@/lib/drizzle/schema";

export type Blog = typeof blogs.$inferSelect;

const headerBlockSchema = z.object({
  block_order: z.number(),
  block_type: z.literal("header"),
  headerBlock: z.object({
    text: z.string().min(1),
    level: z.number().int().min(1).max(6),
  }),
});

export const paragraphBlockSchema = z.object({
  block_order: z.number(),
  block_type: z.literal("paragraph"),
  paragraphBlock: z.object({
    text: z.string().min(1),
  }),
});

const contentBlockSchema = z.union([headerBlockSchema, paragraphBlockSchema]);
export type TContentBlockSchema = z.infer<typeof contentBlockSchema>;

export const blogSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(1),
  featured_image_url: z.string(),
  type: z.enum(["blog", "publication"]).default("blog"),
  contentBlocks: z.array(contentBlockSchema).min(1),
  preference: z.number().default(0),
  updated_at: z.coerce.date().optional(),
  created_at: z.coerce.date().optional(),
});
export type TBlogSchema = z.infer<typeof blogSchema>;

export type BlogResponse = {
  success: boolean;
  data?: TBlogSchema;
  error?: string;
};

export type BlogsResponse = {
  success: boolean;
  data?: TBlogSchema[];
  error?: string;
};

export const blogSearchParamCache = createSearchParamsCache({
  ...commonParsers,
  blogId: parseAsString.withDefault(""),
  title: parseAsString.withDefault(""),
  type: parseAsString.withDefault(""),
  preference: parseAsInteger.withDefault(0),
  from: parseAsString.withDefault(""),
  to: parseAsString.withDefault(""),
});

export type GetBlogsSearchParamsSchema = Awaited<
  ReturnType<typeof blogSearchParamCache.parse>
>;
