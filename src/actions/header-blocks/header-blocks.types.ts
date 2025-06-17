import { headerBlocks } from "@/lib/drizzle/schema";
import { z } from "zod";

export type HeaderBlock = typeof headerBlocks.$inferSelect;
export type NewHeaderBlock = typeof headerBlocks.$inferInsert;

export const headerBlockSchema = z.object({
  block_id: z.string().uuid(),
  text: z.string(),
  level: z.number(),
});

export type HeaderBlockResponse = {
  success: boolean;
  data?: HeaderBlock;
  error?: string;
};

export type HeaderBlocksResponse = {
  success: boolean;
  data?: HeaderBlock[];
  error?: string;
};
