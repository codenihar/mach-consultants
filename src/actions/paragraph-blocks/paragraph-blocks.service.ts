import {
  ParagraphBlock,
  ParagraphBlockResponse,
  paragraphBlockSchema,
} from "@/actions/paragraph-blocks/paragraph-blocks.types";
import { ParagraphBlocksModel } from "@/actions/paragraph-blocks/paragraph-blocks.model";

export class ParagraphBlocksService {
  static async createParagraphBlock(
    data: Partial<ParagraphBlock>
  ): Promise<ParagraphBlockResponse> {
    try {
      const validatedData = paragraphBlockSchema.parse(data);

      const paragraphBlock = await ParagraphBlocksModel.createParagraphBlock(
        validatedData
      );
      return {
        success: true,
        data: paragraphBlock,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to create paragraph-block",
      };
    }
  }

  static async deleteParagraphBlocks(
    blockIds: string[]
  ): Promise<ParagraphBlockResponse> {
    try {
      const success = await ParagraphBlocksModel.deleteParagraphBlocks(
        blockIds
      );
      if (!success) {
        return {
          success: false,
          error: "paragraphs blocks not found",
        };
      }
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to delete paragraph blocks",
      };
    }
  }
}
