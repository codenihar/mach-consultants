import { RecentBlogs } from "@/components/user-interface/blogs/Blogs";
import { Publications } from "@/components/user-interface/blogs/Publications";
import { BlogsAndPublications } from "@/components/user-interface/blogs/HeroSection";
import React from "react";
import { MiddleSection } from "@/components/user-interface/blogs/MiddleSection";

export default async function Blogs() {
  return (
    <main className="bg-white">
      <BlogsAndPublications />
      <RecentBlogs />
      <MiddleSection />
      <Publications />
    </main>
  );
}
