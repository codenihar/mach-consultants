"use client";
import AdminHero from "@/components/admin/AdminHero";
import BlogForm from "@/components/admin/BlogForm";
import BlogList from "@/components/admin/BlogList";
import { Blog } from "@/lib/types";
import React, { useState } from "react";

const App: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      id: "1",
      title: "Organization Development Journal",
      featured_image_url:
        "https://mach-consultants.com/wp-content/uploads/2024/05/odj-logo.jpg",
      content: [
        {
          type: "header",
          data: {
            text: "Mastering Productivity",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Productivity isn’t about doing more, it’s about doing what matters most efficiently.",
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "Prioritize tasks using the Eisenhower matrix",
              "Block distractions with tools like Focusmate",
              "Automate repetitive workflows",
            ],
          },
        },
      ],
      published: "today",
    },
  ]);
  const [edit, setEdit] = useState<Blog | null>(null);

  const handleEdit = (blog: Blog) => {
    setEdit(blog);
  };

  const handleDelete = (id: string) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const handleSubmit = (blogData: Omit<Blog, "id" | "published">) => {
    if (edit) {
      setBlogs(
        blogs.map((blog) =>
          blog.id === edit.id ? { ...blog, ...blogData } : blog
        )
      );
    } else {
      const newBlog: Blog = {
        ...blogData,
        id: Date.now().toString(),
        published: new Date().toISOString().split("T")[0],
      };
      setBlogs([...blogs, newBlog]);
    }
  };

  const handleCancel = () => {};

  return (
    <section className="min-h-screen bg-gray-100 font-RecoletaRegular">
      <AdminHero />
      <div className="my-4 max-w-6xl mx-auto p-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800">All Blogs</h2>
          <a
            href="/a/blog/new"
            className="cursor-pointer px-4 py-2 text-md border border-gray-400 bg-green-100 hover:bg-green-200 text-gray-700 rounded-3xl transition"
          >
            Create New Blog
          </a>
        </div>

        <BlogList blogs={blogs} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </section>
  );
};

export default App;
