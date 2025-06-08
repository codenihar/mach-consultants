import React from "react";
import { BlogPageComponent } from "./BlogPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BlogPage = () => {
  return (
    <main>
      <Header />
      <BlogPageComponent />
      <Footer />
    </main>
  );
};

export default BlogPage;
