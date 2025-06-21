"use client";
import React from "react";
import { ArrowRight, Calendar, Mail, MoveUpRight, Phone } from "lucide-react";
import { NavItems, policies } from "@/lib/constants";
import { motion } from "motion/react";
import { BlogsService } from "@/actions/blogs/blogs.service";
import { Skeleton } from "@/components/ui/skeleton";

interface FooterProps {
  promises: Promise<[Awaited<ReturnType<typeof BlogsService.getBlogs>>]>;
}

export function Footer({ promises }: FooterProps) {
  const [{ data }] = React.use(promises);
  if (!data) return;

  const article1 = data.find((a) => a.preference === 9);
  const article2 = data.find((a) => a.preference === 10);

  const [hasMounted, setHasMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <footer className="bg-black text-[#f6f4f4] pb-8 pt-16 font-Inter">
      <div className="max-w-[120rem] mx-auto">
        {/* Top CTA Section */}
        <React.Suspense
          fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[...Array(3)].map((_, index) => (
                <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <Skeleton className="w-full max-h-56 h-full object-cover transition-transform duration-500" />
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    <Skeleton className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 leading-snug line-clamp-1 font-PTSerif italic" />
                    <Skeleton className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed flex-grow line-clamp-4" />
                  </div>
                </article>
              ))}
            </div>
          }
        >
          <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 py-12 md:py-16 overflow-hidden">
            {article1 && (
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
                    src={article1.featured_image_url}
                    alt={article1.title}
                    className="w-full h-56 object-fit rounded-lg shadow-sm"
                  />
                </div>

                <div className="px-3">
                  <h2 className="text-lg font-semibold text-black leading-snug line-clamp-1">
                    {article1.title}
                  </h2>

                  <div className="flex items-center text-sm text-gray-600 mt-3 space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {article1.updated_at &&
                          new Date(article1.updated_at).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`/blogs/${article1.id}`}
                    className="cursor-pointer w-[max-content] bg-black text-white my-3 px-4 py-2 rounded-xl flex items-center justify-center hover:bg-gray-900 transition-all"
                  >
                    Read more <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}

            <div className="max-w-6xl mx-auto my-20 lg:my-0 flex flex-col lg:flex-row justify-between items-center gap-8">
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
                  Need expert guidance for your project's vision and rationale?
                  Submit your contact info below; we'll reach out within 24
                  hours.
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

            {article2 && (
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
                    src={article2.featured_image_url}
                    alt={article2.title}
                    className="w-full h-56 object-fit rounded-lg shadow-sm"
                  />
                </div>

                <div className="px-3">
                  <h2 className="text-lg font-semibold text-black leading-snug line-clamp-1">
                    {article2.title}
                  </h2>

                  <div className="flex items-center text-sm text-gray-600 mt-3 space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {article2.updated_at &&
                          new Date(article2.updated_at).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`/blogs/${article2.id}`}
                    className="cursor-pointer w-[max-content] bg-black text-white my-3 px-4 py-2 rounded-xl flex items-center justify-center hover:bg-gray-900 transition-all"
                  >
                    Read more <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </React.Suspense>

        <div className="max-w-7xl mx-auto mt-16 px-4 md:px-8">
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
                Shape your project's vision with expert guidance. MACH
                Consultants helps reveal hidden resources and grow your
                enterprise's potential. Leave your contact info, and we'll
                connect within 24 hours.
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
              by Codedale
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
