"use client";
import { Blog } from "@/lib/types";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import React, { useEffect, useState } from "react";

interface BlogCardProps {
  blog: Blog;
}

const FeaturedBlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="overflow-hidden font-RecoletaRegular">
      <div className="relative rounded-xl overflow-hidden">
        <img
          className="w-full max-h-52 h-full object-cover hover:scale-110 transition-all duration-300"
          src={blog.featured_image_url}
          alt="Blog post visual"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = `https://placehold.co/600x400/E0E0E0/333333?text=Image+Not+Found`;
          }}
        />
      </div>

      <div className="py-3">
        {/* Title */}
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 my-2 leading-tight line-clamp-1">
          {blog.title}
        </h2>

        {/* Date and Read Time */}
        <div className="flex items-center text-md text-gray-500 mb-4 space-x-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{blog.published}</span>
          </div>
        </div>

        {/* Read More button */}
        <a
          href={`/blogs/${blog.id}`}
          className="cursor-pointer flex items-center justify-center px-3 py-2 border border-gray-300 text-base font-medium text-gray-900 rounded-xl shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
        >
          Read more
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  );
};

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchBlog = async () => {
        const response = await fetch("/api/blog");
        const { data } = await response.json();
        setBlogs(data);
      };

      fetchBlog();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-RecoletaRegular text-black">
      {loading ? (
        <div>
          <p className="text-black text-center">loading...</p>
        </div>
      ) : (
        <>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Featured Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs &&
              blogs.length > 0 &&
              blogs.map((blog, index) => (
                <FeaturedBlogCard key={`blog-${index}`} blog={blog} />
              ))}
          </div>
        </>
      )}
    </section>
  );
};

export default FeaturedBlogs;
