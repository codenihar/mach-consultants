"use client";
import AdminHero from "@/components/admin/AdminHero";
import BlogList from "@/components/admin/BlogList";
import React, { useEffect } from "react";
import { useBlogStore } from "@/store/store";

export const DashboardComponent: React.FC = () => {
  const { loadBlogs } = useBlogStore();

  useEffect(() => {
    loadBlogs();
  }, []);

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

        <BlogList />
      </div>
    </section>
  );
};
