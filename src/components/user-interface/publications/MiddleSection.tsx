"use client";
import React from "react";
import { motion } from "motion/react";
import { Calendar, ArrowRight, MoveUpRight } from "lucide-react";
import { BlogDataContext } from "@/components/layout/Layout-wrapper";

export function MiddleSection() {
  const promises = React.useContext(BlogDataContext);
  if (!promises) return;

  const [{ data }] = React.use(promises);
  const [focusedIndex, setFocusedIndex] = React.useState<number | null>(null);

  return (
    <section className="py-5 md:py-10 font-PTSerif overflow-hidden ">
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #d0eaff 10%, #075fa4 170%)",
        }}
        className="max-w-7xl mx-auto rounded-xl md:rounded-[2rem] px-5 lg:px-14 py-20 bg-[#F4F8FB] text-black w-full flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10 lg:gap-14"
      >
        <div className="text-left flex-1">
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
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4 font-PTSerif italic"
          >
            Get expert guidance for your project's vision.
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
            MACH Consultants uncovers hidden resources to boost your
            enterprise's potential. Submit your contact info now, and we'll
            respond within 24 hours.
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
            className="my-10 max-w-md w-full sm:w-auto flex flex-col sm:flex-row gap-3 bg-white p-1 sm:p-2 rounded-lg shadow-sm"
          >
            <input
              type="email"
              placeholder="Email Address"
              className="flex-2 text-black px-4 py-3 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-gray-900 rounded-lg placeholder:text-gray-400"
            />
            <a
              href="/#contactUs"
              className="flex-1 w-full cursor-pointer font-bold flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white px-5 py-3 rounded-lg transition-colors duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto w-80 h-95 flex justify-center items-center"
          >
            {data &&
              data.length > 0 &&
              data
                .filter((a) => [8, 9, 10].includes(a.preference))
                .map((article, index) => {
                  const isFocused = focusedIndex === index;

                  let x = 0;
                  let z = 0;
                  let rotate = 0;

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
                          Read more
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
