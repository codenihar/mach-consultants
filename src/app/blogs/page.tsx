import ArticlesSection from "@/components/blogs/ArticleSection";
import FeaturedBlogs from "@/components/blogs/FeaturedBlogs";
import HeroSection from "@/components/blogs/HeroSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";

const Blogs = () => {
  return (
    <main className="bg-white">
      <Header />
      <HeroSection />
      <ArticlesSection />
      <FeaturedBlogs />
      <Footer />
    </main>
  );
};

export default Blogs;
