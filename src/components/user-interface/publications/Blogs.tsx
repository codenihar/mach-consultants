"use client";

import React, { useEffect, useRef } from "react";
import { CalendarDays } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, useAnimation, useInView } from "motion/react";
import { BlogDataContext } from "@/components/layout/Layout-wrapper";

function RecentBlogSkeleton() {
  return (
    <>
      <div>
        <div
          className="relative
            rounded-2xl overflow-hidden border border-gray-200"
        >
          <Skeleton className="w-full h-72 object-cover rounded-2xl hover:scale-110 transform-all duration-300" />
        </div>

        <Skeleton className="text-lg md:text-xl lg:text-3xl font-semibold mt-3 line-clamp-2 font-PTSerif italic" />

        <div className="flex items-center gap-4 text-sm mt-2 flex-wrap">
          <Skeleton className="flex items-center gap-1" />
        </div>

        <Skeleton className="cursor-pointer w-[max-content] mt-2 lg:mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition text-sm flex items-center gap-2" />
      </div>

      <div className="w-full h-full space-y-6">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-span-1 relative overflow-hidden rounded-xl border border-gray-200">
              <Skeleton className="w-full h-full object-cover rounded-xl shrink-0 hover:scale-110 transform-all duration-300" />
            </div>

            <div className="lg:col-span-2 flex flex-col justify-between">
              <Skeleton className="text-md md:text-sm lg:text-xl font-semibold max-w-sm line-clamp-2 font-PTSerif italic" />

              <div className="flex items-center gap-3 text-xs lg:text-sm text-gray-600 mt-2 flex-wrap">
                <Skeleton className="flex items-center gap-1 text-sm" />
              </div>

              <Skeleton className="max-md:hidden cursor-pointer mt-2 px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition flex items-center gap-1 w-fit" />
            </div>

            <Skeleton className="md:hidden w-full col-span-2 cursor-pointer px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition flex justify-center items-center gap-1" />
          </div>
        ))}
      </div>
    </>
  );
}

export function RecentBlogs() {
  const promises = React.useContext(BlogDataContext);
  if (!promises) return;

  const [{ data }] = React.use(promises);
  if (!data) return;

  const mainArticle = data.find((a) => a.preference === 4);

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [inView]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 md:py-20 font-Inter text-black">
      <motion.h2
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold mb-8 font-PTSerif italic"
      >
        Recent Blogs
      </motion.h2>

      <React.Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RecentBlogSkeleton />
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainArticle && (
            <motion.div
              ref={ref}
              initial={{ y: 100, opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="space-y-3"
            >
              <div
                className="relative
            rounded-2xl overflow-hidden shadow-sm"
              >
                <img
                  src={mainArticle.featured_image_url}
                  alt={mainArticle.title}
                  className="w-full h-80 object-fit rounded-2xl hover:scale-102 transform-all duration-300"
                />
              </div>

              <h3 className="text-lg md:text-xl lg:text-3xl font-semibold mt-4 line-clamp-2 font-PTSerif italic">
                {mainArticle.title}
              </h3>

              <div className="flex items-center gap-4 text-sm mt-2 flex-wrap">
                <div className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  <span>
                    {mainArticle.updated_at &&
                      new Date(mainArticle.updated_at).toLocaleString()}
                  </span>
                </div>
              </div>

              <a
                href={`/blogs/${mainArticle.id}`}
                className="cursor-pointer w-[max-content] mt-2 lg:mt-4 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm flex items-center gap-2"
              >
                Read more
              </a>
            </motion.div>
          )}

          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="w-full h-auto md:h-72 flex flex-col items-between gap-6"
          >
            {data &&
              data.length > 0 &&
              data
                .filter((a) => [5, 6, 7].includes(a.preference))
                .map((blog, index) => (
                  <div
                    key={index}
                    className="flex-1 grid grid-cols-2 gap-3 md:gap-6 justify-between items-between"
                  >
                    <div className="col-span-2 md:col-span-1 relative overflow-hidden rounded-xl border border-gray-300">
                      <img
                        src={blog.featured_image_url}
                        alt={blog.title}
                        className="w-full h-auto md:max-h-36 object-cover rounded-xl shrink-0 hover:scale-102 transform-all duration-300"
                      />
                    </div>

                    <div className="col-span-2 md:col-span-1 flex flex-col">
                      <h4 className="text-md md:text-md lg:text-xl font-semibold line-clamp-1 font-PTSerif italic">
                        {blog.title}
                      </h4>

                      <div className="flex items-center gap-3 text-xs lg:text-sm text-gray-600 my-2 flex-wrap">
                        <div className="flex items-center gap-1 text-sm">
                          <CalendarDays className="w-4 h-4" />
                          <span>
                            {data?.[0]?.updated_at &&
                              new Date(data[0].updated_at).toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <a
                        href={`/blogs/${blog.id}`}
                        className="max-md:hidden cursor-pointer mt-2 px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition flex items-center gap-1 w-fit"
                      >
                        Read more
                      </a>
                    </div>

                    <a
                      href={`/blogs/${blog.id}`}
                      className="md:hidden w-full col-span-2 cursor-pointer px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition flex justify-center items-center gap-1"
                    >
                      Read more
                    </a>
                  </div>
                ))}
          </motion.div>
        </div>
      </React.Suspense>
    </section>
  );
}
