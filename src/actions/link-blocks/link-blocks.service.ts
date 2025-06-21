import { LinkBlocksModel } from "@/actions/link-blocks/link-blocks.model";
import {
  LinkBlock,
  LinkBlockResponse,
  linkBlockSchema,
} from "@/actions/link-blocks/link-blocks.types";

export class LinkBlocksService {
  static async createLinkBlock(
    data: Partial<LinkBlock>
  ): Promise<LinkBlockResponse> {
    try {
      const validatedData = linkBlockSchema.parse(data);

      const linkBlock = await LinkBlocksModel.createLinkBlock(validatedData);
      return {
        success: true,
        data: linkBlock,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to create link-block",
      };
    }
  }

  static async deleteLinkBlocks(
    blockIds: string[]
  ): Promise<LinkBlockResponse> {
    try {
      const success = await LinkBlocksModel.deleteLinkBlocks(blockIds);
      if (!success) {
        return {
          success: false,
          error: "link blocks not found",
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
            : "Failed to delete link blocks",
      };
    }
  }
}
