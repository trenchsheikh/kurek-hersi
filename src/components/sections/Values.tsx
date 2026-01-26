"use client";

import { FadeIn, FadeInStagger, FadeInChild } from "@/components/ui/fade-in";
import { Plus } from "lucide-react";

const values = [
  {
    title: "Integrity",
    description: "We uphold the highest standards of integrity, ensuring confidentiality and trust in all our interactions.",
    highlight: false
  },
  {
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service, from initial engagement to candidate placement.",
    highlight: true
  },
  {
    title: "Collaboration",
    description: "We believe in the power of collaboration, working closely with our clients and candidates to achieve shared success.",
    highlight: false
  }
];

export function Values() {
  return (
    <section className="py-32 bg-white w-full flex justify-center items-center border-b border-black/5">
      <div className="container px-4 md:px-6 w-full max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_3fr] gap-12 lg:gap-24 items-start mb-24">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.4em] text-black/40 uppercase mt-2">
               Our Values
            </p>
            <p className="text-sm text-black/40 mt-6 max-w-[150px] font-sans font-medium uppercase tracking-widest leading-relaxed">
              Our core values guide everything we do.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {values.map((value, i) => (
              <FadeInChild key={i}>
                <div className={`p-10 lg:p-12 h-full flex flex-col justify-start border border-black/5 -ml-[1px] -mt-[1px] transition-all duration-500 ${value.highlight ? 'bg-black/5' : 'bg-white'}`}>
                  <div className="mb-12">
                    <Plus className="h-5 w-5 text-black/20" />
                  </div>
                  <h3 className="text-2xl font-sans font-bold mb-6 text-black">{value.title}</h3>
                  <p className="text-black/40 text-sm font-sans font-medium leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeInChild>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
}
