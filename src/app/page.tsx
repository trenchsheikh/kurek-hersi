import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection as Hero } from "@/components/sections/Hero";
import { LogoCarousel } from "@/components/sections/LogoCarousel";
import { TheRealitySection as TheReality } from "@/components/sections/TheReality";
import { OurRole } from "@/components/sections/OurRole";
import { TheDiagnostic } from "@/components/sections/TheDiagnostic";
import { FitSection as Fit } from "@/components/sections/Fit";
import { Team } from "@/components/sections/Team";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-accent-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoCarousel />
        <TheReality />

        <HowItWorks />
        <OurRole />
        <TheDiagnostic />
        <TheDiagnostic 
          reverse 
          title="WHY KUREK HERSI" 
          steps={[
            "Faster executive alignment on AI priorities",
            "Reduced risk in vendor and platform selection",
            "Clear go or no-go decisions before major spend",
            "Confidence to move forward or stop early"
          ]} 
        />
        <Fit />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
