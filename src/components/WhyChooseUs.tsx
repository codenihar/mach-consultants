import React from "react";
import { ShieldCheck, Clock, Star, Building2 } from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: <ShieldCheck className="text-blue-600 w-10 h-10" />,
    title: "Professional Service",
    description:
      "Our team of insurance professionals have the knowledge, skills, markets and desire necessary to provide.",
  },
  {
    icon: <Clock className="text-blue-600 w-10 h-10" />,
    title: "Ultra Fast Support",
    description:
      "Our experienced staff of garage insurance, auto dealer bond and commercial insurance experts.",
  },
  {
    icon: <Star className="text-blue-600 w-10 h-10" />,
    title: "Top Rated Insurance",
    description:
      "We have the best selection of policies and carriers to fill any need. Let us show you how we can save you money.",
  },
  {
    icon: <Building2 className="text-blue-600 w-10 h-10" />,
    title: "Comprehensive Coverage",
    description:
      "Our policies cover a wide range of needs, ensuring you are protected in every aspect.",
  },
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-12">
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <p className="text-blue-600 font-semibold mb-2 text-sm sm:text-base md:text-lg">
            Why Choose Us
          </p>
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
            Why you should choose Consultia, there are tons of reasons.
          </h2>
          <p className="text-gray-700 mb-6 md:mb-8 text-base sm:text-lg">
            Our team of insurance professionals have the knowledge, skills,
            markets and desire necessary to provide you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={`feat-${index}`}
                className="flex flex-col items-start gap-3 p-4 sm:p-5 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="text-blue-600">{feature.icon}</div>
                <div>
                  <h4 className="font-semibold text-lg sm:text-xl text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image with Badge */}
        <div className="relative w-full order-1 lg:order-2">
          <div className="rounded-xl overflow-hidden w-full max-w-md xl:mx-auto shadow-lg">
            <img
              src="/images/why_choose_us.png"
              alt="Handshake"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>

          <div className="absolute bottom-20 -left-2 md:-left-4 lg:-right-4 xl:right-4 bg-blue-100 text-blue-900 font-bold text-sm w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-2 border-blue-300 flex flex-col items-center justify-center shadow-md">
            <span className="text-2xl sm:text-3xl">25k</span>
            <span className="text-xs sm:text-sm font-medium">Agents</span>
            <span className="text-xs sm:text-sm font-medium">Worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
