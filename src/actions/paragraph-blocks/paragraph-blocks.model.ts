import { db } from "@/lib/db";
import { paragraphBlocks } from "@/lib/drizzle/schema";
import {
  NewParagraphBlock,
  ParagraphBlock,
} from "@/actions/paragraph-blocks/paragraph-blocks.types";
import { inArray } from "drizzle-orm";

export class ParagraphBlocksModel {
  static async createParagraphBlock(
    data: NewParagraphBlock
  ): Promise<ParagraphBlock> {
    const [paragraphBlock] = await db
      .insert(paragraphBlocks)
      .values(data)
      .returning();
    return paragraphBlock;
  }

  static async deleteParagraphBlocks(blockIds: string[]): Promise<boolean> {
    const result = await db
      .delete(paragraphBlocks)
      .where(inArray(paragraphBlocks.block_id, blockIds))
      .returning({ id: paragraphBlocks.block_id });

    return result.length > 0;
  }
}
