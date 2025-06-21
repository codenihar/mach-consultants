import React from "react";
import * as motion from "motion/react-client";

const partners: string[] = [
  "https://mach-consultants.com/wp-content/uploads/2024/05/ISEOR-Smaller.jpg",
  "https://mach-consultants.com/wp-content/uploads/2022/05/aec_logo_en.jpg",
  "https://mach-consultants.com/wp-content/uploads/2024/05/apave.jpg",
  "https://mach-consultants.com/wp-content/uploads/2022/05/LRI.jpg",
  "https://mach-consultants.com/wp-content/uploads/2022/05/UBYFOL.jpg",
  "https://mach-consultants.com/wp-content/uploads/2024/05/ilo-logo.png",
  "https://mach-consultants.com/wp-content/uploads/2024/05/PDP-logo-high-res-scaled.jpg",
];

export function Partners() {
  return (
    <section className="py-4 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 font-Inter">
      <div className="max-w-7xl mx-auto bg-black rounded-3xl max-md:px-4 md:px-8 lg:px-0 py-8">
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
          className="text-2xl lg:text-3xl text-white text-center font-semibold pb-8 font-PTSerif italic"
        >
          Our Partners
        </motion.h2>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-7 gap-6 md:gap-4 lg:gap-8 py-2">
          {partners &&
            partners.map((partner, idx) => (
              <motion.div
                key={idx}
                className="cursor-pointer text-center transition-all duration-300"
              >
                <motion.img
                  initial={{
                    y: 150,
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
                    delay: idx * 0.1,
                  }}
                  src={partner}
                  alt="partner-image"
                  className="rounded-md overflow-hidden"
                />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
