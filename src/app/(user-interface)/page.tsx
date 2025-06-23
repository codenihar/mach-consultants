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
        <Hero className="font-PTSerif italic" />
        <Stats className="font-PTSerif italic" />
      </div>
      <AboutUs className="font-PTSerif italic" />
      <Partners className="font-PTSerif italic" />
      <Publications className="font-PTSerif italic" />
      <WhyChooseUs className="font-PTSerif italic" />
      <ConsultationForm className="font-PTSerif italic" />
      <Blogs className="font-PTSerif italic" />
    </main>
  );
}
