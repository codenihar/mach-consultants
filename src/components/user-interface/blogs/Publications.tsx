"use client";

import React, { useEffect, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Calendar } from "lucide-react";
import { motion, useAnimation, useInView } from "motion/react";
import { BlogDataContext } from "@/components/layout/Layout-wrapper";

interface BlogCardProps {
  blog: {
    updated_at: Date;
    featured_image_url: string;
    title: string;
    id: string;
  };
  index: number;
}

function FeaturedBlogSkeleton() {
  return (
    <div className="overflow-hidden font-Inter">
      <div className="relative rounded-xl overflow-hidden">
        <Skeleton className="w-full max-h-52 h-full object-cover hover:scale-110 transition-all duration-300" />
      </div>

      <div className="py-3">
        <Skeleton className="text-xl lg:text-2xl font-bold text-gray-900 my-2 leading-tight line-clamp-1 font-PTSerif italic" />
        <div className="flex items-center text-md text-gray-500 mb-4 space-x-4">
          <Skeleton className="flex items-center" />
        </div>
        <Skeleton className="cursor-pointer flex items-center justify-center px-3 py-2 border border-gray-300 text-base font-medium text-gray-900 rounded-xl shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out" />
      </div>
    </div>
  );
}

const PublicationCard: React.FC<BlogCardProps> = ({ blog, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 * index }}
      className="font-Inter"
    >
      <div className="relative rounded-xl border border-gray-300">
        <img
          className="w-full max-h-52 h-full object-fit hover:scale-102 transition-all duration-300 shadow-sm"
          src={blog.featured_image_url}
          alt="Blog post visual"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = `https://placehold.co/600x400/E0E0E0/333333?text=Image+Not+Found`;
          }}
        />
      </div>

      <div className="py-3 space-y-2">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 my-2 leading-tight line-clamp-1 font-PTSerif italic">
          {blog.title}
        </h2>

        <div className="flex items-center text-md text-gray-500 mb-4 space-x-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>
              {blog?.updated_at && new Date(blog?.updated_at).toLocaleString()}
            </span>
          </div>
        </div>

        <a
          href={`/blogs/${blog?.id}`}
          className="cursor-pointer w-[max-content] flex items-center justify-center px-5 py-2 border border-gray-300 text-base font-medium text-gray-900 rounded-xl shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
        >
          Read more
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

export const Publications = () => {
  const promises = React.useContext(BlogDataContext);
  if (!promises) return;

  const [{ data }] = React.use(promises);

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [inView]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-Inter text-black">
      <motion.h2
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold mb-8 font-PTSerif italic"
      >
        Publications
      </motion.h2>

      <React.Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <FeaturedBlogSkeleton key={index} />
            ))}
          </div>
        }
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { staggerChildren: 0.4 } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {data &&
            data.length > 0 &&
            data.map((blog, index) => {
              if (!blog?.updated_at || !blog?.id) return;

              return (
                <PublicationCard
                  key={`blog-${index}`}
                  blog={{
                    ...blog,
                    id: blog.id ?? "",
                    updated_at: blog.updated_at ?? new Date(),
                  }}
                  index={index}
                />
              );
            })}
        </motion.div>
      </React.Suspense>
    </section>
  );
};
