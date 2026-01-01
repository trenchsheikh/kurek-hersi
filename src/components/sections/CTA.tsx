"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export function CTA() {
  return (
    <section id="contact" className="py-24 bg-background w-full flex justify-center items-center">
      <div className="container px-4 md:px-6 w-full max-w-[95%]">
        
        <FadeIn className="bg-[oklch(0.20_0.05_150)] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl group text-white">
          
          {/* Abstract Background Decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl mb-8 leading-[0.9]">
              Ready to Lead <br/> the Market?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10 font-light max-w-2xl">
              Partner with Kurek Hersi for world-class B2B market research that delivers clear answers to your most complex strategic questions.
            </p>
            
            <Button 
                size="lg" 
                className="h-14 pl-8 pr-2 rounded-full bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300 font-bold text-base shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-4 group/btn" 
                asChild
            >
              <Link href="mailto:contact@kurekhersi.com">
                Schedule Consultation
                <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-500 group-hover/btn:rotate-[-45deg]">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </Link>
            </Button>
          </div>

        </FadeIn>
      </div>
    </section>
  );
}
