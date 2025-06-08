"use client";
import BlogForm from "@/components/admin/BlogForm";
import { Blog } from "@/lib/types";
import { useBlogStore } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const NewBlog = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { addBlog } = useBlogStore();
  const handleCancel = () => {};

  const handleSubmit = async (
    blog: Omit<Blog, "id" | "published" | "updated_at">
  ) => {
    try {
      setLoading(true);
      const response = await addBlog(blog);
      if (response.ok) {
        alert("New Blog Posted Successfully");
        router.push("/a/dashboard");
      }
    } catch (error) {
      alert("Server Error, Please try later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white font-RecoletaRegular">
      <div className="max-w-6xl mx-auto py-10">
        <h2 className="text-2xl text-gray-700 font-bold my-4">
          Create New Blog
        </h2>
        <BlogForm
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          loading={loading}
        />
      </div>
    </section>
  );
};
