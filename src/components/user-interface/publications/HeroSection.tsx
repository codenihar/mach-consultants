"use client";
import React, { useEffect } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { BlogDataContext } from "@/components/layout/Layout-wrapper";

export function BlogsAndPublications() {
  const promises = React.useContext(BlogDataContext);
  if (!promises) return;

  const [{ data }] = React.use(promises);

  const [hovered, setHovered] = React.useState<boolean>(true);
  const [focusedIndex, setFocusedIndex] = React.useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setHovered(false);
    }, 500);
  }, []);

  return (
    <section className="bg-[#F4F8FB] px-8 pt-36 md:pt-42 py-20 font-inter overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-5 lg:gap-20">
        <div className="md:flex-1 lg-flex-0 max-w-2xl">
          <motion.h1
            initial={{ y: 75, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-PTSerif italic text-black"
          >
            Publications And Blogs
          </motion.h1>

          <motion.p
            initial={{ y: 75, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
            className="mt-6 text-xl text-gray-900 font-semibold"
          >
            A place to read, write, and deepen your understanding
          </motion.p>
        </div>

        <motion.div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          className="relative w-75 md:w-80 max-w-80 h-95 flex justify-center items-center md:flex-1 lg-flex-0"
        >
          {data &&
            data.length > 0 &&
            data
              .filter((a) => [1, 2, 3].includes(a.preference))
              .map((article, index) => {
                const isFocused = focusedIndex === index;

                let x = 0;
                let z = data.length - index;
                let rotate = 0;

                if (hovered) {
                  if (focusedIndex === null) {
                    x = index * 40;
                    rotate = index * 4;
                    z = data.length - index;
                  } else {
                    if (isFocused) {
                      x = 0;
                      rotate = 0;
                      z = 999;
                    } else {
                      const offset = index > focusedIndex ? index : index + 1;
                      x = offset * 40;
                      rotate = offset * 4;
                      z = 998 - offset;
                    }
                  }
                }

                return (
                  <motion.div
                    key={`blog-${index}`}
                    onClick={() => setFocusedIndex(index)}
                    animate={{ x, rotate, zIndex: z }}
                    transition={{
                      opacity: { duration: 0.3, ease: "easeInOut" },
                    }}
                    className="absolute w-full max-h-100 bg-white rounded-xl shadow-xl"
                  >
                    <div className="p-2">
                      <img
                        src={article.featured_image_url}
                        alt={article.title}
                        className="w-full h-56 object-fit rounded-lg shadow-sm"
                      />
                    </div>

                    <div className="px-3">
                      <h2 className="text-lg font-semibold text-black leading-snug line-clamp-1">
                        {article.title}
                      </h2>

                      <div className="flex items-center text-sm text-gray-600 mt-3 space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {article.updated_at &&
                              new Date(article.updated_at).toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <a
                        href={`/publications/${article.id}`}
                        className="cursor-pointer w-[max-content] bg-black text-white my-3 px-4 py-2 rounded-xl flex items-center justify-center hover:bg-gray-900 transition-all"
                      >
                        Read more
                      </a>
                    </div>
                  </motion.div>
                );
              })}
        </motion.div>
      </div>
    </section>
  );
}
