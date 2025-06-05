import { ArrowUpRight } from "lucide-react";
import React from "react";

const steps: string[] = [
  "Onboard in < 1 day",
  "Understand Scope & Strategy",
  "First designs in 4–5 days",
];

const HeroSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 pt-20 md:pt-28 lg:pt-36 bg-gradient-to-r from-blue-100 to-yellow-100 text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 font-bold leading-tight sm:leading-tight md:leading-tight mb-8 sm:mb-10 md:mb-12">
          We deliver on time, in days and weeks
          <br />
          <span className="text-gray-500">—not months.</span>
        </h2>

        <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-8 lg:gap-12">
          <div className="bg-gray-800/50 overflow-hidden w-full lg:flex-2 rounded-lg md:rounded-xl">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 border-b border-gray-700 last:border-none hover:bg-gray-600/60 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg text-white">
                  <span className="text-xs sm:text-sm text-gray-200 font-mono w-5 sm:w-6">
                    {`0${index + 1}`}
                  </span>
                  <span>{step}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
            ))}
          </div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6 w-full lg:flex-1 lg:max-w-sm">
            <blockquote className="text-xs sm:text-sm max-w-full leading-relaxed sm:leading-relaxed bg-white/30 p-4 sm:p-5 rounded-lg">
              “Wavespace is a fantastic design team, with a healthy blend of UI
              and UX skills. Highly recommended”
            </blockquote>

            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src="/images/testimonial-avatar.png"
                alt="Matt Kabus"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-xs sm:text-sm">Matt Kabus</p>
                <p className="text-2xs sm:text-xs text-gray-600">
                  CEO & Founder @LifeTales
                </p>
              </div>
            </div>

            <button className="bg-yellow-200 text-black font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full inline-flex items-center gap-1 sm:gap-2 hover:brightness-105 transition-all duration-200 w-full sm:w-auto justify-center">
              Book a call
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-tight md:leading-tight max-w-6xl pt-12 lg:pt-20 pb-8 sm:pb-10 md:pb-12 text-gray-800">
          From startup to enterprise, grow your business{" "}
          <span className="text-gray-500 block sm:inline">
            with fast and creative designs!
          </span>
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
