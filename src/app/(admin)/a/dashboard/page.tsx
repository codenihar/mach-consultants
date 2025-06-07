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
      title: "Getting Started with React",
      content: "React is a JavaScript library for building user interfaces...",
      author: "John Doe",
      published: "2023-05-15",
      image:
        "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67309ef95d1f44a4dacde997_blog-thumb-4-p-500.jpg",
    },
    {
      id: "2",
      title: "TypeScript Best Practices",
      content: "TypeScript brings static typing to JavaScript...",
      author: "Jane Smith",
      published: "2023-06-20",
      image:
        "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67309ef95d1f44a4dacde997_blog-thumb-4-p-500.jpg",
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
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingBlog(null);
  };

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
