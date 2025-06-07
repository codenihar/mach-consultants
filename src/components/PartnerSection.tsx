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

const partners: string[] = [
  "https://mach-consultants.com/wp-content/uploads/2024/05/ISEOR-Smaller.jpg",
  "https://mach-consultants.com/wp-content/uploads/2022/05/aec_logo_en.jpg",
  "https://mach-consultants.com/wp-content/uploads/2024/05/apave.jpg",
  "https://mach-consultants.com/wp-content/uploads/2022/05/LRI.jpg",
  "https://mach-consultants.com/wp-content/uploads/2022/05/UBYFOL.jpg",
  "https://mach-consultants.com/wp-content/uploads/2024/05/ilo-logo.png",
  "https://mach-consultants.com/wp-content/uploads/2024/05/PDP-logo-high-res-scaled.jpg",
];

const CoverageSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-yellow-100 py-4 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 font-LibreRegular">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl lg:text-3xl text-gray-800 text-center font-semibold pb-8">
          Our Partners
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-7 gap-3 sm:gap-4 md:gap-8 py-2">
          {partners &&
            partners.map((partner, idx) => (
              <div
                key={idx}
                className="cursor-pointer text-center transition-all duration-300"
              >
                <img src={partner} alt="partner-image" />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
