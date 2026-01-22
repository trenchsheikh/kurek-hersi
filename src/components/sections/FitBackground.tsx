"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function FitBackground() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-black flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="relative group overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)]">
          {/* Background Image Container */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
            style={{ 
              backgroundImage: "url('/backie.png')",
              opacity: 0.6
            }}
          />
          
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

          {/* Content Wrapper */}
          <div className="relative z-20 px-6 py-20 md:py-32 flex flex-col items-center text-center">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight tracking-tight mb-8 max-w-3xl">
                If a decision matters, <br/>
                <span className="italic font-light text-white/80">this is where you start.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="max-w-2xl mx-auto space-y-6">
                <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed tracking-tight">
                  You don’t come to us to explore ideas or validate instincts.
                  You come when a direction is about to be locked in and the cost of being wrong is material.
                </p>
                
                <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed tracking-tight">
                  The work is short, focused, and designed to replace uncertainty with defensible direction.
                </p>

                <p className="text-base md:text-lg text-white/40 font-sans italic tracking-wide pt-6 border-t border-white/10 mt-6 inline-block">
                  If that is not the situation you’re in, this will not be a fit.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
