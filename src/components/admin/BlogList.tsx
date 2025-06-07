import { Blog } from "@/lib/types";
import React from "react";

interface BlogListProps {
  blogs: Blog[];
  onEdit: (blog: Blog) => void;
  onDelete: (id: string) => void;
}

const BlogList: React.FC<BlogListProps> = ({ blogs, onEdit, onDelete }) => {
  return (
    <div className="space-y-4 overflow-y-auto pb-2">
      {blogs.map((blog) => (
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
                className="w-full md:w-32 rounded-2xl"
              />
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-xl font-semibold truncate">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-md">
                  published {blog.published}
                </p>
              </div>
            </div>

            {/* Navigations */}
            <div className="md:px-4 flex flex-col xs:flex-row sm:flex-col md:flex-row gap-2 w-full xs:w-auto sm:w-full md:w-auto justify-end">
              <button
                onClick={() => onEdit(blog)}
                className="cursor-pointer px-4 sm:px-6 py-1 text-black border border-gray-400 bg-blue-100 hover:bg-blue-200 rounded-3xl transition text-sm sm:text-base"
              >
                Edit
              </button>

              <button
                onClick={() => onDelete(blog.id)}
                className="cursor-pointer px-4 sm:px-6 py-1 text-black border border-gray-400 bg-red-100 hover:bg-red-200 rounded-3xl transition text-sm sm:text-base"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
