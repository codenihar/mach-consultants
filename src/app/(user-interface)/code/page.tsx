import React from "react";
import * as motion from "motion/react-client";
import { PreziEmbedCode } from "@/components/user-interface/code/prezi-embed";

export default function PreziEmbed() {
  return (
    <section className="max-w-7xl mx-auto pt-36 pb-24 space-y-6 sm:space-y-8 lg:space-y-12 font-Inter">
      <div className="flex flex-col gap-4 text-center">
        <motion.h1
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="px-2 md:px-0 max-w-[80%] sm:max-w-4xl sm:mx-auto text-left sm:text-center text-4xl md:text-5xl lg:text-6xl leading-tight font-PTSerif font-semibold italic"
        >
          CODE: Consulting for Organization and Development of Enterprises
        </motion.h1>
      </div>

      <div className="px-2 sm:px-4 lg:px-0 flex justify-center items-center">
        <PreziEmbedCode />
      </div>
    </section>
  );
}
