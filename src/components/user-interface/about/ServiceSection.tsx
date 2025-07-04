import { ChevronRight } from "lucide-react";
import * as motion from "motion/react-client";

type Service = {
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    title: "CODE - Consulting for Organization and Development of Enterprises",
    desc: "Reveals the hidden resources and critical elements of operations in order to develop the capabilities of the enterprise for global performance, create transformations, improve global performance, build strategic vigilance, and foster innovation and resilience.",
  },
  {
    title: "DPIE - Transformational Change",
    desc: "Few professionals doubt that companies and administrations need to transform. We help organizations manage their transformations effectively and instill processes to identify transformation objectives, methods, and measurements.",
  },
  {
    title: "STAR - Strategy Tracking and Review",
    desc: "The pace of change in the world is brutal; reactive strategies fall short of delivering results and survivability. Get ahead of the curve with the right process of strategy review.",
  },
  {
    title: "OMC - Operations and Management Control",
    desc: "Unleashes then federates human energy through collaborative management tools. It is the process needed by business leaders to monitor and control the advancement toward objectives, and the alignment of personal objectives with teamwork and corporate goals.",
  },
];

export function ServiceSection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 bg-white font-Inter">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-10 md:gap-12">
        <div className="w-full lg:flex-1 space-y-4 sm:space-y-5 md:space-y-6">
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
              duration: 0.6,
              ease: "easeOut",
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-PTSerif italic tracking-tight text-black"
          >
            Our Services
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
              duration: 0.6,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="text-gray-700 text-md leading-relaxed max-w-md py-2"
          >
            We offer specialized consulting services designed to unlock your
            enterprise's potential and drive immediate, sustainable performance
            improvement. Our methodologies, including CODE, DPIE, STAR, OMC,
            BRD, and BUTTERS, address diverse organizational and development
            needs.
          </motion.p>

          <motion.img
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
            src="https://mach-consultants.com/wp-content/uploads/2024/05/pexels-karolina-grabowska-4195409-1.jpg"
            alt="Our Services"
            className="rounded-xl sm:rounded-2xl md:rounded-[3rem] w-full h-auto object-cover mt-4 sm:mt-6"
            loading="lazy"
          />
        </div>

        <div className="w-full lg:flex-1 flex flex-col lg:items-end space-y-2 sm:space-y-3">
          {services.map((item, index) => (
            <div key={index}>
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
                  delay: index * 0.1,
                }}
                className={`leading-tight text-lg sm:text-xl md:text-2xl max-w-md text-black font-bold tracking-tight mb-2 sm:mb-3 md:mb-4 font-PTSerif italic ${
                  index > 0 ? "mt-6 sm:mt-7 md:mt-8" : ""
                }`}
              >
                {item.title}
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
                  delay: index * 0.1,
                }}
                className="text-gray-700 text-xs sm:text-sm md:text-base max-w-md mt-1 sm:mt-2 lg:line-clamp-3"
              >
                {item.desc}
              </motion.p>
            </div>
          ))}
        </div>
      </div>

      <motion.div
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
        className="text-center mt-10 md:mt-14"
      >
        <a
          href="/services"
          className="font-bold inline-flex items-center px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors duration-300"
        >
          Read More
        </a>
      </motion.div>
    </section>
  );
}
