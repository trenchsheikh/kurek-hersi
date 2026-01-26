"use client";

import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { Pill } from "@/components/ui/pill";
import { ArrowUpRight } from "lucide-react";
import { useScroll } from "framer-motion";

const steps = [
  {
    title: "Discovery & Framing",
    description: "Aligning stakeholders to define precise business hypotheses.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    title: "Targeted Recruitment",
    description: "Identifying niche B2B experts who hold the critical answers.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "Rigorous Collection",
    description: "Multi-modal data gathering through in-depth interviews and surveys.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Synthesis & Strategy",
    description: "Transforming raw data into actionable narratives for decision-making.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  }
];

export function Methodology() {
  const { scrollYProgress } = useScroll();
  // Mimic the hero's gap/border radius effect if desired, or just static rounded-3xl
  // For consistency with specific "borders and colour theme" we'll use the Hero's Dark Green + Large Radius
  
  return (
    <section id="methodology" className="min-h-screen py-24 bg-background relative overflow-hidden w-full flex flex-col justify-center items-center">
      <div className="container px-4 md:px-6 w-full max-w-[95%]">
        
        {/* Main Grid: Left = Text Card (Hero Style), Right = Image Grid */}
        <div className="grid lg:grid-cols-2 gap-6 min-h-[85vh]">
          
          {/* Left Card - Text Content (Matching Hero Left Card Style) */}
          <FadeIn className="bg-[oklch(0.20_0.05_150)] text-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden shadow-2xl h-full">
              {/* Abstract Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div>
                <Pill className="mb-8 border-white/20 text-white bg-white/5 hover:bg-white/10">Our Process</Pill>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.9] mb-8">
                  Scientific <br/> Precision.
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/80 font-light leading-relaxed max-w-md">
                   We apply a rigorous, scientific approach to B2B market research. By strictly separating data collection from synthesis, we eliminate bias and ensure every insight is verifiable, relevant, and actionable.
                </p>
              </div>

              {/* Decorative Element or Link at bottom */}
              <div className="mt-12 pt-12 border-t border-white/10">
                 <p className="text-sm font-medium text-white/60 uppercase tracking-widest">Methodology Framework</p>
              </div>
          </FadeIn>

          {/* Right Side - Grid of Cards */}
          <FadeInStagger className="grid grid-cols-1 gap-6 h-full">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group relative h-[250px] lg:h-auto rounded-[2.5rem] overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${step.image})` }}
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  
                  {/* Icon/Arrow Top Right */}
                  <div className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-20">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 relative z-10">
                   {/* Glass Background that appears on hover/always acts as container */}
                    <div className="bg-black/0 group-hover:bg-black/60 group-hover:backdrop-blur-xl rounded-[1.5rem] p-2 group-hover:p-6 transition-all duration-500">
                      <h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:mb-2 transition-all">{step.title}</h3>
                      <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 h-0 group-hover:h-auto overflow-hidden">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </FadeInStagger>

        </div>
      </div>
    </section>
  );
}
