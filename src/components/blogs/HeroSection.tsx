import { Newspaper } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full pt-24 md:pt-32 lg:pt-36 pb-8 md:pb-12 px-4 sm:px-6 md:px-8 lg:px-12 text-center relative overflow-hidden font-Inter">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-yellow-100 rounded-b-[30%] md:rounded-b-[40%] lg:rounded-b-[50%] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="cursor-pointer inline-flex items-center justify-center px-3 py-1 text-xs sm:text-sm font-medium text-gray-600 bg-gray-100 rounded-lg mb-3 sm:mb-4">
          <Newspaper className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
          Publications
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 font-PTSerif italic">
          Insight and Updates
        </h1>

        <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto mt-4 mb-6 sm:my-6 px-2 sm:px-0">
          A collection of hand-picked articles for freelancers, by freelancers.
          Deep dives, insights, and honest advice to navigate the freelance
          landscape.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
