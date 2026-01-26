"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { ScanSearch, Crosshair, CheckCircle, Shield } from "lucide-react";

const steps = [
  {
    icon: ScanSearch,
    tags: ["Phase 1", "Week 1"],
    title: "Diagnostic & Discovery",
    mainText: "We begin by isolating the exact decision that needs to be made and removing untested assumptions shaping it. Leadership beliefs are surfaced, scope is locked, and non-negotiable market truths are defined before any validation begins.\n\nThis phase ensures the work answers the real decision, not internal narratives or politics.",
    stats: [
      { value: "Clear starting boundaries", label: "Focus is set before any market work begins." },
      { value: "Bias acknowledged early", label: "Assumptions are surfaced, not embedded." }
    ],
    color: "bg-white",
    textColor: "text-black"
  },
  {
    icon: Crosshair,
    tags: ["Phase 2", "Week 1-2"],
    title: "Buyer Identification & Sourcing",
    mainText: "We identify and recruit the exact buyers who materially influence the decision being tested.\n\nThis phase is not about reach or volume.\nIt is about precision.\n\nParticipants are selected based on role relevance, budget authority, and proximity to the decision. Every profile is verified before inclusion to ensure the evidence reflects real buying power, not theoretical interest.",
    stats: [
      { value: "100% Manually Verified", label: "Every participant is individually reviewed, cross-referenced, and validated for role accuracy and decision authority." },
      { value: "Independently Recruited", label: "Participation is not mediated by panels, vendors, or platforms." }
    ],
    color: "bg-[#F5F5F7]", // Slightly off-white for distinction
    textColor: "text-black"
  },
  {
    icon: CheckCircle,
    tags: ["Phase 3", "Week 2-3"],
    title: "Market Validation",
    mainText: "We engage verified senior buyers in structured 1:1 conversations to understand how buying actually happens in practice.\n\nThis phase is not about opinions or consensus.\nIt is about revealing real market behaviour.\n\nBuyers are explored across alignment and divergence to surface what holds consistently under real constraints. Inconsistency is treated as signal, not error, so the market is reflected accurately rather than simplified for convenience.",
    stats: [
      { value: "Consistency tested", label: "Signals assessed across buyers" },
      { value: "Inconsistency analysed", label: "Differences examined for meaning" }
    ],
    color: "bg-white",
    textColor: "text-black"
  },
  {
    icon: Shield,
    tags: ["Phase 4", "Week 3-4"],
    title: "Synthesis & Direction",
    mainText: "We synthesise findings across buyers and segments to translate market truth into clear direction.\n\nThis phase is not about generating options or presenting possibilities.\nIt is about resolving tension and narrowing focus.\n\nSignals are weighed for relevance, risk, and confidence. Where trade-offs exist, they are made explicit. The outcome is not a collection of insights, but a clear view of what to pursue, what to deprioritise, and what to ignore.",
    stats: [
      { value: "Trade-offs made explicit", label: "Competing paths are evaluated, not blended." },
      { value: "Clear direction delivered", label: "Focus replaces ambiguity" }
    ],
    color: "bg-[#F5F5F7]",
    textColor: "text-black"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative w-full bg-black pt-20 md:pt-32 pb-16">
       <div className="container px-4 md:px-6 w-full max-w-6xl mx-auto mb-16 md:mb-32">
          <div className="flex flex-col items-center text-center">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-white">
                 PROCESS
              </h2>
            </FadeIn>
          </div>
        </div>

      <div className="w-full relative px-4">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="relative md:sticky md:top-[10vh] md:h-[90vh] flex justify-center w-full mb-8 md:mb-0"
          >
            <div 
              className={cn(
                "relative w-full max-w-7xl h-fit min-h-[400px] md:min-h-[500px] p-6 md:p-10 rounded-[2rem] shadow-2xl border border-white/10 flex flex-col justify-between",
                step.color
              )}
            >
              {/* Header Section */}
              <div className="w-full mb-8 border-b border-black/10 pb-6">
                <div className="flex gap-6 mb-4">
                  {step.tags.map((tag, i) => (
                     <span key={i} className="font-serif text-lg text-black/60 italic tracking-tight">
                       {tag}
                     </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h3 className={cn("font-serif text-3xl md:text-7xl tracking-tight leading-none", step.textColor)}>
                    {step.title}
                  </h3>
                  <step.icon className="w-12 h-12 md:w-16 md:h-16 text-black/90 stroke-1" />
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
                
                <div className="lg:col-span-7 bg-transparent flex flex-col justify-start pt-0 md:pt-4">
                   <p className={cn("text-lg md:text-2xl font-medium leading-relaxed tracking-tight whitespace-pre-line", step.textColor)}>
                    {step.mainText}
                   </p>
                </div>

                {/* Stats Column (Right) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  {step.stats.map((stat, i) => (
                    <div key={i} className="flex-1 bg-white border border-black/5 p-8 rounded-xl shadow-sm flex flex-col justify-center">
                       <p className={cn(
                         "font-serif text-black mb-2 tracking-tight",
                         stat.value.length > 15 ? "text-xl md:text-3xl leading-tight" : "text-2xl md:text-5xl"
                       )}>
                         {stat.value}
                       </p>
                       <p className="font-serif text-lg text-black/60 italic leading-relaxed">
                         {stat.label}
                       </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
      
      {/* Spacer removed */}
    </section>
  );
}
