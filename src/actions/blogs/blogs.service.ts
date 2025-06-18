import { BlogsModel } from "@/actions/blogs/blogs.model";
import {
  Blog,
  blogSchema,
  BlogResponse,
  BlogsResponse,
  GetBlogsSearchParamsSchema,
  TBlogSchema,
} from "@/actions/blogs/blogs.types";

export class BlogsService {
  static async createBlog(
    data: TBlogSchema
  ): Promise<{ success: boolean; data?: TBlogSchema["id"]; error?: string }> {
    try {
      const validatedData = blogSchema.parse(data);

      const blog = await BlogsModel.createBlog(validatedData);
      return {
        success: true,
        data: blog,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to create blog",
      };
    }
  }

  static async getBlogById(id: string): Promise<BlogResponse> {
    try {
      const blog = await BlogsModel.getBlogById(id);
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
        error: error instanceof Error ? error.message : "Failed to get blog",
      };
    }
  }

  static async getBlogs(): Promise<BlogsResponse> {
    try {
      const blogs = await BlogsModel.getBlogs();
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

  static async getAdminBlogs(input: GetBlogsSearchParamsSchema): Promise<{
    success: boolean;
    data?: Blog[];
    pageCount: number;
    error?: string;
  }> {
    try {
      const blogs = await BlogsModel.getAdminBlogs(input);
      return { success: true, data: blogs.data, pageCount: blogs.pageCount };
    } catch (error) {
      return { success: false, data: [], pageCount: 0 };
    }
  }

  static async updateBlog(
    id: string,
    data: Partial<TBlogSchema>
  ): Promise<{
    success: boolean;
    data?: TBlogSchema["id"];
    error?: string;
  }> {
    try {
      const validatedData = blogSchema.parse(data);

      const blog = await BlogsModel.updateBlog(id, validatedData);
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
