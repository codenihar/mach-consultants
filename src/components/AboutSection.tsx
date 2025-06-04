import { MoveUpRight } from "lucide-react";
import React from "react";

const AboutUsSection: React.FC = () => {
  return (
    <section className="pt-36 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Image Section */}
        <div className="relative flex items-center justify-end h-140 w-full">
          {/* Top Image */}
          <div className="absolute top-10 z-0">
            <img
              src="/images/about_1.png"
              alt="Happy family"
              className="w-72 md:w-100 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Bottom Image (Overlapping) */}
          <div className="absolute left-0 lg:-left-10 bottom-10 md:right-36 lg:right-12 max-sm:bottom-5 z-10">
            <img
              src="/images/about_1.png"
              alt="Moving boxes"
              className="w-64 md:w-96 md:h-80 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Circular Badge */}
          <div className="absolute z-20 max-sm:left-52 left-64 md:left-88 lg:left-76 top-64 md:top-72">
            <div className="bg-blue-100 border-2 border-blue-500 text-center rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-md">
              <span className="text-4xl font-bold text-blue-700">35</span>
              <span className="text-xs text-gray-700 leading-none">
                Years of
                <br />
                Experience
              </span>
            </div>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full text-left">
          <p className="text-md text-blue-600 font-semibold mb-2">About Us</p>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            We specialize in customized consulting programs for people and
            businesses.
          </h2>
          <p className="text-md md:text-lg text-gray-600 mb-4">
            Selective consultants focused on immediate performance improvement.
            We are dedicated to revealing the hidden resources of the enterprise
            and growing its potential. Sustainable performance is the core of
            our work.
          </p>
          <p className="text-md md:text-lg text-gray-600 mb-6">
            We consider complementary and wholesome the ethical, normative, and
            regulative dimensions. We are engaged in advancing the benefits of
            our stakeholders and placing them at par with ours as a guide to our
            work ethics. We are committed to transparency and continuous
            communication with stakeholders about mutual expectations beyond
            contractual obligations. We commit to being compliant, and we pledge
            to uphold the rules of conduct.
          </p>
          <button className="cursor-pointer flex items-center gap-2 bg-blue-600 text-white px-4 py-2 md:px-6 md:py-4 rounded-md font-semibold hover:bg-blue-700 transition">
            Learn More <MoveUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
