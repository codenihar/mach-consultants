import React from "react";
import {
  GraduationCap,
  HeartPulse,
  Car,
  Hourglass,
  Shield,
  Home,
  MoveUpRight,
} from "lucide-react";

type CoverageItem = {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
};

const CoverageItems: CoverageItem[] = [
  {
    icon: <GraduationCap size={72} className="text-blue-600" />,
    title: "Education",
  },
  {
    icon: <HeartPulse size={72} className="text-blue-600" />,
    title: "Health",
  },
  {
    icon: <Car size={72} className="text-blue-600" />,
    title: "Vehicle",
    active: true,
  },
  {
    icon: <Hourglass size={72} className="text-blue-600" />,
    title: "Life",
  },
  {
    icon: <Shield size={72} className="text-blue-600" />,
    title: "Pet",
  },
  {
    icon: <Home size={72} className="text-blue-600" />,
    title: "Home",
  },
];

const CoverageSection: React.FC = () => {
  return (
    <section className="bg-blue-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-8 md:mb-10 lg:mb-12">
          <div className="max-w-2xl">
            <p className="text-sm sm:text-base md:text-lg text-blue-600 font-semibold mb-1 sm:mb-2">
              Coverages
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Get the coverage you need for your business, family, and assets.
            </h2>
          </div>
          <button className="cursor-pointer flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-md transition duration-300 hover:shadow-md whitespace-nowrap">
            All Categories <MoveUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 py-6 sm:py-8 md:py-10">
          {CoverageItems.map((item, idx) => (
            <div
              key={idx}
              className={`cursor-pointer p-3 sm:p-4 md:p-5 bg-white rounded-lg sm:rounded-xl text-center transition-all duration-300 border ${
                item.active
                  ? "border-blue-600 shadow-sm sm:shadow-md"
                  : "border-gray-200 hover:border-blue-400 hover:shadow-sm"
              }`}
            >
              <div className="mb-2 sm:mb-3 py-1 sm:py-2 flex justify-center">
                {item.icon}
              </div>
              <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700">
                {item.title}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Insurance</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
