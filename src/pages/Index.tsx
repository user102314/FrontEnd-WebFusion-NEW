import { lazy, Suspense } from "react";
import { PageTransition } from "../components/layout/PageTransition";
import { HeroSection } from "../components/home/HeroSection";
import { ClientsSection } from "../components/home/ClientsSection";

const AboutSection = lazy(() => import("../components/home/AboutSection").then(module => ({ default: module.AboutSection })));
const ServicesSection = lazy(() => import("../components/home/ServicesSection").then(module => ({ default: module.ServicesSection })));
const SkillsSection = lazy(() => import("../components/home/SkillsSection").then(module => ({ default: module.SkillsSection })));
const StatsSection = lazy(() => import("../components/home/StatsSection").then(module => ({ default: module.StatsSection })));
const CTASection = lazy(() => import("../components/home/CTASection").then(module => ({ default: module.CTASection })));
const TeamSection = lazy(() => import("./TeamSection"));

const Index = () => {
  return (
    <PageTransition>
      <main>
        <HeroSection />
        <ClientsSection />
        <Suspense fallback={<div className="py-20 flex justify-center"><div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div></div>}>
          <AboutSection />
          <StatsSection />
          <ServicesSection />
          <SkillsSection />
          <TeamSection />
          <CTASection />
        </Suspense>
      </main>
    </PageTransition>
  );
};

export default Index;
