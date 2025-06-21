import { z } from "zod";
import { createSearchParamsCache } from "nuqs/server";
import { commonParsers } from "@/lib/table/validations";
import { blogs } from "@/lib/drizzle/schema";
import { getSortingStateParser } from "@/lib/table/parser";

export type Blog = typeof blogs.$inferSelect;

const headerBlockSchema = z.object({
  block_order: z.number(),
  block_type: z.literal("header"),
  headerBlock: z.object({
    text: z.string().min(1, "Header is required"),
    level: z.number().int().min(1),
  }),
});

const paragraphBlockSchema = z.object({
  block_order: z.number(),
  block_type: z.literal("paragraph"),
  paragraphBlock: z.object({
    text: z.string().min(1, "Paragraph is required"),
    link: z.string(),
  }),
});

const linkBlockSchema = z.object({
  block_order: z.number(),
  block_type: z.literal("link"),
  linkBlock: z.object({
    link: z.string().min(1, "Link must be valid"),
    text: z.string(),
  }),
});

const contentBlockSchema = z.union([
  headerBlockSchema,
  paragraphBlockSchema,
  linkBlockSchema,
]);
export type TContentBlockSchema = z.infer<typeof contentBlockSchema>;

export const blogSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(1, "Title is required"),
  featured_image_url: z.string().min(1, "Image URL is required"),
  type: z.enum(["blog", "publication"]),
  contentBlocks: z.array(contentBlockSchema).min(1),
  preference: z.number(),
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
  sort: getSortingStateParser<Blog>().withDefault([]),
});

export type GetBlogsSearchParamsSchema = Awaited<
  ReturnType<typeof blogSearchParamCache.parse>
>;
