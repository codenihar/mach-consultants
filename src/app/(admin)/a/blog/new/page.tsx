"use client";
import BlogForm from "@/components/admin/BlogForm";
import { Blog } from "@/lib/types";
import React from "react";

const NewBlog = () => {
  const handleSubmit = (blogData: Omit<Blog, "id" | "published">) => {
    console.log(blogData);
  };
  const handleCancel = () => {};

  return (
    <section className="bg-white font-RecoletaRegular">
      <div className="max-w-6xl mx-auto py-10">
        <h2 className="text-2xl text-gray-700 font-bold my-4">
          Create New Blog
        </h2>
        <BlogForm onSubmit={handleSubmit} onCancel={handleCancel} />
      </div>
    </section>
  );
};

export default NewBlog;
