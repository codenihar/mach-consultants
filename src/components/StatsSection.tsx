import { ShieldCheck, MapPin, Users, FileText } from "lucide-react";

type Stat = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

const stats: Stat[] = [
  {
    icon: <MapPin className="w-12 h-12 text-blue-600" />,
    value: "30+",
    label: "Locations Available",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
    value: "30+",
    label: "Licensed All States",
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    value: "60K+",
    label: "Satisfied Clients",
  },
  {
    icon: <FileText className="w-12 h-12 text-blue-600" />,
    value: "12K+",
    label: "Insurance Policies",
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-6 sm:py-8 md:py-10 w-full max-w-5xl mx-auto relative -bottom-10 sm:-bottom-16 md:-bottom-20 lg:-bottom-24 rounded-xl shadow-md px-4 sm:px-6">
      <div className="w-full text-center">
        <h2 className="text-sm sm:text-base font-semibold text-gray-700 mb-3 sm:mb-4 md:mb-6">
          You can count on us
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-2">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center md:items-end justify-center gap-2 sm:gap-3 md:gap-4 font-SFmedium ${
                index % 2 === 1 ? "md:border-l-2" : ""
              } ${
                index > 1 ? "border-t-2 md:border-t-0" : ""
              } border-gray-200 pt-4 md:pt-0 px-4 sm:px-6 md:px-8`}
            >
              <div className="text-blue-500">{stat.icon}</div>
              <div className="flex flex-col items-center md:items-start">
                <p className="text-3xl sm:text-4xl font-bold text-gray-800">
                  {stat.value}
                </p>
                <p className="text-sm sm:text-md text-gray-500 text-center md:text-left">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
