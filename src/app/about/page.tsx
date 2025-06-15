import FooterSection from "@/components/about/FooterSection";
import AboutHeroSection from "@/components/about/HeroSection";
import PrinciplesSection from "@/components/about/SecondSection";
import ServiceSection from "@/components/about/ServiceSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const About = () => {
  return (
    <main className="bg-white">
      <Header />
      <AboutHeroSection />
      <PrinciplesSection />
      <ServiceSection />
      <FooterSection />
    </main>
  );
};

export default About;
