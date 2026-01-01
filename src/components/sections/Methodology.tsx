"use client";

import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { Pill } from "@/components/ui/pill";

const steps = [
  {
    number: "01",
    title: "Discovery & Framing",
    description: "We align with your stakeholders to define the precise business questions and hypotheses."
  },
  {
    number: "02",
    title: "Targeted Recruitment",
    description: "Leveraging our proprietary network to identify and recruit niche B2B experts who hold the answers."
  },
  {
    number: "03",
    title: "Rigorous Collection",
    description: "Multi-modal data gathering through in-depth interviews, surveys, and observational studies."
  },
  {
    number: "04",
    title: "Synthesis & Strategy",
    description: "Transforming raw data into strategic narratives and actionable roadmaps for decision-making."
  }
];

export function Methodology() {
  return (
    <section id="methodology" className="min-h-screen py-24 bg-background relative overflow-hidden w-full flex flex-col justify-center">
      <div className="container px-4 md:px-6 w-full max-w-[95%]">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/3 sticky top-32">
            <FadeIn>
              <Pill className="mb-6">Process</Pill>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[0.9]">
                Our <br/> Methodology
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A scientific approach to B2B market research, ensuring every insight is verifiable, relevant, and actionable.
              </p>
              
              <div className="p-6 bg-muted rounded-[1.5rem] border border-black/5">
                <h4 className="font-serif text-xl mb-2">Why it works</h4>
                <p className="text-sm text-muted-foreground">
                  By strictly separating data collection from synthesis, we eliminate bias and ensure pure, objective insights.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="lg:w-2/3">
            <FadeInStagger className="space-y-4">
              {steps.map((step) => (
                <div key={step.number} className="group p-8 rounded-[2rem] bg-secondary/20 hover:bg-secondary/50 border border-transparent hover:border-black/5 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="h-12 w-12 shrink-0 rounded-full bg-white flex items-center justify-center text-sm font-bold border border-black/5 shadow-sm text-primary">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-medium mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </FadeInStagger>
          </div>

        </div>
      </div>
    </section>
  );
}
