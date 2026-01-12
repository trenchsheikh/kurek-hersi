"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import Script from "next/script";

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
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden w-full bg-black">
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="lazyOnload"
      />
      <link 
        href="https://assets.calendly.com/assets/external/widget.css" 
        rel="stylesheet" 
      />
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Mesh Background Pattern */}
      <div className="mesh-gradient z-1 opacity-[0.05]" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none z-1" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-1 opacity-[0.05]" />

      <div className="container px-4 md:px-6 w-full max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-12 text-white max-w-4xl mx-auto">
              AI decisions are the <br className="hidden md:block"/> 
              <span className="text-white/40 font-light">most expensive decisions</span> <br className="hidden md:block"/> 
              you will make this year
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto font-sans font-light leading-relaxed tracking-tight px-4 mb-16">
                We help senior marketing, product, and strategy leaders make irreversible AI decisions with clarity, confidence, and evidence before budgets, teams, or roadmaps are locked in.
              </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={openCalendly}
                size="lg"
                className="h-14 px-12 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 font-medium text-base tracking-tight shadow-2xl hover:scale-105"
              >
                Book a Strategic Diagnostic
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
