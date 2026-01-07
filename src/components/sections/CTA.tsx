"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export function CTA() {
  return (
    <section id="conversation" className="py-40 bg-background w-full flex justify-center items-center">
      <div className="container px-4 md:px-6 w-full max-w-7xl">
        
        <FadeIn className="bg-secondary/40 backdrop-blur-xl rounded-[4rem] p-16 md:p-24 lg:p-32 text-center relative overflow-hidden shadow-2xl group text-white border border-white/5">
          
          {/* Abstract Background Decoration */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/2 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-12 leading-[0.9] tracking-tight">
              The initial conversation is <br/> 
              <span className="italic text-accent/80">diagnostic</span>, not a pitch.
            </h2>
            <p className="text-2xl lg:text-3xl text-foreground/70 mb-8 font-sans font-light max-w-3xl leading-relaxed tracking-tight">
              We discuss the decision you are facing and assess whether this work is appropriate.
            </p>
            <p className="text-xl text-accent/50 mb-16 font-sans font-medium uppercase tracking-[0.3em] italic">
              There is no obligation.
            </p>
            
            <Button 
                size="lg" 
                className="h-16 pl-10 pr-3 rounded-full bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-500 font-bold text-lg shadow-2xl flex items-center gap-6 group/btn" 
                asChild
            >
              <Link href="mailto:contact@kurekhersi.com">
                Request a strategic diagnostic conversation
                <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-700 group-hover/btn:rotate-[-45deg]">
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
