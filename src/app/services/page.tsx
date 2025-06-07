import ContentSection from "@/components/services/ContentSection";
import HeroSection from "@/components/services/HeroSection";
import React from "react";

export type Service = {
  service: {
    title: string;
    image: string;
    desc: string;
    buttonText: string;
    bgColor: string;
    textColor: string;
  };
};

const services: Service["service"][] = [
  {
    title: "CODE - Consulting for Organization and Development of Enterprises",
    image:
      "https://mach-consultants.com/wp-content/uploads/2024/05/CODE-without-a-title-1-1024x985.jpg",
    desc: "Reveals the hidden resources and critical elements of operations in order to develop the capabilities of the enterprise for global performance, create transformations, improve global performance, build strategic vigilance, and foster innovation and resilience.",
    buttonText: "Book Appointment",
    bgColor: "bg-gradient-to-r from-gray-300 to-white",
    textColor: "black",
  },
  {
    title: "DPIE - Transformational Change",
    image:
      "https://mach-consultants.com/wp-content/uploads/2024/05/Transformational-Change-without-a-title.jpg",
    desc: "Few professionals doubt that companies and administrations need to transform. We help organizations manage their transformations effectively and instill processes to identify transformation objectives, methods, and measurements.",
    buttonText: "Book Appointment",
    bgColor: "bg-gradient-to-r from-gray-100 to-green-100",
    textColor: "black",
  },
  {
    title: "STAR - Strategy Tracking and Review",
    image:
      "https://mach-consultants.com/wp-content/uploads/2024/05/Strategy-without-a-title.jpg",
    desc: "The pace of change in the world is brutal; reactive strategies fall short of delivering results and survivability. Get ahead of the curve with the right process of strategy review.",
    buttonText: "Book Appointment",
    bgColor: "bg-gradient-to-r from-gray-100 to-yellow-100",
    textColor: "black",
  },
  {
    title: "OMC - Operations and Management Control",
    image:
      "https://mach-consultants.com/wp-content/uploads/2024/05/Management-Control-english-958x1024.jpg",
    desc: "Unleashes then federates human energy through collaborative management tools. It is the process needed by business leaders to monitor and control the advancement toward objectives, and the alignment of personal objectives with teamwork and corporate goals.",
    buttonText: "Book Appointment",
    bgColor: "bg-gradient-to-r from-white to-red-100",
    textColor: "black",
  },
  {
    title: "BRD - Business Responsible Development",
    image:
      "https://mach-consultants.com/wp-content/uploads/2024/05/BRD-without-a-title-1024x388.jpg",
    desc: "We are not imposing models or certifications or a procedure. We go into the company, work with the people with their environmental and social sensibilities in order to innovate in the products, processes, strategies, to build environmental and social resources to sustain future growth of the company.",
    buttonText: "Book Appointment",
    bgColor: "bg-gradient-to-r from-blue-100 to-white",
    textColor: "black",
  },
  {
    title: "BRD - Business Responsible Development",
    image:
      "https://mach-consultants.com/wp-content/uploads/2024/05/BUTTERS-with-no-title-1536x776.jpg",
    desc: "We are not imposing models or certifications or a procedure. We go into the company, work with the people with their environmental and social sensibilities in order to innovate in the products, processes, strategies, to build environmental and social resources to sustain future growth of the company.",
    buttonText: "Book Appointment",
    bgColor: "bg-gradient-to-r from-white to-pink-100",
    textColor: "black",
  },
];

const Services = () => {
  return (
    <main className="relative bg-white">
      <HeroSection />
      {services &&
        services.length > 0 &&
        services.map((service, index) => (
          <div
            key={`service-${index}`}
            className={`sticky ${index === 0 ? "top-25 pb-20" : "top-0"}`}
          >
            <ContentSection service={service} />
          </div>
        ))}
    </main>
  );
};

export default Services;
