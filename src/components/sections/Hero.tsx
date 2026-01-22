"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { AuroraBackground } from "@/components/ui/aurora-background";

declare global {
  interface Window {
    Calendly: any;
  }
}


export function HeroSection() {
  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/jibreal-kurekhersi/30min'
      });
    }
  };

  return (
    <section className="relative w-full bg-black">
      
      <AuroraBackground>
        <div className="relative z-10 container px-4 md:px-6 w-full max-w-6xl">
          <div className="flex flex-col items-center text-center">
              <FadeIn delay={0.1}>
                <h1 className="font-serif text-4xl md:text-7xl lg:text-9xl font-medium tracking-tight leading-[0.95] mb-8 md:mb-12 text-white">
                  Executive-Grade <br /> Market Truth for AI
                </h1>
              </FadeIn>
    
              <FadeIn delay={0.2}>
                  <p className="text-lg md:text-2xl text-white/50 max-w-3xl font-sans font-light leading-relaxed tracking-tight mb-12 md:mb-16">
                    We help AI-first B2B leaders de-risk AI, GTM, and positioning bets using independent market truth from real buyers.
                  </p>
              </FadeIn>
    
              <FadeIn delay={0.3}>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    onClick={openCalendly}
                    size="lg"
                    className="h-14 md:h-16 px-8 md:px-16 rounded-none bg-white text-black hover:bg-white/90 transition-all duration-500 font-medium text-base md:text-lg tracking-tight shadow-2xl hover:scale-105"
                  >
                    Book a Strategic Diagnostic
                  </Button>
                </div>
              </FadeIn>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
}
