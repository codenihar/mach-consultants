import React from "react";

type Step = {
  img: string;
  step: string;
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  {
    img: "/images/how_it_works_1.png",
    step: "01",
    title: "Dr. Pierre El Haddad",
    desc: "Dr. Pierre is President and Senior Consultant at MACH Consultants S.A.S, Associate Professor of Management at INSEEC Grande Ecole, Paris, Board Member of the Management Consulting division AOM, Board Member ISODC and NODE Network of Organizational Development Experts, Chair of RISE Conference Research with Impact for Society and the Enterprise",
  },
  {
    img: "/images/how_it_works_2.png",
    step: "02",
    title: "Nabil Najjar",
    desc: "Nabil holds an MBA from ESA (ESCP-EAP) and a civil engineering degree from Ecole Centrale de Lyon. He managed flagship construction projects in healthcare, healthcare education, and first response training. He is also a long-standing committee member of a renowned cultural festival.",
  },
  {
    img: "/images/how_it_works_3.png",
    step: "03",
    title: "Relax and sleep easy",
    desc: "Your business isn’t just business to us. It’s personal. We don’t rest easy until you do.",
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-blue-600 font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3">
          Associates
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-10 md:mb-12 leading-tight">
          We give you access to the best and <br className="hidden sm:block" />
          most competitive insurance products
        </h2>

        <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-3">
          {STEPS.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-left">
              <div className="relative w-full overflow-hidden rounded-xl aspect-square mb-4 sm:mb-6">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="bg-blue-100 text-blue-600 text-2xl sm:text-3xl font-bold w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full border-2 border-blue-400 -mt-10 sm:-mt-12 mb-4 z-10 relative shadow-sm">
                {step.step}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-md max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
