import { FooterSection } from "@/components/user-interface/about/FooterSection";
import { AboutHeroSection } from "@/components/user-interface/about/HeroSection";
import { PrincipalsSection } from "@/components/user-interface/about/SecondSection";
import { ServiceSection } from "@/components/user-interface/about/ServiceSection";

const About = () => {
  return (
    <main className="bg-white">
      <AboutHeroSection />
      <PrincipalsSection />
      <ServiceSection />
    </main>
  );
};

export default About;
