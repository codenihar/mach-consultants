"use client";
import { Blog } from "@/lib/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export function SingleBlogPage() {
  const { blogId } = useParams();
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchBlog = async () => {
        const response = await fetch(`/api/blog?blogId=${blogId}`);
        const { data } = await response.json();
        setBlog(data);
      };

      if (blogId) {
        fetchBlog();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [blogId]);

  return loading ? (
    <div className="max-w-4xl mx-auto px-4 py-36 flex items-center justify-center">
      <p className="text-center text-black">loading...</p>
    </div>
  ) : (
    <div className="max-w-4xl mx-auto px-4 pt-32 pb-10 md:py-36 font-Inter">
      <div className="text-sm flex items-center gap-4 text-gray-500">
        <span className="text-md md:text-lg">
          Published on {blog?.published}
        </span>
        {/* <span>
          📝 Updated: {new Date(blog?.updated_at).toLocaleDateString()}
        </span> */}
      </div>

      <h1 className="text-3xl md:text-4xl font-bold my-4 font-PTSerif italic">
        {blog?.title}
      </h1>

      <div className="rounded-xl overflow-hidden mb-6 border border-gray-200 shadow-sm">
        <img
          src={blog?.featured_image_url}
          alt="Blog Visual"
          className="w-full max-h-128 object-cover"
        />
      </div>

      {blog?.contentBlocks.map((block, index) => {
        if (block.block_type === "header" && block.headerBlock) {
          return (
            <h2
              key={index}
              className="text-2xl font-semibold mb-2 mt-6 font-PTSerif italic"
            >
              {block.headerBlock.text}
            </h2>
          );
        }

        if (block.block_type === "paragraph" && block.paragraphBlock) {
          return (
            <p key={index} className="text-gray-700 leading-relaxed mb-4">
              {block.paragraphBlock.text}
            </p>
          );
        }

        return null;
      })}
    </div>
  );
}
