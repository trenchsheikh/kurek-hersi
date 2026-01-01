"use client";

import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { Pill } from "@/components/ui/pill";
import { ArrowUpRight } from "lucide-react";

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
  return (
    <section id="methodology" className="min-h-screen py-32 bg-background relative overflow-hidden w-full flex flex-col justify-center">
      <div className="container px-4 md:px-6 w-full max-w-[95%]">
        <div className="flex flex-col gap-16">
          
          <div className="max-w-2xl">
            <FadeIn>
              <Pill className="mb-6">Our Process</Pill>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground mb-6 leading-[0.9]">
                Scientific <br/> Precision.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                A rigorous approach to B2B market research, ensuring every insight is verifiable, relevant, and actionable.
              </p>
            </FadeIn>
          </div>

          <FadeInStagger className="grid md:grid-cols-2 gap-6 w-full">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group relative h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${step.image})` }}
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  
                  {/* Icon/Arrow Top Right */}
                  <div className="absolute top-8 right-8 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <ArrowUpRight className="h-6 w-6" />
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-serif font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/80 text-lg font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {step.description}
                    </p>
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
