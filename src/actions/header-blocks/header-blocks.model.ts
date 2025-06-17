import { db } from "@/lib/db";
import { headerBlocks } from "@/lib/drizzle/schema";
import { HeaderBlock, NewHeaderBlock } from "./header-blocks.types";
import { inArray } from "drizzle-orm";

export class HeaderBlocksModel {
  static async createHeaderBlock(data: NewHeaderBlock): Promise<HeaderBlock> {
    const [headerBlock] = await db
      .insert(headerBlocks)
      .values(data)
      .returning();
    return headerBlock;
  }

  static async deleteHeaderBlocks(blockIds: string[]): Promise<boolean> {
    const result = await db
      .delete(headerBlocks)
      .where(inArray(headerBlocks.block_id, blockIds))
      .returning({ id: headerBlocks.block_id });

    return result.length > 0;
  }
}
