"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import Script from "next/script";

declare global {
  interface Window {
    Calendly: any;
  }
}

export function CTA() {
  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/jibreal-kurekhersi/30min'
      });
    }
  };

  return (
    <section id="conversation" className="relative pt-40 pb-12 bg-black w-full flex justify-center overflow-hidden">
      {/* Tech Grid Background (Dark) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_top,transparent,black,transparent)]" />

      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="lazyOnload"
      />
      <link 
        href="https://assets.calendly.com/assets/external/widget.css" 
        rel="stylesheet" 
      />
      
      <div className="container px-4 md:px-6 mx-auto max-w-5xl relative z-10 text-center">
        <FadeIn>

          
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium mb-12 leading-[1.1] tracking-tight text-white max-w-4xl mx-auto">
            No pitch. No obligation.
          </h2>
          
          <p className="text-xl md:text-2xl font-sans font-light text-white/60 max-w-2xl mx-auto leading-relaxed tracking-tight mb-16">
            Just a clear discussion about the decision at hand and whether this work is the right intervention.
          </p>
          
          <div className="flex flex-col items-center gap-12">
            <Button 
                onClick={openCalendly}
                size="lg" 
                className="h-14 px-10 rounded-none bg-white text-black hover:bg-white/90 transition-all duration-300 font-medium text-base tracking-tight shadow-xl" 
            >
              Book a diagnostic conversation
            </Button>
            

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
