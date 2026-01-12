import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection as Hero } from "@/components/sections/Hero";
import { LogoCarousel } from "@/components/sections/LogoCarousel";
import { TheRealitySection as TheReality } from "@/components/sections/TheReality";
import { OurRole } from "@/components/sections/OurRole";
import { TheDiagnostic } from "@/components/sections/TheDiagnostic";
import { FitSection as Fit } from "@/components/sections/Fit";
import { Team } from "@/components/sections/Team";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-accent-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoCarousel />
        <TheReality />
        <Team />
        <OurRole />
        <TheDiagnostic />
        <Fit />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
