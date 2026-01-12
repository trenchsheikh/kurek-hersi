"use client";

import { FadeIn } from "@/components/ui/fade-in";

const steps = [
  {
    title: "Initial Consultation",
    description: "We start with a detailed discussion to understand your specific requirements and goals."
  },
  {
    title: "Customized Strategies",
    description: "We develop tailored strategies that align with your objectives."
  },
  {
    title: "Expert Execution",
    description: "We execute the strategy with precision and professionalism."
  },
  {
    title: "Continuous Support",
    description: "We provide ongoing support to ensure long-term success and satisfaction."
  }
];

export function Approach() {
  return (
    <section className="py-32 bg-white w-full flex justify-center items-center">
      <div className="container px-4 md:px-6 w-full max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-start">
          
          <FadeIn className="space-y-12">
            <div>
              <p className="text-[10px] font-bold tracking-[0.4em] text-black/40 uppercase mb-8">
                 // Our Approach
              </p>
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-black/5 grayscale">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
                  alt="Architecture" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </FadeIn>

          <div className="space-y-12">
            <FadeIn>
              <p className="text-sm text-black/60 font-sans font-medium leading-relaxed max-w-lg mb-12">
                Our approach is centered around understanding your unique needs and delivering tailored solutions. We combine our industry expertise with a personalized touch to ensure the best outcomes for both clients and candidates. Our comprehensive process includes:
              </p>
            </FadeIn>

            <div className="space-y-0">
              {steps.map((step, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="py-8 border-t border-black/5 flex flex-col md:flex-row gap-6 md:gap-12">
                    <h4 className="text-base font-sans font-bold text-black min-w-[150px]">{step.title}</h4>
                    <p className="text-sm text-black/40 font-sans font-medium leading-relaxed flex-1">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
