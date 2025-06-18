"use client";
import React from "react";
import { Calendar, ArrowRight, MoveUpRight } from "lucide-react";
import { motion } from "motion/react";
import { BlogsService } from "@/actions/blogs/blogs.service";

interface MiddleSectionProps {
  promises: Promise<[Awaited<ReturnType<typeof BlogsService.getBlogs>>]>;
}

export function MiddleSection({ promises }: MiddleSectionProps) {
  const [{ data }] = React.use(promises);
  const [hovered, setHovered] = React.useState<boolean>(true);
  const [focusedIndex, setFocusedIndex] = React.useState<number | null>(null);

  return (
    <section className="py-10 font-PTSerif">
      <div className="max-w-7xl mx-auto rounded-[2rem] px-20 py-20 bg-black text-[#f6f4f4] w-full flex flex-col lg:flex-row justify-between items-center gap-20">
        <div className="text-left">
          <motion.h2
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4 font-PTSerif italic"
          >
            Get started with us today.
          </motion.h2>

          <motion.p
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="text-base sm:text-lg max-w-md"
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </motion.p>

          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="my-10 w-full sm:w-auto flex flex-col sm:flex-row gap-3 bg-white p-1 sm:p-2 rounded-lg shadow-sm"
          >
            <input
              type="email"
              placeholder="Email Address"
              className="text-black px-4 py-3 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-gray-900 rounded-lg placeholder:text-gray-400"
            />
            <a
              href="/#contactUs"
              className="w-full cursor-pointer font-semibold flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white px-5 py-3 rounded-lg transition-colors duration-300"
            >
              Contact Us
              <MoveUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="flex-1">
          <motion.div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto w-80 h-95 flex justify-center items-center"
          >
            {data &&
              data.length > 0 &&
              data.slice(0, 3).map((article, index) => {
                const isFocused = focusedIndex === index;

                let x = 0;
                let z = 0;
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
                    whileInView={{ x, rotate, zIndex: z }}
                    viewport={{ once: true }}
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
                        href={`/blogs/${article.id}`}
                        className="cursor-pointer w-[max-content] bg-black text-white my-3 px-4 py-2 rounded-xl flex items-center justify-center hover:bg-gray-900 transition-all"
                      >
                        Read more <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
