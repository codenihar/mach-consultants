import AboutUsSection from "../components/AboutSection";
import PartnerSection from "../components/PartnerSection";
import HeroSection from "../components/HeroSection";
import Publications from "../components/Publications";
import StatsSection from "../components/StatsSection";
import ConsultationForm from "../components/ContactUsSection";
import WhyChooseUsSection from "../components/WhyChooseUs";
import BlogSection from "../components/BlogSection";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="relative">
        <HeroSection />
        <StatsSection />
      </div>
      <AboutUsSection />
      <PartnerSection />
      <Publications />
      <WhyChooseUsSection />
      <ConsultationForm />
      <BlogSection />
    </main>
  );
}
