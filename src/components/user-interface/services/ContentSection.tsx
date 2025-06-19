import { Service } from "@/app/(user-interface)/services/page";
import { ArrowUpRight } from "lucide-react";
import * as motion from "motion/react-client";

export function ContentSection({ service }: Service) {
  return (
    <section className={`w-full px-4 sm:px-6 md:px-8 lg:px-12 font-Inter`}>
      <div
        className={`rounded-t-4xl ${service.bgColor} ${
          service.textColor === "white" ? "text-white" : "text-black"
        } max-w-7xl mx-auto py-8 px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center`}
      >
        <div className="order-2 md:order-1">
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
            }}
            className="text-3xl font-bold mb-4 sm:mb-5 md:mb-6 font-PTSerif italic"
          >
            {service.title}
          </motion.h2>

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
            className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8"
          >
            <p
              className={`flex-1 text-sm sm:text-base md:text-lg ${
                service.textColor === "white"
                  ? "text-white/90"
                  : "text-black/90"
              } max-w-xl leading-relaxed`}
            >
              {service.desc}
            </p>
          </motion.div>

          <motion.button
            initial={{
              y: 50,
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
            className={`mt-6 sm:mt-8 cursor-pointer ${
              service.textColor === "white"
                ? "bg-white text-black"
                : "bg-black text-white"
            } font-semibold text-xs sm:text-sm lg:text-md px-4 sm:px-6 py-2 sm:py-3 rounded-full inline-flex items-center gap-1 sm:gap-2 hover:brightness-95 transition-all duration-200`}
          >
            {service.buttonText}
            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.button>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
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
              delay: 0.1,
            }}
            src={service.image}
            alt={service.title}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
