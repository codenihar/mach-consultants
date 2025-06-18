import { z } from "zod";
import { contentBlocks } from "@/lib/drizzle/schema";
import { headerBlockSchema } from "@/actions/header-blocks/header-blocks.types";
import { paragraphBlockSchema } from "@/actions/paragraph-blocks/paragraph-blocks.types";

export type ContentBlock = typeof contentBlocks.$inferSelect;
export type NewContentBlock = typeof contentBlocks.$inferInsert;

export const contentBlockSchema = z.object({
  blog_id: z.string(),
  block_type: z.enum(["header", "paragraph"]),
  block_order: z.number(),
});

export type ContentBlockResponse = {
  success: boolean;
  data?: ContentBlock;
  error?: string;
};

export type ContentBlocksResponse = {
  success: boolean;
  data?: ContentBlock[];
  error?: string;
};
