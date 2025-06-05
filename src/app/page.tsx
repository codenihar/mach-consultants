import AboutUsSection from "../components/AboutSection";
import CoverageSection from "../components/CoverageSection";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorks";
import StatsSection from "../components/StatsSection";
import AgentsSection from "../components/AgentsSection";
import ConsultationForm from "../components/ContactUsSection";
import WhyChooseUsSection from "../components/WhyChooseUs";
import BlogSection from "../components/BlogSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="relative">
        <HeroSection />
        <StatsSection />
      </div>
      <AboutUsSection />
      <CoverageSection />
      <HowItWorksSection />
      <AgentsSection />
      <WhyChooseUsSection />
      <ConsultationForm />
      <BlogSection />
      <Footer />
    </main>
  );
}
