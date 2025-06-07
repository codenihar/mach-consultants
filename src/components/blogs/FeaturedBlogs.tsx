"use client";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import React from "react";

type BlogCardProps = {
  blog: {
    image: string;
    category: string;
    title: string;
    date: string;
    route: string;
  };
};

const blogs = [
  {
    image:
      "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67309ef95d1f44a4dacde997_blog-thumb-4-p-500.jpg",
    title: "How to balance creativity and functionality in web design",
    date: "November 10, 2024",
    route: "/",
    category: "Hobbies",
  },
  {
    image:
      "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67309ef95d1f44a4dacde997_blog-thumb-4-p-500.jpg",
    title: "How to balance creativity and functionality in web design",
    date: "November 10, 2024",
    route: "/",
    category: "Hobbies",
  },
  {
    image:
      "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67309ef95d1f44a4dacde997_blog-thumb-4-p-500.jpg",
    title: "How to balance creativity and functionality in web design",
    date: "November 10, 2024",
    route: "/",
    category: "Hobbies",
  },
  {
    image:
      "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67309ef95d1f44a4dacde997_blog-thumb-4-p-500.jpg",
    title: "How to balance creativity and functionality in web design",
    date: "November 10, 2024",
    route: "/",
    category: "Hobbies",
  },
  {
    image:
      "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67309ef95d1f44a4dacde997_blog-thumb-4-p-500.jpg",
    title: "How to balance creativity and functionality in web design",
    date: "November 10, 2024",
    route: "/",
    category: "Hobbies",
  },
  {
    image:
      "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67309ef95d1f44a4dacde997_blog-thumb-4-p-500.jpg",
    title: "How to balance creativity and functionality in web design",
    date: "November 10, 2024",
    route: "/",
    category: "Hobbies",
  },
];

const FeaturedBlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden md:max-w-xl lg:max-w-md font-RecoletaRegular">
      {/* Image section */}
      <div className="relative rounded-xl overflow-hidden">
        <img
          className="w-full h-56 object-fit hover:scale-110 transition-all duration-300"
          src={blog.image}
          alt="Blog post visual"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = `https://placehold.co/600x400/E0E0E0/333333?text=Image+Not+Found`;
          }}
        />
        <span className="absolute top-4 left-4 bg-white px-3 py-1 text-sm font-semibold text-gray-800 rounded-full shadow-md">
          {blog.category}
        </span>
      </div>

      {/* Content section */}
      <div className="py-3">
        {/* Title */}
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 my-2 leading-tight">
          {blog.title}
        </h2>

        {/* Date and Read Time */}
        <div className="flex items-center text-md text-gray-500 mb-4 space-x-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{blog.date}</span>
          </div>
        </div>

        {/* Read More button */}
        <button className="cursor-pointer flex items-center justify-center px-3 py-2 border border-gray-300 text-base font-medium text-gray-900 rounded-xl shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
          Read more
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

const FeaturedBlogs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-RecoletaRegular text-black">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs &&
          blogs.length > 0 &&
          blogs.map((blog, index) => (
            <FeaturedBlogCard key={`blog-${index}`} blog={blog} />
          ))}
      </div>
    </section>
  );
};

export default FeaturedBlogs;
