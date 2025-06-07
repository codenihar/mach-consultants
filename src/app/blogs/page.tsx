import ArticlesSection from "@/components/blogs/ArticleSection";
import FeaturedBlogs from "@/components/blogs/FeaturedBlogs";
import HeroSection from "@/components/blogs/HeroSection";
import React from "react";

const Blogs = () => {
  return (
    <main className="bg-white">
      <HeroSection />
      <ArticlesSection />
      <FeaturedBlogs />
    </main>
  );
};

export default Blogs;
