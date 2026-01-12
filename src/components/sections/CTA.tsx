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
    <section id="conversation" className="relative py-40 bg-white w-full flex justify-center overflow-hidden">
      {/* Tech Grid Background (Light) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_top,transparent,black,transparent)]" />

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

          
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium mb-12 leading-[1.1] tracking-tight text-black max-w-4xl mx-auto">
            The initial conversation is <br className="hidden md:block"/> 
            <span className="italic text-black/30 font-light">diagnostic</span>, not a pitch.
          </h2>
          
          <p className="text-xl md:text-2xl font-sans font-light text-black/60 max-w-2xl mx-auto leading-relaxed tracking-tight mb-16">
            We focus on the decision you are facing, the constraints around it, and whether this work is genuinely useful.
          </p>
          
          <div className="flex flex-col items-center gap-12">
            <Button 
                onClick={openCalendly}
                size="lg" 
                className="h-14 px-10 rounded-sm bg-black text-white hover:bg-black/90 transition-all duration-300 font-medium text-base tracking-tight shadow-xl" 
            >
              Request a strategic diagnostic conversation
            </Button>
            

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
