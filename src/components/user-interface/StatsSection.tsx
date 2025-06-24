"use client";
import { Stat } from "@/lib/types";
import { motion, useScroll, useTransform } from "motion/react";
import React from "react";
import { useResponsiveFlag } from "@/lib/hooks/use-mobile";
import { BookOpen, Building, Globe, Handshake } from "lucide-react";

export const stats: Stat[] = [
  {
    icon: (
      <Building className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#6e3a5e]" />
    ),
    value: "15+",
    label: "Years in Consulting",
  },
  {
    icon: (
      <Handshake className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#6e3a5e]" />
    ),
    value: "100+",
    label: "Successful Engagements",
  },
  {
    icon: (
      <Globe className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#6e3a5e]" />
    ),
    value: "5+",
    label: "Regions Served",
  },
  {
    icon: (
      <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#6e3a5e]" />
    ),
    value: "20+",
    label: "Academic Publications",
  },
];

const getInitialX = (index: number) => {
  const offsets = [420, 150, -150, -420];
  return offsets[index] || 0;
};

const getZIndex = (index: number) => {
  const zIndex = [1, 2, 3, 1];
  return zIndex[index] || 0;
};

export function Stats({ className }: { className?: string }) {
  const isMobile = useResponsiveFlag();
  const [hasMounted, setHasMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <section className="w-[95%] md:w-[90%] lg:w-[80%] bg-white py-4 sm:py-6 md:py-8 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-xl shadow-md border border-gray-200 font-inter">
      <div className="max-w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-2 sm:px-4 md:py-2 md:px-6">
        {stats.map((stat, index) => (
          <motion.div
            initial={{
              x: isMobile ? 0 : getInitialX(index),
              y: isMobile ? 100 : 0,
              zIndex: getZIndex(index),
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              y: 0,
              zIndex: getZIndex(index),
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: isMobile ? index * 0.2 : 0,
            }}
            viewport={{ once: true, margin: "-15%" }}
            key={index}
            className={`flex flex-col gap-1 sm:gap-2 lg:gap-3 lg:flex-row items-center ${
              index > 0 && "xl:border-l-2"
            }
            xl:px-10 font-inter`}
          >
            <div className="h-full flex items-center">{stat.icon}</div>
            <div className="flex flex-col items-center lg:items-start text-center">
              <p
                className={`text-xl md:text-2xl lg:text-3xl font-bold text-[#6e3a5e] ${className}`}
              >
                {stat.value}
              </p>
              <p className="text-sm md:text-md text-[#6e3a5e] w-[max-content]">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
