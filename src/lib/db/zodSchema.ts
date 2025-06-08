import { z } from "zod";

const headerBlockSchema = z.object({
  block_type: z.literal("header"),
  headerBlock: z.object({
    text: z.string().min(1),
    level: z.number().int().min(1).max(6),
  }),
});

const paragraphBlockSchema = z.object({
  block_type: z.literal("paragraph"),
  paragraphBlock: z.object({
    text: z.string().min(1),
  }),
});

export const blogContentBlockSchema = z.union([
  headerBlockSchema,
  paragraphBlockSchema,
]);
export type BlogContentBlock = z.infer<typeof blogContentBlockSchema>;

export const blogPostSchema = z.object({
  title: z.string().min(1),
  featured_image_url: z.string(),
  contentBlocks: z.array(blogContentBlockSchema).min(1),
});

export const signInSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export type TSignInSchema = z.infer<typeof signInSchema>;
