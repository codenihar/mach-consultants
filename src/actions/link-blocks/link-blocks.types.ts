import { linkBlocks } from "@/lib/drizzle/schema";
import { z } from "zod";

export type LinkBlock = typeof linkBlocks.$inferSelect;
export type NewLinkBlock = typeof linkBlocks.$inferInsert;

export const linkBlockSchema = z.object({
  block_id: z.string().uuid(),
  text: z.string().optional(),
  link: z.string(),
});

export type LinkBlockResponse = {
  success: boolean;
  data?: LinkBlock;
  error?: string;
};

export type LinkBlocksResponse = {
  success: boolean;
  data?: LinkBlock[];
  error?: string;
};
