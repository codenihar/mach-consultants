import { z } from "zod";

const headerBlockSchema = z.object({
  type: z.literal("header"),
  data: z.object({
    text: z.string().min(1),
    level: z.number().int().min(1).max(6),
  }),
});

const paragraphBlockSchema = z.object({
  type: z.literal("paragraph"),
  data: z.object({
    text: z.string().min(1),
  }),
});

const listBlockSchema = z.object({
  type: z.literal("list"),
  data: z.object({
    list_style: z.enum(["ordered", "unordered"]),
    items: z.array(z.string().min(1)).min(1),
  }),
});

const imageBlockSchema = z.object({
  type: z.literal("image"),
  data: z.object({
    image_url: z.string().url(),
    caption: z.string().optional(),
    with_border: z.boolean().optional(),
  }),
});

export const blogContentBlockSchema = z.union([
  headerBlockSchema,
  paragraphBlockSchema,
  listBlockSchema,
  imageBlockSchema,
]);

export const blogPostSchema = z.object({
  title: z.string().min(1),
  featured_image_url: z.string().url().optional(),
  content: z.array(blogContentBlockSchema).min(1),
});
