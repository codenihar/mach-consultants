import { Cog, UserRoundCheck } from "lucide-react";
import * as motion from "motion/react-client";
import React from "react";

export function Hero() {
  return (
    <section className="w-full flex items-center px-4 sm:px-6 md:px-8 lg:px-16 pt-24 md:pt-36 pb-36 md:pb-48 font-PTSerif">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-4 lg:gap-20 w-full">
        {/* Left Section */}
        <div className="flex-1 w-full mt-8 lg:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 sm:mb-6 md:leading-15 font-bold italic overflow-hidden">
            <motion.p
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="inline-block overflow-hidden"
            >
              Mach <span className="text-[#1c5894]">Consultants</span>
            </motion.p>
            <br />
            <motion.p
              initial={{
                x: -100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.1,
              }}
              className="inline-block overflow-hidden"
            >
              Sustainable
            </motion.p>{" "}
            <motion.p
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
              className="inline-block overflow-hidden"
            >
              Performance is the
            </motion.p>{" "}
            <motion.p
              initial={{
                x: -100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.3,
              }}
              className="inline-block overflow-hidden"
            >
              core of our work
            </motion.p>
          </h1>

          <motion.p
            initial={{
              x: 50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.25,
            }}
            className="text-gray-600 text-base sm:text-lg md:text-xl my-4 sm:my-6 md:my-8 max-w-2xl font-Inter overflow-hidden"
          >
            We are selective consultants focused on immediate performance
            improvement. We are dedicated to revealing hidden resources of the
            enterprise and growing its potential.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <motion.a
              initial={{
                x: -50,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.3,
              }}
              href="/#contactUs"
              className="flex items-center justify-center gap-4 bg-black hover:bg-gray-800 text-white px-5 py-3 rounded-md ransition cursor-pointer w-[max-content] text-xl overflow-hidden"
            >
              Our Services
              <Cog />
            </motion.a>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex-1 w-full flex justify-start lg:justify-end">
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.35,
            }}
            className="relative w-full max-w-md lg:max-w-none lg:mx-0 rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-lg"
            style={{ clipPath: "url(#clip-home-shape)" }}
          >
            <svg width="0" height="0" className="absolute">
              <clipPath id="clip-home-shape" clipPathUnits="objectBoundingBox">
                <path d="M0.9454 0.2498C0.888 0.2135 0.778 0.1435 0.5859 0.0212C0.5448 -0.0044 0.4921 -0.0052 0.4503 0.0203L0.0627 0.2484C0.025 0.2707 0 0.3102 0 0.3527V0.8764C0 0.9417 0.0588 1 0.125 1H0.873C0.9404 1 0.9992 0.9417 0.9992 0.8764V0.3459C0.9992 0.3075 0.9793 0.2715 0.9454 0.2498Z" />
              </clipPath>
            </svg>

            <img
              src="/images/hero.jpg"
              alt="Family with insurance"
              className="w-full h-100 md:h-160 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
