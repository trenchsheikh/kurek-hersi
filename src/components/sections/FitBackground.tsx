"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function FitBackground() {
  return (
    <section className="relative w-full py-24 md:py-48 bg-black flex justify-center overflow-hidden border-b border-white/5">
      {/* Subtle edge highlight */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-8 items-start">
          
          {/* Left Indicator - Positioned higher and renamed to Strategic Action */}
          <div className="lg:col-span-2 lg:-translate-y-12">
             <FadeIn>
               <div className="flex items-center gap-4">
                 <div className="w-8 h-px bg-white/20" />
                 <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase whitespace-nowrap">
                   Strategic Action
                 </span>
               </div>
             </FadeIn>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-16 max-w-4xl">
                Clarity before <br className="hidden md:block" /> commitment.
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <FadeIn delay={0.2}>
                <div className="flex flex-col gap-6">
                  <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed tracking-tight">
                    When budgets, roadmaps, or narratives are about to be locked in, uncertainty becomes expensive. 
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-col gap-10">
                  <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed tracking-tight">
                    This work exists to replace assumption with independent buyer truth before those commitments are made.
                  </p>
                  
                  <div className="pt-10 border-t border-white/10">
                    <p className="text-lg text-white/40 font-serif italic leading-relaxed">
                      If that is the position you’re in, this is the appropriate starting point.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Indicator - Mirrored gap and lower vertical offset */}
          <div className="lg:col-span-2 flex items-end justify-end self-stretch lg:translate-y-12">
             <FadeIn delay={0.4}>
               <div className="flex items-center gap-4">
                 <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase whitespace-nowrap">
                   Where to begin
                 </span>
                 <div className="w-8 h-px bg-white/20" />
               </div>
             </FadeIn>
          </div>
        </div>
      </div>

      {/* Subtle bottom highlight */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
