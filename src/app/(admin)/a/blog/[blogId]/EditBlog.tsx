"use client";
import BlogForm from "@/components/admin/BlogForm";
import { Blog } from "@/lib/types";
import { useBlogStore } from "@/store/store";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const EditBlog = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { blogId } = useParams();
  const { updateBlog } = useBlogStore();
  const handleCancel = () => {};

  const handleSubmit = async (
    blog: Omit<Blog, "id" | "published" | "updated_at">
  ) => {
    if (!blogId) return;

    try {
      setLoading(true);
      const response = await updateBlog(blog, blogId as string);
      if (response.ok) {
        alert("Updated Blog Successfully");
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
          {blogId ? "Update" : "Create New"} Blog
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
