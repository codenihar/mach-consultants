import React from "react";
import * as motion from "motion/react-client";

export function AboutHeroSection() {
  return (
    <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-20 lg:py-28 xl:py-36 pt-30 md:pt-28 font-Inter">
      {/* Title Section */}
      <motion.h2
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="max-sm:flex max-sm:gap-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl py-8 leading-none font-bold text-black tracking-tight font-PTSerif italic"
      >
        ABOUT US
      </motion.h2>

      <div className="flex gap-4 sm:gap-6 md:gap-10 items-start mt-2 sm:mt-3 md:mt-4">
        {/* Left Part */}

        <motion.div
          initial={{
            scale: 0.7,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="col-span-1 md:col-span-2 flex flex-col items-center gap-3 sm:gap-4 md:gap-6"
        >
          <img
            src="/images/about-us-main.gif"
            alt="About Us"
            className="max-w-7xl rounded-xl sm:rounded-2xl md:rounded-[2rem] w-full object-cover"
          />
        </motion.div>

        {/* Right Part */}
        <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4 w-full">
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
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
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
              className="text-gray-700 font-medium text-md lg:text-lg my-3 sm:my-4 md:my-6 font-Inter"
            >
              We are scientific consultants focused on immediate performance
              improvement. We are dedicated to revealing hidden resources of the
              enterprise and growing its potential.
            </motion.p>
          </div>

          <div>
            <motion.h3
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
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
              className="text-xl sm:text-2xl md:text-3xl text-black font-bold my-2 sm:my-3 font-PTSerif"
            >
              Values
            </motion.h3>
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
                duration: 0.6,
                ease: "easeOut",
                delay: 0.4,
              }}
              className="text-gray-600 text-md sm:text-lg font-Inter"
            >
              We are deeply committed to ethical and transparent engagement,
              aligning our success with the mutual benefit of all stakeholders.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
