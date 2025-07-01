import React from "react";
import { Diamond, TrendingUp, Handshake, Lightbulb } from "lucide-react";
import * as motion from "motion/react-client";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className: string;
};

const features: Feature[] = [
  {
    className: "bg-[#CCECFE]",
    icon: <Diamond className="text-black w-10 h-10" />,
    title: "Selective Expertise",
    description:
      "We're scientific consultants laser-focused on delivering immediate performance improvement by revealing your enterprise's hidden potential.",
  },
  {
    className: "bg-[#D5F2DF]",
    icon: <TrendingUp className="text-black w-10 h-10" />,
    title: "Sustainable Performance",
    description:
      "Sustainable performance is at the core of all our work, ensuring lasting growth and impact for your organization.",
  },
  {
    className: "bg-[#ECDAFF]",
    icon: <Handshake className="text-black w-10 h-10" />,
    title: "Ethical Partnership",
    description:
      "We uphold ethical, normative, and regulative dimensions, committed to transparency and advancing stakeholder benefits alongside our own.",
  },
  {
    className: "bg-[#FDE998]",
    icon: <Lightbulb className="text-black w-10 h-10" />,
    title: "Holistic Development",
    description:
      "Our services, from CODE to DPIE, STAR, and BRD, cover comprehensive organizational and business responsible development.",
  },
];

export function WhyChooseUs({ className }: { className?: string }) {
  return (
    <section className="md:py-16 lg:py-20 bg-white px-4 sm:px-6 md:px-8 font-inter">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-12">
        <div className="order-2 lg:order-1">
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
            className="text-[#075fa4] font-semibold mb-2 text-sm sm:text-base md:text-lg"
          >
            Why Choose Us
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
            className={`text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6e3a5e] leading-tight mb-4 md:mb-6 ${className}`}
          >
            Choose MACH Consultants: Where Performance Meets Potential.
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
            className="text-[#075fa4] mb-6 md:mb-8 text-base sm:text-lg"
          >
            At MACH Consultants, we're not just consultants; we're partners
            dedicated to revealing the hidden resources within your enterprise
            and growing its potential.
          </motion.p>
        </div>

        <div className="relative w-full order-1 lg:order-2 max-lg:overflow-hidden ">
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
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden w-full max-w-md xl:mx-auto shadow-lg "
          >
            <img
              src="/images/why-choose-us.jpg"
              alt="Handshake"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </motion.div>

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
              delay: 0.25,
            }}
            viewport={{ once: true }}
            className="absolute bottom-20 -left-2 md:-left-4 lg:-right-4 xl:right-4 border border-red-200 bg-red-500 text-white font-bold text-sm w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center shadow-md"
          >
            <span className="text-2xl sm:text-3xl">25+</span>
            <span className="text-xs sm:text-sm font-medium">Experienced</span>
            <span className="text-xs sm:text-sm font-medium">Consultants</span>
          </motion.div>
        </div>
      </div>

      <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {features.map((feature, index) => (
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            key={`feat-${index}`}
            className={`${feature.className} flex flex-col items-start gap-3 p-4 sm:p-5 rounded-lg duration-300 hover:scale-105 transform transition-transform`}
          >
            <div className="text-[#ae2333]">{feature.icon}</div>
            <div>
              <h4
                className={`font-semibold text-lg lg:text-xl text-[#6e3a5e] ${className}`}
              >
                {feature.title}
              </h4>
              <p className="text-black text-md text-base leading-relaxed mt-2">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
