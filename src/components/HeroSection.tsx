import { MoveUpRight, UserRoundCheck } from "lucide-react";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex items-center bg-gradient-to-r from-blue-100 to-yellow-100 px-4 sm:px-6 md:px-8 lg:px-16 pt-24 pb-48 md:pt-36 font-LibreRegular">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-4 md:gap-12 lg:gap-20 w-full">
        {/* Left Section */}
        <div className="flex-1 w-full mt-8 lg:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 sm:mb-6 leading-12 md:leading-14 lg:leading-16 font-bold font-LibreBold">
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
            <button className="flex items-center justify-center gap-4 bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition cursor-pointer w-[max-content] text-xl">
              Contact Us
              <UserRoundCheck />
            </button>
          </div>
        </div>

        {/* Right Section */}

        <div className="relative flex-1 w-full flex justify-start lg:justify-end">
          <div
            className="relative w-full max-w-md lg:max-w-none lg:mx-0 rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-lg"
            style={{ clipPath: "url(#clip-home-shape)" }}
          >
            <svg width="0" height="0" className="absolute">
              <clipPath id="clip-home-shape" clipPathUnits="objectBoundingBox">
                <path d="M0.9454 0.2498C0.888 0.2135 0.778 0.1435 0.5859 0.0212C0.5448 -0.0044 0.4921 -0.0052 0.4503 0.0203L0.0627 0.2484C0.025 0.2707 0 0.3102 0 0.3527V0.8764C0 0.9417 0.0588 1 0.125 1H0.873C0.9404 1 0.9992 0.9417 0.9992 0.8764V0.3459C0.9992 0.3075 0.9793 0.2715 0.9454 0.2498Z" />
              </clipPath>
            </svg>

            <img
              src="https://mach-consultants.com/wp-content/uploads/elementor/thumbs/Mach-consultants-qnx31tdx98c1yvlfmksnt1wja9wmx06lsuua6w79z4.jpg"
              alt="Family with insurance"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
