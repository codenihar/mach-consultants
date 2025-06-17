import { z } from "zod";

const headerBlockSchema = z.object({
  block_type: z.literal("header"),
  headerBlock: z.object({
    text: z.string().min(1),
    level: z.number().int().min(1).max(6),
  }),
});

export const paragraphBlockSchema = z.object({
  block_type: z.literal("paragraph"),
  paragraphBlock: z.object({
    text: z.string().min(1),
  }),
});

const contentBlockSchema = z.union([headerBlockSchema, paragraphBlockSchema]);
export type TContentBlockSchema = z.infer<typeof contentBlockSchema>;

export const blogPostSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
  featured_image_url: z.string(),
  type: z.enum(["blog", "publication"]).default("blog"),
  contentBlocks: z.array(contentBlockSchema).min(1),
  preference: z.number().default(1),
  updated_at: z.coerce.date(),
  created_at: z.coerce.date(),
});
export type TBlogPostSchema = z.infer<typeof blogPostSchema>;
