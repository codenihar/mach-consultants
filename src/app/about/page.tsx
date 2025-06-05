import FooterSection from "@/components/about/FooterSection";
import AboutHeroSection from "@/components/about/HeroSection";
import PrinciplesSection from "@/components/about/SecondSection";
import ServiceSection from "@/components/about/ServiceSection";

const About = () => {
  return (
    <main className="bg-white">
      <AboutHeroSection />
      <PrinciplesSection />
      <ServiceSection />
      <FooterSection />
    </main>
  );
};

export default About;
