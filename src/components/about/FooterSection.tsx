import { Diamond } from "lucide-react";
import React from "react";

const FooterSection = () => {
  return (
    <div className="bg-zinc-700 text-white font-inter w-full py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 font-Inter">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
        <p className="text-sm sm:text-base md:text-lg font-medium max-w-xs text-left">
          We invite you to contact our team for more information.
        </p>
        <p className="text-sm sm:text-base md:text-lg font-medium text-left">
          Let's stay connected
        </p>
        <p className="text-sm sm:text-base md:text-lg font-medium text-left">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto w-full flex justify-center items-center">
        <h1 className="flex flex-row items-center gap-4 sm:gap-6 md:gap-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-extrabold tracking-tight sm:tracking-normal md:tracking-wider uppercase">
          <span className="font-bold font-PTSerif italic">CONTACT</span>
          <span className="hidden sm:block">
            <Diamond className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </span>
          <span className="font-bold font-PTSerif italic">US</span>
        </h1>
      </div>
    </div>
  );
};

export default FooterSection;
