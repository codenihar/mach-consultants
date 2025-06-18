"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { BlogsService } from "@/actions/blogs/blogs.service";
import { Skeleton } from "@/components/ui/skeleton";
import * as motion from "motion/react-client";

interface BlogSectionProps {
  promises: Promise<[Awaited<ReturnType<typeof BlogsService.getBlogs>>]>;
}

function BlogCardSkeleton() {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <Skeleton className="w-full max-h-56 h-full object-cover transition-transform duration-500" />
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <Skeleton className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 leading-snug line-clamp-1 font-PTSerif italic" />
        <Skeleton className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed flex-grow line-clamp-4" />
      </div>
    </article>
  );
}

const getInitialX = (index: number) => {
  const offsets = [400, 0, -400];
  return offsets[index] || 0;
};

export function Blogs({ promises }: BlogSectionProps) {
  const [{ data }] = React.use(promises);

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white font-Inter">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <motion.p
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="text-pink-600 font-semibold text-md md:text-lg lg:text-xl mb-2"
          >
            Our Blogs
          </motion.p>
          <motion.h2
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight font-PTSerif italic"
          >
            Take a look at the latest blogs from Mach Consultants
          </motion.h2>
        </div>

        <React.Suspense
          fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[...Array(3)].map((_, index) => (
                <BlogCardSkeleton key={index} />
              ))}
            </div>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {data &&
              data.length > 0 &&
              data.slice(0, 3).map((blog, index) => (
                <motion.article
                  initial={{
                    x: getInitialX(index),
                    opacity: index !== 1 ? 1 : 0.5,
                    scale: index === 1 ? 0.5 : 1,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: index !== 1 ? 1 : 0.6,
                    ease: "easeInOut",
                  }}
                  key={`blog-${index}`}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={blog.featured_image_url}
                      alt={blog.title}
                      className="w-full max-h-56 h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 leading-snug line-clamp-1 font-PTSerif italic">
                      {blog.title}
                    </h3>

                    {blog.contentBlocks &&
                      blog.contentBlocks.find(
                        (block) => block.block_type === "paragraph"
                      )?.paragraphBlock?.text && (
                        <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed flex-grow line-clamp-4">
                          {
                            blog.contentBlocks.find(
                              (block) => block.block_type === "paragraph"
                            )!.paragraphBlock!.text
                          }
                        </p>
                      )}

                    <a
                      href={`/blogs/${blog.id}`}
                      className="inline-flex items-center text-pink-600 font-medium text-sm sm:text-base hover:underline mt-auto"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </motion.article>
              ))}
          </div>
        </React.Suspense>

        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            delay: 0.1,
          }}
          className="text-center mt-10 md:mt-14"
        >
          <a
            href="/blogs"
            className="inline-flex items-center px-6 py-3 bg-pink-500 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            View All Articles
            <ChevronRight className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
