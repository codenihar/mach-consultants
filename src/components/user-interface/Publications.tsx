"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import { useResponsiveFlag } from "@/lib/hooks/use-mobile";
import { BlogDataContext } from "@/components/layout/Layout-wrapper";

const getInitialX = (index: number) => {
  const offsets = [400, 0, -400];
  return offsets[index] || 0;
};

function PublicationCardSkeleton() {
  return (
    <div className="flex flex-col items-center text-left">
      <div className="relative max-h-56 w-full overflow-hidden rounded-xl aspect-square mb-4 sm:mb-6">
        <Skeleton className="w-full h-full rounded-xl" />
      </div>

      <div className="flex items-center justify-between w-full mb-3">
        <Skeleton className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-1 font-PTSerif italic" />
        <Skeleton className="bg-gray-300 rounded-full p-2 cursor-pointer" />
      </div>

      <Skeleton className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed flex-grow line-clamp-4" />
    </div>
  );
}

export function Publications({ className }: { className?: string }) {
  const promises = React.useContext(BlogDataContext);
  if (!promises) return;

  const [{ data }] = React.use(promises);

  const isMobile = useResponsiveFlag();
  const [hasMounted, setHasMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <section className="py-12 md:py-16 bg-white px-4 sm:px-6 font-inter">
      <div className="max-w-6xl mx-auto text-center">
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
          className="text-[#075fa4] font-semibold text-md md:text-lg lg:text-xl mb-2 sm:mb-3"
        >
          Publications
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
          className={`text-[#6e3a5e] text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 leading-tight ${className}`}
        >
          View our latest publications
        </motion.h2>

        <React.Suspense
          fallback={
            <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, index) => (
                <PublicationCardSkeleton key={index} />
              ))}
            </div>
          }
        >
          <div className="grid gap-8 sm:gap-6 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {data &&
              data.length > 0 &&
              data
                .filter((b) => [1, 2, 3].includes(b.preference))
                .map((publication, idx) => (
                  <motion.div
                    initial={{
                      x: isMobile ? 0 : getInitialX(idx),
                      y: isMobile ? 100 : 0,
                      opacity: isMobile ? 0 : idx !== 1 ? 1 : 0.5,
                      scale: isMobile ? 1 : idx === 1 ? 0.5 : 1,
                    }}
                    whileInView={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: isMobile ? 0.6 : idx !== 1 ? 1 : 0.6,
                      ease: "easeInOut",
                      delay: isMobile ? idx * 0.2 : 0,
                    }}
                    key={idx}
                    className="flex flex-col items-center text-left bg-white border border-gray-200 py-2 shadow-lg rounded-lg"
                  >
                    <div className="relative max-h-56 w-full overflow-hidden rounded-t-xl aspect-square mb-4 sm:mb-6">
                      <img
                        src={publication.featured_image_url}
                        alt={publication.title}
                        className="w-full h-full object-fit transition-transform duration-500 hover:scale-105 brightness-98"
                        loading="lazy"
                      />
                    </div>

                    <div className="px-3">
                      <div className="flex items-center justify-between w-full mb-3">
                        <h3
                          className={`text-lg sm:text-xl font-semibold text-[#6e3a5e] line-clamp-1 ${className}`}
                        >
                          {publication.title}
                        </h3>
                        <a
                          href={`/blogs/${publication.id}`}
                          className="bg-gray-200 text-gray-500 rounded-full p-2 cursor-pointer"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </a>
                      </div>

                      {publication.contentBlocks &&
                        publication.contentBlocks.find(
                          (block) => block.block_type === "paragraph"
                        )?.paragraphBlock?.text && (
                          <p className="text-sm sm:text-base text-[#6e3a5e] opacity-90 mb-4 leading-relaxed flex-grow line-clamp-4">
                            {
                              publication.contentBlocks.find(
                                (block) => block.block_type === "paragraph"
                              )!.paragraphBlock!.text
                            }
                          </p>
                        )}
                    </div>
                  </motion.div>
                ))}
          </div>
        </React.Suspense>
      </div>
    </section>
  );
}
