"use client";

import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";

const steps = [
  {
    number: "01",
    title: "Discovery & Framing",
    description: "We align with your stakeholders to define the precise business questions and hypotheses that need validation."
  },
  {
    number: "02",
    title: "Targeted Recruitment",
    description: "Leveraging our proprietary network to identify and recruit niche B2B experts who hold the answers."
  },
  {
    number: "03",
    title: "Rigorous Data Collection",
    description: "Multi-modal data gathering through in-depth interviews, surveys, and observational studies."
  },
  {
    number: "04",
    title: "Synthesis & Strategy",
    description: "Transforming raw data into strategic narratives and actionable roadmaps for executive decision-making."
  }
];

export function Methodology() {
  return (
    <section id="methodology" className="py-24 bg-background text-foreground relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="md:w-1/3">
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
                Our <br/> Methodology
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A scientific approach to B2B market research, ensuring every insight is verifiable, relevant, and actionable.
              </p>
            </FadeIn>
          </div>

          <div className="md:w-2/3">
            <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {steps.map((step) => (
                <div key={step.number} className="group cursor-default">
                  <div className="flex items-baseline gap-4 mb-4 border-b border-border pb-4 group-hover:border-accent transition-colors duration-500">
                    <span className="text-sm font-mono text-accent">{step.number}</span>
                    <h3 className="text-xl font-medium">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </FadeInStagger>
          </div>

        </div>
      </div>
    </section>
  );
}
