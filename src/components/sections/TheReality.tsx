"use client";

import { FadeIn, FadeInStagger, FadeInChild } from "@/components/ui/fade-in";
import { AlertCircle, Users, TrendingDown } from "lucide-react";

export function TheReality() {
  const points = [
    { 
      title: "Vendor narratives conflict.", 
      icon: <AlertCircle className="h-6 w-6 text-accent" />,
      description: "Conflicting signals from the market make impartial evaluation nearly impossible. This creates a paralysis that stalls innovation."
    },
    { 
      title: "Internal alignment is assumed.", 
      icon: <Users className="h-6 w-6 text-accent" />,
      description: "Divergent stakeholder priorities often block unified strategic execution. Consensus is rarely the same as clarity."
    },
    { 
      title: "The cost of being wrong is higher than it appears.", 
      icon: <TrendingDown className="h-6 w-6 text-accent" />,
      description: "Strategic missteps lead to compounding technical debt and lost momentum. The hidden costs of reversals are often devastating."
    },
  ];

  return (
    <section id="the-reality" className="py-32 bg-background w-full flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <FadeIn className="mb-20">
          <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-6 font-sans">The Reality</h2>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] max-w-4xl tracking-tight">
            Most teams are deciding under pressure, not clarity.
          </h3>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {points.map((point, i) => (
            <FadeInChild key={i}>
              <div className="group h-full flex flex-col pt-8 border-t border-white/5 hover:border-accent/30 transition-colors duration-500">
                <div className="h-12 w-12 rounded-full bg-secondary/30 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 text-accent">
                  {point.icon}
                </div>
                <h4 className="text-xl font-sans font-medium mb-4 text-foreground leading-snug tracking-tight">
                  {point.title}
                </h4>
                <p className="text-muted-foreground font-sans font-light leading-relaxed text-lg">
                  {point.description}
                </p>
              </div>
            </FadeInChild>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.4}>
          <div className="flex gap-8 items-center max-w-3xl">
            <div className="h-px flex-grow bg-accent/20" />
            <p className="font-serif text-2xl md:text-3xl text-foreground/70 italic leading-relaxed text-center px-4">
              This is where mistakes compound.
            </p>
            <div className="h-px flex-grow bg-accent/20" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
