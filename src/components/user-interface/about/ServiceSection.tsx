type Service = {
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    title: "CODE - Consulting for Organization and Development of Enterprises",
    desc: "Reveals the hidden resources and critical elements of operations in order to develop the capabilities of the enterprise for global performance, create transformations, improve global performance, build strategic vigilance, and foster innovation and resilience.",
  },
  {
    title: "DPIE - Transformational Change",
    desc: "Few professionals doubt that companies and administrations need to transform. We help organizations manage their transformations effectively and instill processes to identify transformation objectives, methods, and measurements.",
  },
  {
    title: "STAR - Strategy Tracking and Review",
    desc: "The pace of change in the world is brutal; reactive strategies fall short of delivering results and survivability. Get ahead of the curve with the right process of strategy review.",
  },
  {
    title: "OMC - Operations and Management Control",
    desc: "Unleashes then federates human energy through collaborative management tools. It is the process needed by business leaders to monitor and control the advancement toward objectives, and the alignment of personal objectives with teamwork and corporate goals.",
  },
];

export function ServiceSection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 bg-white font-Inter">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-10 md:gap-12">
        <div className="w-full lg:flex-1 space-y-4 sm:space-y-5 md:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-PTSerif italic tracking-tight text-black">
            Our Services
          </h2>
          <p className="text-gray-700 text-md leading-relaxed max-w-md py-2">
            At Britto Charette, we offer a comprehensive range of services to
            bring your interior design vision to life. Each service is tailored
            to meet the unique needs of our clients, ensuring a seamless and
            satisfying experience.
          </p>
          <img
            src="https://mach-consultants.com/wp-content/uploads/2024/05/pexels-karolina-grabowska-4195409-1.jpg"
            alt="Our Services"
            className="rounded-xl sm:rounded-2xl md:rounded-[3rem] w-full h-auto object-cover mt-4 sm:mt-6"
            loading="lazy"
          />
        </div>

        <div className="w-full lg:flex-1 flex flex-col lg:items-end space-y-2 sm:space-y-3">
          {services.map((item, index) => (
            <div key={index}>
              <h3
                className={`leading-tight text-lg sm:text-xl md:text-2xl max-w-md text-black font-bold tracking-tight mb-2 sm:mb-3 md:mb-4 font-PTSerif italic ${
                  index > 0 ? "mt-6 sm:mt-7 md:mt-8" : ""
                }`}
              >
                {item.title}
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base max-w-md mt-1 sm:mt-2 lg:line-clamp-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
