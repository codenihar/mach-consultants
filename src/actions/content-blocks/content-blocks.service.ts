import {
  ContentBlock,
  ContentBlockResponse,
  contentBlockSchema,
} from "@/actions/content-blocks/content-blocks.types";
import { ContentBlocksModel } from "@/actions/content-blocks/content-blocks.model";
import {
  Blog,
  blogPostSchema,
  BlogResponse,
} from "@/actions/blogs/blogs.types";
import { BlogsModel } from "@/actions/blogs/blogs.model";

export class ContentBlocksService {
  static async createContentBlock(
    data: Partial<ContentBlock>
  ): Promise<ContentBlockResponse> {
    try {
      const validatedData = contentBlockSchema.parse(data);

      const contentBlock = await ContentBlocksModel.createContentBlock(
        validatedData
      );
      return {
        success: true,
        data: contentBlock,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to create chat",
      };
    }
  }

  static async getContentBlocksByBlogId(id: string): Promise<{
    success: boolean;
    data?: { id: string }[];
    error?: string;
  }> {
    try {
      const blogs = await ContentBlocksModel.getContentBlocksByBlogId(id);
      if (!blogs) {
        return {
          success: false,
          error: "Blogs not found",
        };
      }
      return {
        success: true,
        data: blogs,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to get blogs",
      };
    }
  }

  static async updateContentBlock(
    id: string,
    data: Partial<Blog>
  ): Promise<BlogResponse> {
    try {
      const validatedData = blogPostSchema.partial().parse(data);

      const blog = await BlogsModel.updateBlog(id, validatedData);
      if (!blog) {
        return {
          success: false,
          error: "Chat not found",
        };
      }
      return {
        success: true,
        data: blog,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to update blog",
      };
    }
  }

  static async deleteContentBlocks(
    blockIds: string[]
  ): Promise<ContentBlockResponse> {
    try {
      const success = await ContentBlocksModel.deleteContentBlocks(blockIds);
      if (!success) {
        return {
          success: false,
          error: "content block not found",
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
            : "Failed to delete content block",
      };
    }
  }
}
