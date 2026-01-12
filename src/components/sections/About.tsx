"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function About() {
  return (
    <section className="pt-32 pb-20 bg-white w-full flex justify-center items-center overflow-hidden">
      <div className="container px-4 md:px-6 w-full max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_3fr] gap-12 lg:gap-24 items-start">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.4em] text-black/40 uppercase mt-2">
               // About Us
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
             <div className="space-y-12">
               <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tighter leading-[0.9] text-black/20">
                 Welcome to Kurek|Hersi: <br/>
                 <span className="text-black">Your Trusted Partner in <br/> Strategic AI Governance</span>
               </h2>
               <p className="text-sm text-black/40 font-sans font-medium leading-relaxed max-w-lg">
                 We are a premier AI talent acquisition and consulting firm dedicated to connecting top-tier technical professionals with prestigious firms and corporations.
               </p>
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="mt-20">
          <div className="aspect-[21/9] rounded-sm overflow-hidden bg-black/5 grayscale shadow-2xl">
            <img 
               src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop" 
               alt="Modern Office" 
               className="w-full h-full object-cover opacity-60"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
