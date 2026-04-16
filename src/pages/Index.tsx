import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HeroBanner from "@/components/landing/HeroBanner";
import MediaGrid from "@/components/landing/MediaGrid";
import ProblemSection from "@/components/landing/ProblemSection";
import AudienceSection from "@/components/landing/AudienceSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import AboutSection from "@/components/landing/AboutSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HeroBanner />
      <MediaGrid />
      <ProblemSection />
      <AudienceSection />
      <BenefitsSection />
      <AboutSection />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
