import { BlogsService } from "@/actions/blogs/blogs.service";
import { AboutUs } from "@/components/user-interface/AboutSection";
import { Partners } from "@/components/user-interface/PartnerSection";
import { Hero } from "@/components/user-interface/HeroSection";
import { Publications } from "@/components/user-interface/Publications";
import { Stats } from "@/components/user-interface/StatsSection";
import { ConsultationForm } from "@/components/user-interface/ContactUsSection";
import { WhyChooseUs } from "@/components/user-interface/WhyChooseUs";
import { Blogs } from "@/components/user-interface/BlogSection";
import React from "react";

export default async function Home() {
  return (
    <main className="bg-white">
      <div className="relative">
        <Hero />
        <Stats />
      </div>
      <AboutUs />
      <Partners />
      <Publications />
      <WhyChooseUs />
      <ConsultationForm />
      <Blogs />
    </main>
  );
}
