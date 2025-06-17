import {
  HeaderBlock,
  HeaderBlockResponse,
  headerBlockSchema,
} from "@/actions/header-blocks/header-blocks.types";
import { HeaderBlocksModel } from "@/actions/header-blocks/header-blocks.model";

export class HeaderBlocksService {
  static async creatHeaderBlock(
    data: Partial<HeaderBlock>
  ): Promise<HeaderBlockResponse> {
    try {
      const validatedData = headerBlockSchema.parse(data);

      const headerBlock = await HeaderBlocksModel.createHeaderBlock(
        validatedData
      );
      return {
        success: true,
        data: headerBlock,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to create header-block",
      };
    }
  }

  static async deleteHeaderBlocks(
    blockIds: string[]
  ): Promise<HeaderBlockResponse> {
    try {
      const success = await HeaderBlocksModel.deleteHeaderBlocks(blockIds);
      if (!success) {
        return {
          success: false,
          error: "header blocks not found",
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
            : "Failed to delete header blocks",
      };
    }
  }
}
