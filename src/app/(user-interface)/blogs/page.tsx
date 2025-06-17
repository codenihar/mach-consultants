import { BlogsService } from "@/actions/blogs/blogs.service";
import { RecentBlogs } from "@/components/user-interface/blogs/ArticleSection";
import { FeaturedBlogs } from "@/components/user-interface/blogs/FeaturedBlogs";
import { BlogsAndPublications } from "@/components/user-interface/blogs/HeroSection";
import React from "react";

export default async function Blogs() {
  const promises = Promise.all([BlogsService.getBlogs()]);

  return (
    <main className="bg-white">
      <BlogsAndPublications promises={promises} />
      <RecentBlogs promises={promises} />
      <FeaturedBlogs promises={promises} />
    </main>
  );
}
