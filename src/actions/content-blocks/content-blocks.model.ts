import { db } from "@/lib/db";
import { contentBlocks } from "@/lib/drizzle/schema";
import { ContentBlock, NewContentBlock } from "./content-blocks.types";
import { eq, inArray } from "drizzle-orm";

export class ContentBlocksModel {
  static async createContentBlock(
    data: NewContentBlock
  ): Promise<ContentBlock> {
    const [contentBlock] = await db
      .insert(contentBlocks)
      .values(data)
      .returning();
    return contentBlock;
  }

  static async getContentBlocksByBlogId(id: string): Promise<{ id: string }[]> {
    const allContentBlocks = await db
      .select({ id: contentBlocks.id })
      .from(contentBlocks)
      .where(eq(contentBlocks.blog_id, id));

    return allContentBlocks;
  }

  static async deleteContentBlocks(blockIds: string[]): Promise<boolean> {
    const result = await db
      .delete(contentBlocks)
      .where(inArray(contentBlocks.id, blockIds))
      .returning({ id: contentBlocks.id });

    return result.length > 0;
  }
}
