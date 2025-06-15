import { useBlogStore } from "@/store/store";
import React, { useState } from "react";

const BlogList: React.FC = () => {
  const { blogs, blogLoading, onDelete } = useBlogStore();
  const [loading, setLoading] = useState(false);

  const handleDelete = async (blogId: string) => {
    try {
      setLoading(true);
      await onDelete(blogId);

      if (typeof window !== "undefined") {
        window.location.reload();
      }
    } catch (error) {
      console.error("Failed to delete:", error);
    } finally {
      setLoading(false);
    }
  };

  return blogLoading || loading ? (
    <div className="text-black">loading...</div>
  ) : (
    <div className="space-y-4 overflow-y-auto pb-2">
      {blogs.length === 0 ? (
        <p className="text-black text-center">No Blog Posts</p>
      ) : (
        blogs.map((blog) => (
          <div
            key={blog.id}
            className="p-2 text-black border border-gray-200 shadow-sm rounded-3xl"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              {/* Content */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
                <img
                  src={blog.featured_image_url}
                  alt={blog.title}
                  className="w-full md:w-32 min-h-20 max-h-20 object-cover rounded-2xl"
                />
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl font-semibold line-clamp-1">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-md">
                    published on {blog.published}
                  </p>
                </div>
              </div>

              {/* Navigations */}
              <div className="md:px-4 flex flex-col xs:flex-row sm:flex-col md:flex-row gap-2 w-full xs:w-auto sm:w-full md:w-auto justify-end">
                <a
                  href={`/a/blog/${blog.id}`}
                  className="cursor-pointer px-4 sm:px-6 py-1 text-black border border-gray-400 bg-pink-200 hover:bg-blue-200 rounded-3xl transition text-sm sm:text-base"
                >
                  Edit
                </a>

                <a
                  onClick={() => {
                    const confirmed = window.confirm(
                      "Are you sure you want to delete this blog?"
                    );
                    if (confirmed) {
                      handleDelete(blog.id);
                    }
                  }}
                  className="cursor-pointer px-4 sm:px-6 py-1 text-black border border-gray-400 bg-red-100 hover:bg-red-200 rounded-3xl transition text-sm sm:text-base"
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
