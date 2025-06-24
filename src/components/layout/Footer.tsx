"use client";
import React from "react";
import { Mail, MoveUpRight, Phone } from "lucide-react";
import { NavItems, policies } from "@/lib/constants";
import { motion } from "motion/react";
import { BlogsService } from "@/actions/blogs/blogs.service";

interface FooterProps {
  promises: Promise<[Awaited<ReturnType<typeof BlogsService.getBlogs>>]>;
}

export function Footer({ promises }: FooterProps) {
  const [{ data }] = React.use(promises);
  if (!data) return;

  const [hasMounted, setHasMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 py-12 md:py-16 overflow-hidden">
        <div
          style={{
            backgroundImage:
              "linear-gradient(to bottom right,rgb(253, 232, 235) 10%, #ae2333 170%)",
          }}
          className="pt-10 pl-30 pr-30 rounded-4xl max-w-6xl mx-auto lg:my-0 flex flex-col lg:flex-row justify-between items-center gap-8"
        >
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
              className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4 text-[#2d528a] italic font-RecoletaRegular"
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
              className="text-center text-base sm:text-lg max-w-md"
            >
              Need expert guidance for your project's vision and rationale?
              Submit your contact info below; we'll reach out within 24 hours.
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
                className="bg-[#075fa4] hover:opacity-90 w-full cursor-pointer font-semibold flex items-center justify-center gap-2 text-white px-5 py-3 rounded-lg transition-colors duration-300"
              >
                Contact Us
                <MoveUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="bg-[#F4F8FB] text-black pb-8 pt-5 font-SFCompact-medium">
        <div className="max-w-[120rem] mx-auto">
          <div className="max-w-7xl mx-auto mt-16 px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-10">
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
                  className="text-black font-bold text-xl lg:text-2xl mb-3 font-RecoletaRegular italic"
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
                  className=" text-lg leading-relaxed lg:max-w-xs"
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
                  className="text-black font-semibold mb-4 md:mb-6 text-lg font-RecoletaRegular italic"
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
                  className="space-y-3 md:space-y-4  opacity-90 text-base"
                >
                  {NavItems &&
                    NavItems.length > 0 &&
                    NavItems.map((nav, index) => (
                      <li key={`nav-${index}`}>
                        <a
                          key={`nav-${index}`}
                          href={nav.route}
                          className="cursor-pointer text-sm lg:text-lg"
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
                  className="text-black font-semibold mb-4 md:mb-6 text-lg font-RecoletaRegular italic"
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
                  className="space-y-3 md:space-y-4 opacity-90 text-base"
                >
                  {policies &&
                    policies.length > 0 &&
                    policies.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.route}
                          className="transition-colors cursor-pointer text-sm lg:text-lg"
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
                  className="text-black font-semibold mb-4 md:mb-6 text-lg font-RecoletaRegular italic"
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
                  <div className="flex items-start gap-3  hover:opacity-90 text-sm md:text-lg">
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
                    <p className=" hover:opacity-90 transition-colors">
                      info@mach-consultants.com
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full border-t text-center text-black border-gray-300 mt-12 md:mt-16 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 hover:opacity-90">
              <p className="w-full text-sm md:text-md text-center">
                Copyright © {new Date().getFullYear()} Mach Consultants |
                Powered by Codedale
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
