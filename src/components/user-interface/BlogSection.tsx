"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import * as motion from "motion/react-client";
import { useResponsiveFlag } from "@/lib/hooks/use-mobile";
import { BlogDataContext } from "@/components/layout/Layout-wrapper";

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

export function Blogs({ className }: { className?: string }) {
  const promises = React.useContext(BlogDataContext);
  if (!promises) return;

  const [{ data }] = React.use(promises);

  const isMobile = useResponsiveFlag();
  const [hasMounted, setHasMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <section className="md:py-16 lg:py-20 px-4 sm:px-6 bg-white font-inter">
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
            className="text-[#075fa4] font-semibold text-md md:text-lg lg:text-xl mb-2"
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
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#6e3a5e] leading-tight ${className}`}
          >
            Take a look at the latest blogs from MACH Consultants
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {data &&
              data.length > 0 &&
              data
                .filter((b) => [4, 5, 6].includes(b.preference))
                .map((blog, index) => (
                  <motion.article
                    initial={{
                      x: isMobile ? 0 : getInitialX(index),
                      y: isMobile ? 100 : 0,
                      opacity: isMobile ? 0 : index !== 1 ? 1 : 0.5,
                      scale: isMobile ? 1 : index === 1 ? 0.5 : 1,
                    }}
                    whileInView={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: isMobile ? 0.6 : index !== 1 ? 1 : 0.6,
                      ease: "easeInOut",
                      delay: isMobile ? index * 0.2 : 0,
                    }}
                    key={`blog-${index}`}
                    className="bg-white rounded-lg shadow-lg transition-shadow duration-300 border border-gray-300 flex flex-col h-full overflow-hidden"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={blog.featured_image_url}
                        alt={blog.title}
                        className="w-full max-h-56 h-full object-fit transition-transform duration-500 hover:scale-105 brightness-98"
                        loading="lazy"
                      />
                    </div>

                    <div className="px-4 py-4 flex flex-col flex-grow">
                      <h3
                        className={`text-lg sm:text-xl font-semibold text-[#6e3a5e] mb-3 leading-snug line-clamp-1 ${className}`}
                      >
                        {blog.title}
                      </h3>

                      {blog.contentBlocks &&
                        blog.contentBlocks.find(
                          (block) => block.block_type === "paragraph"
                        )?.paragraphBlock?.text && (
                          <p className="text-sm sm:text-base text-[#6e3a5e] mb-4 leading-relaxed flex-grow line-clamp-4">
                            {
                              blog.contentBlocks.find(
                                (block) => block.block_type === "paragraph"
                              )!.paragraphBlock!.text
                            }
                          </p>
                        )}

                      <a
                        href={`/blogs/${blog.id}`}
                        className="inline-flex items-center text-[#075fa4] transition-all duration-300 hover:scale-102 font-medium text-sm sm:text-base mt-auto"
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
          className="text-center my-6 md:my-10"
        >
          <a
            href="/blogs"
            className="font-bold inline-flex items-center px-6 py-3 bg-[#075fa4] hover:opacity-90 text-white rounded-lg transition-colors duration-300"
          >
            View All Articles
          </a>
        </motion.div>
      </div>
    </section>
  );
}
