import { BlogsService } from "@/actions/blogs/blogs.service";
import { RecentBlogs } from "@/components/user-interface/blogs/Blogs";
import { Publications } from "@/components/user-interface/blogs/Publications";
import { BlogsAndPublications } from "@/components/user-interface/blogs/HeroSection";
import React from "react";
import { MiddleSection } from "@/components/user-interface/blogs/MiddleSection";

export default async function Blogs() {
  const promises = Promise.all([BlogsService.getBlogs()]);

  return (
    <main className="bg-white">
      <BlogsAndPublications promises={promises} />
      <RecentBlogs promises={promises} />
      <MiddleSection promises={promises} />
      <Publications promises={promises} />
    </main>
  );
}
