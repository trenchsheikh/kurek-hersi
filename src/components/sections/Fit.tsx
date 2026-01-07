"use client";

import { FadeIn, FadeInStagger, FadeInChild } from "@/components/ui/fade-in";
import { Check, X } from "lucide-react";
import { Pill } from "@/components/ui/pill";

export function Fit() {
  const relevantPoints = [
    "Senior leadership is directly involved",
    "A material AI decision is approaching",
    "There is real downside to getting it wrong",
  ];

  const notRelevantPoints = [
    "Execution is the priority",
    "Outcomes are already decided",
    "The work is exploratory or junior-led",
  ];

  return (
    <section id="fit" className="py-40 bg-secondary/30 w-full flex justify-center overflow-hidden relative">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl z-10">
        <FadeIn className="mb-24 text-center">
          <Pill className="mb-8 font-sans">Engagement Fit</Pill>
          <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight leading-[1.1]">
            Qualifications for <br/> Diagnostic Work
          </h3>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Relevant Column */}
          <FadeInStagger>
            <FadeInChild>
              <div className="bg-background/40 backdrop-blur-md rounded-[3rem] p-12 lg:p-14 shadow-2xl h-full border border-white/5 relative group overflow-hidden transition-all duration-500 hover:border-accent/10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <h4 className="font-serif text-3xl lg:text-4xl mb-12 flex items-center gap-5 text-foreground">
                   <div className="h-12 w-12 rounded-full bg-accent/10 text-accent flex items-center justify-center border border-accent/20">
                     <Check className="h-6 w-6" />
                   </div>
                   Relevant When:
                </h4>
                <ul className="space-y-10">
                  {relevantPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-5">
                       <Check className="h-6 w-6 text-accent mt-0.5 shrink-0 opacity-40" />
                       <span className="text-xl lg:text-2xl text-foreground/80 font-sans font-light leading-snug tracking-tight">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInChild>
          </FadeInStagger>

          {/* Not Relevant Column */}
          <FadeInStagger>
             <FadeInChild>
              <div className="bg-secondary/20 backdrop-blur-sm rounded-[3rem] p-12 lg:p-14 h-full border border-dashed border-white/10 relative group transition-all duration-500 hover:border-white/20">
                <h4 className="font-serif text-3xl lg:text-4xl mb-12 flex items-center gap-5 text-muted-foreground/60">
                   <div className="h-12 w-12 rounded-full bg-white/3 text-white/20 flex items-center justify-center border border-white/5">
                     <X className="h-6 w-6" />
                   </div>
                   Not Relevant When:
                </h4>
                <ul className="space-y-10">
                  {notRelevantPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-5 text-muted-foreground/40">
                       <X className="h-6 w-6 text-white/10 mt-0.5 shrink-0" />
                       <span className="text-xl lg:text-2xl font-sans font-light leading-snug tracking-tight">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
             </FadeInChild>
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
}
