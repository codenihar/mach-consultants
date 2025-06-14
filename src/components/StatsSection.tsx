import { ShieldCheck, MapPin, Users, FileText } from "lucide-react";

type Stat = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

const stats: Stat[] = [
  {
    icon: (
      <MapPin className="w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 text-pink-600" />
    ),
    value: "30+",
    label: "Locations Available",
  },
  {
    icon: (
      <ShieldCheck className="w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 text-pink-600" />
    ),
    value: "30+",
    label: "Licensed All States",
  },
  {
    icon: (
      <Users className="w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 text-pink-600" />
    ),
    value: "60K+",
    label: "Satisfied Clients",
  },
  {
    icon: (
      <FileText className="w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 text-pink-600" />
    ),
    value: "12K+",
    label: "Insurance Policies",
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="w-[95%] md:w-[90%] lg:w-[80%] bg-white py-8 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-xl shadow-md font-PTSerif">
      <div className="max-w-full grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12 md:py-2 md:px-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col gap-1 lg:gap-3 lg:flex-row lg:space-y-2 items-center ${
              index > 0 && "xl:border-l-2"
            } xl:px-10 font-SFmedium border-gray-200`}
          >
            <div className="h-full flex items-center">{stat.icon}</div>
            <div className="flex flex-col items-center lg:items-start text-center">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800  italic">
                {stat.value}
              </p>
              <p className="text-sm md:text-md text-gray-500 w-[max-content] font-Inter">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
