import { db } from "@/lib/db";
import { linkBlocks } from "@/lib/drizzle/schema";
import { inArray } from "drizzle-orm";
import {
  LinkBlock,
  NewLinkBlock,
} from "@/actions/link-blocks/link-blocks.types";

export class LinkBlocksModel {
  static async createLinkBlock(data: NewLinkBlock): Promise<LinkBlock> {
    const [linkBlock] = await db.insert(linkBlocks).values(data).returning();
    return linkBlock;
  }

  static async deleteLinkBlocks(blockIds: string[]): Promise<boolean> {
    const result = await db
      .delete(linkBlocks)
      .where(inArray(linkBlocks.block_id, blockIds))
      .returning({ id: linkBlocks.block_id });

    return result.length > 0;
  }
}
