import { MoveUpRight } from "lucide-react";
import * as motion from "motion/react-client";
import React from "react";

export function AboutUs() {
  return (
    <section className="pt-36 pb-20 font-Inter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-2 md:gap-12">
        {/* Left Image Section */}
        <div className="relative flex items-center justify-end h-120 md:h-140 w-full">
          {/* Top Image */}
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="absolute top-10 z-0"
          >
            <img
              src="https://mach-consultants.com/wp-content/uploads/elementor/thumbs/hector-martinez-110928-unsplash-qnx3j9a0ezt5n73lv890o79c7yej7rts0tvg9luoc8.jpg"
              alt="Happy family"
              className="w-72 md:w-100 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Bottom Image (Overlapping) */}
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="absolute left-0 bottom-14 md:bottom-10 md:right-36 lg:right-12 z-10"
          >
            <img
              src="https://mach-consultants.com/wp-content/uploads/elementor/thumbs/scott-graham-5fNmWej4tAA-unsplash-scaled-ql5dkfej39leypplv180564klk593emq00gt6pjx6g.jpg"
              alt="Moving boxes"
              className="w-64 md:w-96 md:h-80 object-cover rounded-xl shadow-md"
            />
          </motion.div>

          {/* Circular Badge */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="absolute z-20 max-sm:left-52 left-64 md:left-88 lg:left-80 top-52 md:top-72"
          >
            <div className="bg-pink-100 border-2 border-pinl-500 text-center rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-md">
              <span className="text-4xl font-bold text-pink-700">35</span>
              <span className="text-xs text-gray-900 leading-none">
                Years of
                <br />
                Experience
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Text Section */}
        <div className="w-full text-left">
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
              duration: 0.3,
              ease: "easeOut",
            }}
            className="text-lg text-pink-600 font-semibold mb-2"
          >
            About Us
          </motion.p>

          <motion.h2
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
              duration: 0.3,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 leading-tight font-PTSerif italic"
          >
            We specialize in customized consulting programs for people and
            businesses.
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
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="text-md md:text-lg text-gray-600 mb-4"
          >
            Selective consultants focused on immediate performance improvement.
            We are dedicated to revealing the hidden resources of the enterprise
            and growing its potential. Sustainable performance is the core of
            our work.
          </motion.p>

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
              duration: 0.3,
              ease: "easeOut",
              delay: 0.3,
            }}
            className="text-md md:text-lg text-gray-600 mb-6"
          >
            We consider complementary and wholesome the ethical, normative, and
            regulative dimensions. We are engaged in advancing the benefits of
            our stakeholders and placing them at par with ours as a guide to our
            work ethics. We are committed to transparency and continuous
            communication with stakeholders about mutual expectations beyond
            contractual obligations. We commit to being compliant, and we pledge
            to uphold the rules of conduct.
          </motion.p>

          <motion.button
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
              duration: 0.3,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="cursor-pointer bg-black text-white px-4 py-2 rounded-md font-semibold transition"
          >
            <a className="w-full flex items-center gap-2" href="/about">
              Learn More <MoveUpRight className="w-4 h-4" />
            </a>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
