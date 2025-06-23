import React from "react";
import * as motion from "motion/react-client";

export function HeroSection() {
  return (
    <div className="py-28 pt-36 relative w-full text-black font-RecoletaRegular bg-[#F4F8FB]">
      <div className="flex flex-col items-center justify-center text-center px-4">
        <motion.h1
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
          }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-PTSerif italic"
        >
          Our Services
        </motion.h1>
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
            delay: 0.1,
          }}
          className="text-lg md:text-xl max-w-2xl mb-6"
        >
          MACH CONSULTANTS
        </motion.p>
      </div>
    </div>
  );
}
