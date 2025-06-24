import React from "react";
import { AboutUs } from "@/components/user-interface/AboutSection";
import { Partners } from "@/components/user-interface/PartnerSection";
import { Hero } from "@/components/user-interface/HeroSection";
import { Publications } from "@/components/user-interface/Publications";
import { Stats } from "@/components/user-interface/StatsSection";
import { ConsultationForm } from "@/components/user-interface/ContactUsSection";
import { WhyChooseUs } from "@/components/user-interface/WhyChooseUs";
import { Blogs } from "@/components/user-interface/BlogSection";

export default async function Home() {
  return (
    <main className="bg-white">
      {/* Give Italic inside className, if needed */}
      <div className="relative">
        <Hero className="text-black font-PTSerif italic" />
        <Stats className="text-black font-PTSerif italic" />
      </div>
      <AboutUs className="text-black font-PTSerif italic" />
      <Partners className="text-black font-PTSerif italic" />
      <Publications className="text-black font-PTSerif italic" />
      <WhyChooseUs className="text-black font-PTSerif italic" />
      <ConsultationForm className="text-black font-PTSerif italic" />
      <Blogs className="text-black font-PTSerif italic" />
    </main>
  );
}
