import * as motion from "motion/react-client";

export function PrincipalsSection() {
  return (
    <section className="max-w-7xl w-full mx-auto font-Inter 2xl:rounded-[3rem] bg-[#F4F8FB] overflow-hidden">
      <div className="grid md:grid-cols-7 2xl:grid-cols-3 justify-between items-end w-full overflow-hidden md:pt-4">
        <div className="md:col-span-2 2xl:col-span-1 text-center md:text-left max-sm:order-2">
          <motion.img
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.1,
            }}
            src="/images/Nabil.png"
            alt="Nabil Najjar"
            className="w-full max-w-sm mx-auto md:mx-0"
          />

          <div className="text-center py-6 md:pt-6 space-y-1 w-full bg-white">
            <div className="max-w-sm mr-auto">
              <motion.h3
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="text-xl md:text-2xl text-black font-bold line-clamp-1 font-PTSerif italic"
              >
                Nabil Najjar
              </motion.h3>
              <motion.p
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: 0.1,
                }}
                className="text-gray-600 text-base sm:text-lg line-clamp-1"
              >
                Senior Associate
              </motion.p>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 2xl:col-span-1 flex flex-col justify-center max-sm:h-full md:h-88 lg:h-105 xl:h-130 w-full bg-white max-sm:rounded-none rounded-t-[3rem] text-center text-black px-3 sm:px-6 py-4 sm:py-6 md:py-8 max-sm:order-1 md:order-2 mt-6 md:mt-0">
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
              delay: 0.1,
            }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-PTSerif italic"
          >
            Meet The <br className="hidden md:block" /> Associates
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
            className="my-8"
          >
            Our team comprises senior associates who bring extensive academic
            knowledge and practical management experience from diverse fields to
            every engagement
          </motion.p>
        </div>

        <div className="md:col-span-2 2xl:col-span-1 flex flex-col items-end order-3 md:order-3">
          <motion.img
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.3,
            }}
            src="/images/Pierre-Haddad.png"
            alt=" Dr. Pierre El Haddad"
            className="w-full max-h-[600px] max-w-sm mx-auto md:mx-0"
          />

          <div className="text-center pt-6 w-full bg-white">
            <div className="max-w-sm ml-auto">
              <motion.h3
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="text-xl md:text-2xl text-black font-bold line-clamp-1 font-PTSerif italic"
              >
                Dr. Pierre El Haddad
              </motion.h3>
              <motion.p
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: 0.1,
                }}
                className="text-gray-600 text-base sm:text-lg line-clamp-1"
              >
                Senior Associate
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
