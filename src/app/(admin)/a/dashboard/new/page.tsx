"use client";
import { Blog } from "@/actions/blogs/blogs.types";
import { revalidateBlogs } from "@/actions/revalidates/revalidate";
import BlogForm from "@/components/admin/table/blogs/blog-form";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function NewBlog() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const handleSubmit = async (
    blog: Omit<Blog, "id" | "created_at" | "updated_at">
  ) => {
    try {
      setPending(true);
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      });

      if (response.ok) {
        revalidateBlogs();
        alert("New Blog Posted Successfully");
        router.push("/a/dashboard");
      }
    } catch (error) {
      alert("Server Error, Please try later");
    } finally {
      setPending(false);
    }
  };

  return (
    <section className="bg-white font-RecoletaRegular">
      <div className="max-w-6xl mx-auto py-10">
        <h2 className="text-lg text-gray-700 font-bold my-4">
          Create New Blog
        </h2>

        <BlogForm onSubmit={handleSubmit} type="create" pending={pending} />
      </div>
    </section>
  );
}
