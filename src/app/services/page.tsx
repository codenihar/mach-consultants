import ContentSection from "@/components/services/ContentSection";
import HeroSection from "@/components/services/HeroSection";
import React from "react";

export type Service = {
  service: {
    title: string;
    image: string;
    desc: string;
    lists: string[];
    buttonText: string;
    bgColor: string;
    textColor: string;
  };
};

const services: Service["service"][] = [
  {
    title: "Branding Identity",
    image: "/images/content_1.png",
    desc: "Create a trusted, global brand with our expert designs and strategies. We help improve your brand's visibility, credibility, and connection with customers both online and offline.",
    lists: [
      "Rebranding",
      "Brand Guidelines",
      "Brand Strategy",
      "Brand Collaterals",
      "Visual Identity Design",
      "Brand Experience",
      "Brand Audits",
    ],
    buttonText: "Build brand identity",
    bgColor: "bg-[#3D2EFF]",
    textColor: "white",
  },
  {
    title: "UI UX Design",
    image: "/images/content_1.png",
    desc: "Turn your ideas into designs that help to business growth. Our UI UX services create easy-to-use, eye-catching digital experiences that keep users engaged, improve satisfaction.",
    lists: [
      "User Research",
      "Wireframe & Prototyping",
      "Brand Strategy",
      "Brand Collaterals",
      "Visual Identity Design",
      "Brand Experience",
      "Brand Audits",
    ],
    buttonText: "Improve product UX",
    bgColor: "bg-white",
    textColor: "black",
  },
  {
    title: "Web Design",
    image: "/images/content_1.png",
    desc: "Get a website that looks great and drives real results. With responsive, user-friendly design, your site will engage visitors, boost conversions, and enhance your brand’s online presence..",
    lists: [
      "User Research",
      "Wireframe & Prototyping",
      "Brand Strategy",
      "Brand Collaterals",
      "Visual Identity Design",
      "Brand Experience",
      "Brand Audits",
    ],
    buttonText: "Design website today",
    bgColor: "bg-yellow-300",
    textColor: "black",
  },
  {
    title: "Build Product (MVP)",
    image: "/images/content_1.png",
    desc: "Change your idea into a real product with our MVP development services. We focus on the essential features, test with real users, and help you launch fast, get feedback, for saving your time and money.",
    lists: [
      "User Research",
      "Wireframe & Prototyping",
      "Brand Strategy",
      "Brand Collaterals",
      "Visual Identity Design",
      "Brand Experience",
      "Brand Audits",
    ],
    buttonText: "Design website today",
    bgColor: "bg-red-500",
    textColor: "white",
  },
  {
    title: "Webflow",
    image: "/images/content_1.png",
    desc: "Build beautiful, fast websites with our Webflow & Framer development services. We make sure your site is easy to use and helps you reach your goals quickly.",
    lists: [
      "User Research",
      "Wireframe & Prototyping",
      "Brand Strategy",
      "Brand Collaterals",
      "Visual Identity Design",
      "Brand Experience",
      "Brand Audits",
    ],
    buttonText: "Launch website flow",
    bgColor: "bg-black",
    textColor: "white",
  },
];

const Services = () => {
  return (
    <main className="relative bg-white">
      <HeroSection />
      {services &&
        services.length > 0 &&
        services.map((service, index) => (
          <div key={`service-${index}`} className="sticky top-16">
            <ContentSection service={service} />
          </div>
        ))}
    </main>
  );
};

export default Services;
