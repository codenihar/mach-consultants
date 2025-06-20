import React from "react";
import { ArrowRight, Calendar, Mail, MoveUpRight, Phone } from "lucide-react";
import { NavItems, policies } from "@/lib/constants";
import * as motion from "motion/react-client";

export function Footer() {
  return (
    <footer className="bg-black text-[#f6f4f4] px-4 md:px-8 xl:px-0 pb-8 pt-16 md:pt-24 font-Inter">
      <div className="max-w-[120rem] mx-auto">
        {/* Top CTA Section */}
        <div className="flex flex-col lg:flex-row justify-between px-4 sm:px-6 py-12 md:py-16 overflow-hidden">
          <motion.div
            initial={{
              x: -10,
              rotate: -15,
              y: 100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
            className="max-h-90 max-w-80 w-full bg-white rounded-xl shadow-xl"
          >
            <div className="p-2">
              <img
                src="/images/blog_1.png"
                alt=""
                className="w-full h-56 object-fit rounded-lg shadow-sm"
              />
            </div>

            <div className="px-3">
              <h2 className="text-lg font-semibold text-black leading-snug line-clamp-1">
                Publications And Blogs
              </h2>

              <div className="flex items-center text-sm text-gray-600 mt-3 space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    6/8/2025, 5:34:08 PM
                    {/* {article.updated_at &&
                      new Date(article.updated_at).toLocaleString()} */}
                  </span>
                </div>
              </div>

              <a
                href={`/blogs/2`}
                className="cursor-pointer w-[max-content] bg-black text-white my-3 px-4 py-2 rounded-xl flex items-center justify-center hover:bg-gray-900 transition-all"
              >
                Read more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="mx-auto text-center lg:text-left">
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
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
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
          </div>

          <motion.div
            initial={{
              x: 10,
              rotate: 15,
              y: 100,
              opacity: 0,
            }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="max-h-90 max-w-80 w-full bg-white rounded-xl shadow-xl"
          >
            <div className="p-2">
              <img
                src="/images/blog_1.png"
                alt=""
                className="w-full h-56 object-fit rounded-lg shadow-sm"
              />
            </div>

            <div className="px-3">
              <h2 className="text-lg font-semibold text-black leading-snug line-clamp-1">
                Publications And Blogs
              </h2>

              <div className="flex items-center text-sm text-gray-600 mt-3 space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    6/8/2025, 5:34:08 PM
                    {/* {article.updated_at &&
                      new Date(article.updated_at).toLocaleString()} */}
                  </span>
                </div>
              </div>

              <a
                href={`/blogs/2`}
                className="cursor-pointer w-[max-content] bg-black text-white my-3 px-4 py-2 rounded-xl flex items-center justify-center hover:bg-gray-900 transition-all"
              >
                Read more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-10">
            {/* Logo and About */}
            <div className="md:col-span-3 lg:col-span-1 xl:col-span-2">
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
                }}
                viewport={{ once: true }}
                className="font-bold text-xl lg:text-2xl mb-3 font-PTSerif italic"
              >
                Mach Consultants
              </motion.div>

              <motion.p
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
                  delay: 0.1,
                }}
                viewport={{ once: true }}
                className="text-gray-300 text-lg leading-relaxed lg:max-w-xs"
              >
                At Avenues Financial, we are a team of knowledgeable &
                experienced accounting and business professionals that provide
                solutions to your accounting needs.
              </motion.p>
            </div>

            {/* Learn */}
            <div>
              <motion.h4
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
                  delay: 0.1,
                }}
                viewport={{ once: true }}
                className="font-semibold mb-4 md:mb-6 text-lg font-PTSerif italic"
              >
                Pages
              </motion.h4>

              <motion.ul
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
                  delay: 0.15,
                }}
                viewport={{ once: true }}
                className="space-y-3 md:space-y-4 text-gray-300 text-base"
              >
                {NavItems &&
                  NavItems.length > 0 &&
                  NavItems.map((nav, index) => (
                    <li key={`nav-${index}`}>
                      <a
                        key={`nav-${index}`}
                        href={nav.route}
                        className="cursor-pointer hover:text-white text-sm lg:text-lg"
                      >
                        {nav.name}
                      </a>
                    </li>
                  ))}
              </motion.ul>
            </div>

            {/* Company */}
            <div>
              <motion.h4
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
                  delay: 0.15,
                }}
                viewport={{ once: true }}
                className="font-semibold mb-4 md:mb-6 text-lg font-PTSerif italic"
              >
                Our Company
              </motion.h4>

              <motion.ul
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
                className="space-y-3 md:space-y-4 text-gray-300 text-base"
              >
                {policies &&
                  policies.length > 0 &&
                  policies.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.route}
                        className="hover:text-white transition-colors cursor-pointer text-sm lg:text-lg"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
              </motion.ul>
            </div>

            {/* Contact */}
            <div>
              <motion.h4
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
                className="font-semibold mb-4 md:mb-6 text-lg font-PTSerif italic"
              >
                Get in touch
              </motion.h4>

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
                  delay: 0.25,
                }}
                viewport={{ once: true }}
                className="space-y-4 md:space-y-5"
              >
                <div className="flex items-start gap-3 hovver:text-gray-300 text-gray-300 text-sm md:text-lg">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="transition-colors w-[max-content]">
                      142, rue de Rivoli 75001
                    </p>
                    <p className="transition-colors w-[max-content]">
                      Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm md:text-lg">
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                  <p className="hover:text-white text-gray-300 transition-colors">
                    info@mach-consultants.com
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-full border-t text-center border-gray-300 mt-12 md:mt-16 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300">
            <p className="w-full text-sm md:text-md text-center">
              Copyright © {new Date().getFullYear()} MACH-Consultants | Powered
              by Streamline Consultancy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
