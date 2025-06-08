import { Blog } from "@/lib/types";
import { create } from "zustand";

interface BlogStore {
  blogs: Blog[];
  editBlog: Blog | null;
  loadBlogs: () => void;
  blogLoading: boolean;
  updateBlog: (
    blog: Omit<Blog, "id" | "published" | "updated_at">,
    blogId: string
  ) => Promise<Response>;
  onDelete: (blogId: string) => void;
  addBlog: (
    blog: Omit<Blog, "id" | "published" | "updated_at">
  ) => Promise<Response>;
}

export const useBlogStore = create<BlogStore>((set, get) => ({
  blogs: [],
  editBlog: null,
  blogLoading: true,
  loadBlogs: async () => {
    try {
      const fetchBlogs = async () => {
        const res = await fetch("/api/blog");
        const { data } = await res.json();
        set({ blogs: data });
      };

      fetchBlogs();
    } catch (error) {
      console.error(error);
    } finally {
      set({ blogLoading: false });
    }
  },
  onDelete: async (blogId) => {
    try {
      const response = await fetch(`/api/blog?blogId=${blogId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Delete failed:", errorData);
        alert("Failed to delete blog.");
      } else {
        alert("Blog deleted successfully.");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("An unexpected error occurred.");
    }
  },
  addBlog: async (blog) => {
    const response = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });
    return response;
  },
  updateBlog: async (blog, blogId) => {
    const response = await fetch(`/api/blog?blogId=${blogId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });
    return response;
  },
}));
