"use client";

import { FadeIn, FadeInStagger, FadeInChild } from "@/components/ui/fade-in";

export function FitSection() {
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
    <section id="fit" className="relative py-40 bg-white w-full flex justify-center overflow-hidden border-b border-black/5">
      {/* Tech Grid Background (Light) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container px-4 md:px-6 mx-auto max-w-5xl relative z-10">
        <FadeIn className="text-center mb-24">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="text-[10px] font-mono font-bold text-black/20">[FILTER_LOG: CRITERIA]</span>
            <div className="h-px w-8 bg-black/10" />
            <p className="text-[10px] font-medium tracking-[0.4em] text-black/40 uppercase font-mono">ALIGNMENT CHECK</p>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-black leading-tight tracking-tight">
            Fit
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-px bg-black/5 overflow-hidden border border-black/5">
          {/* Positive Alignment */}
          <div className="bg-white p-12 lg:p-16 relative group">
            <div className="mb-12 flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-black/40 uppercase tracking-widest">
                // This work is typically relevant when:
              </span>
              <div className="h-2 w-2 rounded-full bg-black/10" />
            </div>
            
            <FadeInStagger className="space-y-8">
              {relevantPoints.map((point, i) => (
                <FadeInChild key={i} className="flex items-start gap-4">
                  <div className="mt-2 h-1.5 w-1.5 bg-black shrink-0" />
                  <p className="text-xl md:text-2xl font-sans font-light text-black/80 leading-snug tracking-tight">
                    {point}
                  </p>
                </FadeInChild>
              ))}
            </FadeInStagger>
            
            {/* Technical Detail */}
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-[9px] font-mono text-black/20">TARGET_PROFILE_MATCH</div>
            </div>
          </div>

          {/* Negative Alignment */}
          <div className="bg-black/[0.01] p-12 lg:p-16 relative group">
             <div className="mb-12 flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-black/20 uppercase tracking-widest">
                // It is not relevant when:
              </span>
              <div className="h-2 w-2 border border-black/10 rounded-full" />
            </div>

            <FadeInStagger className="space-y-8 opacity-40">
              {notRelevantPoints.map((point, i) => (
                <FadeInChild key={i} className="flex items-start gap-4">
                  <div className="mt-2 h-px w-4 bg-black/20 shrink-0" />
                  <p className="text-xl md:text-2xl font-sans font-light text-black/60 leading-snug tracking-tight">
                    {point}
                  </p>
                </FadeInChild>
              ))}
            </FadeInStagger>

             {/* Technical Detail */}
             <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-[9px] font-mono text-black/20">EXCLUSION_THRESHOLD_HIT</div>
            </div>
          </div>
        </div>

        {/* Technical Summary Footer */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between border-t border-black/5 pt-8 text-center md:text-left gap-6">
           <p className="text-[10px] font-mono text-black/30 tracking-[0.2em] uppercase">
             Strategic Pre-Qualification Protocol // 2024.1
           </p>
           <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className={`h-1 w-1 ${i <= 3 ? 'bg-black/20' : 'bg-black/5'}`} />
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
