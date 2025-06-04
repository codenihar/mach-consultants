import React from "react";

const AboutUsSection: React.FC = () => {
  return (
    <section className="pt-56 pb-28 px-4 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14 relative">
        {/* Left Image Section */}
        <div className="relative flex items-center justify-end h-140 w-full md:w-1/2">
          {/* Top Image */}
          <div className="h-full z-0">
            <img
              src="/images/about_1.png"
              alt="Happy family"
              className="w-72 h-48 md:w-100 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Bottom Image (Overlapping) */}
          <div className="absolute right-6 md:right-36 bottom-0 z-10">
            <img
              src="/images/about_1.png"
              alt="Moving boxes"
              className="w-64 h-44 md:w-96 md:h-80 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Circular Badge */}
          <div className="absolute z-20 left-64 top-64 md:left-92 md:top-72">
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
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-md text-blue-600 font-semibold mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            We specialize in customized insurance programs for people and
            businesses.
          </h2>
          <p className="text-md text-gray-600 mb-4">
            Since 1948, Seltzer Group Partners has been a trusted insurance
            agency that helps individuals and businesses protect their future.
            With an extensive network of independent agencies and industry
            partners, we provide customized coverage that meets your specific
            needs today and minimizes your future risk.
          </p>
          <p className="text-md text-gray-600 mb-6">
            We don’t just sell insurance; we build relationships with our
            clients to help them make informed decisions. Our team of insurance
            professionals have the knowledge, skills, markets and desire
            necessary to provide you with the most pleasant insurance experience
            possible.
          </p>
          <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition duration-300">
            Learn More &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
