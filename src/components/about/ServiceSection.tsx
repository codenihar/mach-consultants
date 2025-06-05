type Service = {
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    title: "SPACE PLANNING",
    desc: "we create efficient layouts to maximize the use of space. every design is crafted with attention to detail to ensure comfort and ease of use.",
  },
  {
    title: "INTERIOR DESIGN",
    desc: "From concept development to final installation, we handle all aspects of interior decoration, ensuring every detail aligns with the client’s vision.",
  },
  {
    title: "CUSTOM FURNITURE DESIGN",
    desc: "We design and craft unique furniture pieces tailored to specific client needs, creating items that are not only beautiful but also functional.",
  },
  {
    title: "PROJECT MANAGEMENT",
    desc: "We oversee the entire design process, ensuring projects are completed on time and within budget. Our team is committed to delivering the best results for every client.",
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-10 md:gap-12">
        <div className="w-full lg:flex-1 space-y-4 sm:space-y-5 md:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black">
            Our Services
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-md">
            At Britto Charette, we offer a comprehensive range of services to
            bring your interior design vision to life. Each service is tailored
            to meet the unique needs of our clients, ensuring a seamless and
            satisfying experience.
          </p>
          <img
            src="/images/services.png"
            alt="Our Services Room"
            className="rounded-xl sm:rounded-2xl md:rounded-[3rem] w-full h-auto object-cover mt-4 sm:mt-6"
            loading="lazy"
          />
        </div>

        <div className="w-full lg:flex-1 flex flex-col lg:items-end space-y-2 sm:space-y-3">
          {services.map((item, index) => (
            <div key={index}>
              <h3
                className={`leading-tight text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-md text-black font-bold tracking-tight mb-2 sm:mb-3 md:mb-4 ${
                  index > 0 ? "mt-6 sm:mt-7 md:mt-8" : ""
                }`}
              >
                {item.title}
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base max-w-md mt-1 sm:mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
