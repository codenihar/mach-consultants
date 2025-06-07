import React from "react";

const AboutHeroSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-20 lg:py-28 xl:py-36 pt-30 md:pt-28 font-LibreRegular">
      {/* Title Section */}
      <h2 className="max-sm:flex max-sm:gap-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] leading-none font-bold text-black tracking-tight font-LibreBold">
        ABOUT{" "}
        <p className="md:hidden text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] leading-none font-bold text-black tracking-tight">
          US
        </p>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-start mt-2 sm:mt-3 md:mt-4">
        {/* Left Part */}
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          <h2 className="hidden md:block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] leading-none font-bold font-LibreBold text-black tracking-tight">
            US
          </h2>

          <p className="text-gray-700 font-medium text-md lg:text-lg my-3 sm:my-4 md:my-6 line-clamp-6">
            Selective consultants focused on immediate performance improvement.
            We are dedicated to revealing the hidden resources of the enterprise
            and growing its potential. Sustainable performance is the core of
            our work.
          </p>
        </div>

        {/* Middle Part - Full width on mobile, then col-span-2 on desktop */}
        <div className="col-span-1 md:col-span-2 flex flex-col items-center gap-3 sm:gap-4 md:gap-6">
          <img
            src="https://mach-consultants.com/wp-content/uploads/2024/03/headway-5QgIuuBxKwM-unsplash-scaled.jpg"
            alt="About Us"
            className="rounded-xl sm:rounded-2xl md:rounded-[2rem] w-full object-cover"
          />
        </div>

        {/* Right Part */}
        <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4">
          <img
            src="https://mach-consultants.com/wp-content/uploads/2022/03/MACH-LOGO-FINAL-01.png"
            alt="Mach Consultants"
            className="hidden lg:block w-full h-auto rounded-xl sm:rounded-2xl md:rounded-[2rem] object-cover"
          />
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl text-black font-bold my-2 sm:my-3 md:my-4 mb-3 sm:mb-4 md:mb-6">
              Values
            </h3>
            <p className="text-gray-600 text-md sm:text-lg line-clamp-6">
              We consider complementary and wholesome the ethical, normative,
              and regulative dimensions. We are engaged in advancing the
              benefits of our stakeholders and placing them at par with ours as
              a guide to our work ethics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
