import { MoveUpRight } from "lucide-react";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex items-center bg-gradient-to-r from-blue-100 to-yellow-100 px-4 sm:px-6 md:px-8 lg:px-16 pt-24 pb-64 md:pb-48 md:pt-36">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20 w-full">
        {/* Left Section */}
        <div className="flex-1 w-full mt-8 lg:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Mach <span className="text-blue-600">Consultants</span>
            <br />
            Sustainable Performance is the core of our work
          </h1>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl my-4 sm:my-6 md:my-8 max-w-2xl">
            We are selective consultants focused on immediate performance
            improvement. We are dedicated to revealing hidden resources of the
            enterprise and growing its potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <input
              type="text"
              placeholder="Enter Zip Code"
              className="px-4 py-3 rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64 placeholder:text-gray-400 text-black"
            />
            <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition cursor-pointer w-[max-content]">
              Request a Quote
              <MoveUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex-1 w-full flex justify-start lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-none lg:mx-0 rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-lg">
            <img
              src="/images/hero.png"
              alt="Family with insurance"
              className="w-full h-auto object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
