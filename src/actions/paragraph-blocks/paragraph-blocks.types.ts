import { paragraphBlocks } from "@/lib/drizzle/schema";
import { z } from "zod";

export type ParagraphBlock = typeof paragraphBlocks.$inferSelect;
export type NewParagraphBlock = typeof paragraphBlocks.$inferInsert;

export const paragraphBlockSchema = z.object({
  block_id: z.string().uuid(),
  text: z.string().min(1),
});

export type ParagraphBlockResponse = {
  success: boolean;
  data?: ParagraphBlock;
  error?: string;
};

export type ParagraphsBlockResponse = {
  success: boolean;
  data?: ParagraphBlock[];
  error?: string;
};
