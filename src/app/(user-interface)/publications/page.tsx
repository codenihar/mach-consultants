import { RecentBlogs } from "@/components/user-interface/publications/Blogs";
import { Publications } from "@/components/user-interface/publications/Publications";
import { BlogsAndPublications } from "@/components/user-interface/publications/HeroSection";
import React from "react";
import { MiddleSection } from "@/components/user-interface/publications/MiddleSection";

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
