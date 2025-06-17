import { BlogsModel } from "@/actions/blogs/blogs.model";
import { Blog, BlogResponse, blogSchema } from "@/actions/blogs/blogs.types";
import { TBlogPostSchema } from "@/lib/validations";

export class BlogsService {
  static async createBlog(data: Partial<Blog>): Promise<BlogResponse> {
    try {
      const validatedData = blogSchema.parse(data);

      const chat = await BlogsModel.createBlog(validatedData);
      return {
        success: true,
        data: chat,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to create chat",
      };
    }
  }

  static async getBlogById(id: string): Promise<{
    success: boolean;
    data?: TBlogPostSchema;
    error?: string;
  }> {
    try {
      const blog = await BlogsModel.getBlogById(id);
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
        error: error instanceof Error ? error.message : "Failed to get blog",
      };
    }
  }

  static async getBlogs(): Promise<{
    success: boolean;
    data?: TBlogPostSchema[];
    error?: string;
  }> {
    try {
      const blogs = await BlogsModel.getBlogs();
      if (!blogs) {
        return {
          success: false,
          error: "Chat not found",
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

  static async updateBlog(
    id: string,
    data: Partial<Blog>
  ): Promise<BlogResponse> {
    try {
      const blog = await BlogsModel.updateBlog(id, data);
      if (!blog) {
        return {
          success: false,
          error: "Blog not found",
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

  static async deleteBlog(id: string): Promise<BlogResponse> {
    try {
      const success = await BlogsModel.deleteBlog(id);
      if (!success) {
        return {
          success: false,
          error: "Blog not found",
        };
      }
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to delete blog",
      };
    }
  }
}
