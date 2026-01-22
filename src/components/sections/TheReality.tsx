"use client";

import { FadeIn, FadeInStagger, FadeInChild } from "@/components/ui/fade-in";

export function TheRealitySection() {
  const points = [
    { id: "100%", label: "Manually verified buyers", text: "Every participant is reviewed, cross-referenced, and validated for role and authority." },
    { id: "50+", label: "Research engagements", text: "Across high-stakes GTM, pricing, and positioning work." },
    { id: "2,000+", label: "Decision-maker responses analysed", text: "Across high stakes commercial context." },
    { id: "21–25", label: "Days to decision-grade clarity", text: "Fast enough to matter.\nDeliberate enough to trust." }
  ];

  return (
    <section id="the-reality" className="relative py-20 md:py-32 bg-white w-full flex justify-center border-b border-black/5">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Header & Context */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-32 lg:pt-12">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-3xl lg:text-4xl text-black leading-tight tracking-tight">
                The cost of being <span className="text-black/30 font-light">wrong </span>{" "}compounds quietly.
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="flex flex-col gap-6 text-xl md:text-2xl text-black/60 font-light leading-relaxed max-w-xl">
                <p>
                  Early assumptions harden into roadmaps, budgets, and narratives. 
                  Without independent buyer truth, teams commit long before reality intervenes.
                </p>
                <p>
                  Our work exists to reduce that risk before it becomes expensive.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="pt-4">
                 <button 
                   onClick={() => {
                     if (window.Calendly) {
                       window.Calendly.initPopupWidget({
                         url: 'https://calendly.com/jibreal-kurekhersi/30min'
                       });
                     }
                   }}
                   className="bg-black text-white px-8 py-4 rounded-none font-medium tracking-wide hover:bg-black/90 transition-colors whitespace-nowrap"
                 >
                   Contact us
                 </button>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Stats Grid */}
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {points.map((point, i) => (
              <FadeInChild key={i}>
                <div className="flex flex-col gap-4">
                  <span className="text-5xl md:text-7xl font-bold text-black tracking-tighter font-serif">
                    {point.id}
                  </span>
                  <div className="flex flex-col gap-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-black/50 text-[10px] uppercase tracking-widest w-fit font-medium">
                      {point.label}
                    </span>
                    <p className="text-lg text-black/80 font-medium leading-snug">
                      {point.text}
                    </p>
                  </div>
                </div>
              </FadeInChild>
            ))}
             {/* Empty slot or decorative filler if needed to balance 2x2, but 3 items flows fine in grid */}
          </FadeInStagger>

        </div>
      </div>
    </section>
  );
}
