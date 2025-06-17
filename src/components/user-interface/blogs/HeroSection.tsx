"use client";

import React, { useEffect } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { motion, useAnimation } from "motion/react";
import { BlogsService } from "@/actions/blogs/blogs.service";

interface BlogPageProps {
  promises: Promise<[Awaited<ReturnType<typeof BlogsService.getBlogs>>]>;
}

export function BlogsAndPublications({ promises }: BlogPageProps) {
  const [{ data }] = React.use(promises);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start("animate");
        await controls.set("initial");
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }
    };
    sequence();
  }, [controls]);

  return (
    <section className="bg-[#f4f4f4] px-8 pt-42 py-20 font-PTSerif">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-20">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ y: 75, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            className="text-6xl md:text-8xl font-extrabold text-black"
          >
            Global Stories & Articles
          </motion.h1>

          <motion.p
            initial={{ y: 75, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeIn", delay: 0.05 }}
            className="mt-6 text-xl text-gray-900 font-semibold"
          >
            A place to read, write, and deepen your understanding
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
          className="relative w-80 h-95 flex justify-center items-center"
        >
          <motion.div
            initial={{
              opacity: 1,
              zIndex: 3,
            }}
            animate={controls}
            variants={{
              initial: { opacity: 1, x: 0, rotate: 0 },
              animate: { opacity: 0 },
            }}
            transition={{
              opacity: { duration: 0.3, ease: "easeInOut" },
            }}
            className="absolute w-full max-h-100 bg-white rounded-xl shadow-xl"
          >
            <div className="p-2">
              <img
                src={data && data[0]?.featured_image_url}
                alt={data && data[0]?.title}
                className="w-full h-56 object-fit rounded-lg shadow-sm"
              />
            </div>

            <div className="px-3">
              <h2 className="text-lg font-semibold text-black leading-snug line-clamp-1">
                {data && data[0]?.title}
              </h2>

              <div className="flex items-center text-sm text-gray-600 mt-3 space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {data?.[0]?.updated_at &&
                      new Date(data[0].updated_at).toLocaleString()}
                  </span>
                </div>
              </div>

              <button className="bg-black text-white my-3 px-4 py-2 rounded-xl flex items-center justify-center hover:bg-gray-900 transition-all">
                Read more <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 1,
              x: 40,
              rotate: 4,
              zIndex: 2,
            }}
            animate={controls}
            variants={{
              initial: { opacity: 1, x: 40, rotate: 4 },
              animate: { x: 0, rotate: 0, opacity: 0 },
            }}
            transition={{
              x: { duration: 0.6, ease: "easeInOut", delay: 0.3 },
              rotate: { duration: 0.6, ease: "easeInOut", delay: 0.3 },
              opacity: { duration: 0.3, ease: "easeInOut", delay: 0.9 },
            }}
            className="absolute w-full max-h-100 bg-white rounded-xl shadow-xl"
          >
            <div className="p-2">
              <img
                src={data && data[1]?.featured_image_url}
                alt={data && data[1]?.title}
                className="w-full h-56 object-fit rounded-lg shadow-sm"
              />
            </div>

            <div className="px-3">
              <h2 className="text-lg font-semibold text-black leading-snug line-clamp-1">
                {data && data[1]?.title}
              </h2>

              <div className="flex items-center text-sm text-gray-600 mt-3 space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {data?.[0]?.updated_at &&
                      new Date(data[0].updated_at).toLocaleString()}
                  </span>
                </div>
              </div>

              <button className="bg-black text-white my-3 px-4 py-2 rounded-xl flex items-center justify-center hover:bg-gray-900 transition-all">
                Read more <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 1,
              x: 80,
              rotate: 8,
              zIndex: 1,
            }}
            animate={controls}
            variants={{
              initial: { opacity: 1, x: 80, rotate: 8 },
              animate: { x: 0, rotate: 0, opacity: 0 },
            }}
            transition={{
              x: { duration: 0.6, ease: "easeInOut", delay: 1.2 },
              rotate: { duration: 0.6, ease: "easeInOut", delay: 1.2 },
              opacity: { duration: 0.3, ease: "easeInOut", delay: 1.5 },
            }}
            className="absolute w-full max-h-100 bg-white rounded-xl shadow-xl"
          >
            <div className="p-2">
              <img
                src={data && data[2]?.featured_image_url}
                alt={data && data[2]?.title}
                className="w-full h-56 object-fit rounded-lg shadow-sm"
              />
            </div>

            <div className="px-3">
              <h2 className="text-lg font-semibold text-black leading-snug line-clamp-1">
                {data && data[2]?.title}
              </h2>

              <div className="flex items-center text-sm text-gray-600 mt-3 space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {data?.[0]?.updated_at &&
                      new Date(data[0].updated_at).toLocaleString()}
                  </span>
                </div>
              </div>

              <button className="bg-black text-white my-3 px-4 py-2 rounded-xl flex items-center justify-center hover:bg-gray-900 transition-all">
                Read more <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
