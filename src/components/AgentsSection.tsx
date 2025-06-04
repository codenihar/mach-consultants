import { MoveUpRight } from "lucide-react";
import React from "react";

const AgentsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24">
        {/* Left Text Content */}
        <div>
          <p className="text-blue-600 font-semibold mb-2 text-lg">Agents</p>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Friendly, Helpful and <br />
            Knowledgeable Agents Your <br className="max-xl:hidden" />
            Own Dedicated Personal agent
          </h2>
          <p className="text-gray-700 mb-4 text-md md:text-lg">
            Our team of insurance professionals have the knowledge, skills,
            markets and desire necessary to provide you with the most pleasant
            insurance experience possible. Our experienced staff of garage
            insurance, auto dealer bond and commercial insurance experts are
            ready to help. Your questions and claims are always handled in a
            fast, friendly and professional manner.
          </p>
          <p className="text-gray-700 mb-6 text-md md:text-lg">
            We have the best selection of policies and carriers to fill any
            need. Let us show you how we can save you money, keep you protected
            and feeling secure 365 days a year.
          </p>
          <button className="cursor-pointer flex items-center gap-2 bg-blue-600 text-white px-4 py-2 md:px-6 md:py-4 rounded-md font-semibold hover:bg-blue-700 transition">
            Learn More <MoveUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Image Section */}
        <div className="relative flex items-center justify-end h-140 w-full">
          {/* Top Image */}
          <div className="absolute top-10 md:top-0 z-0">
            <img
              src="/images/about_1.png"
              alt="Happy family"
              className="w-72 md:w-100 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Bottom Image (Overlapping) */}
          <div className="absolute left-0 lg:-left-10 bottom-10 md:bottom-0 md:right-36 lg:right-12 max-sm:bottom-5 z-10">
            <img
              src="/images/about_1.png"
              alt="Moving boxes"
              className="w-64 md:w-96 md:h-80 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Circular Badge */}
          <div className="absolute z-20 max-sm:left-52 left-64 md:left-88 lg:left-76 top-64 md:top-72">
            <div className="bg-blue-100 border-2 border-blue-500 text-center rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-md">
              <span className="text-3xl font-bold text-blue-700">25K</span>
              <span className="text-sm text-gray-700 leading-tight">
                Agents
                <br />
                WorldWide
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
