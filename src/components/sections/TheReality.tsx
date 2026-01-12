"use client";

import { FadeIn, FadeInStagger, FadeInChild } from "@/components/ui/fade-in";

export function TheRealitySection() {
  const points = [
    { id: "01", text: "Vendor narratives conflict." },
    { id: "02", text: "Internal alignment is assumed." },
    { id: "03", text: "The cost of being wrong is higher than it appears." }
  ];

  return (
    <section id="the-reality" className="relative py-40 bg-white w-full flex justify-center overflow-hidden border-b border-black/5">
      {/* Centered Tech Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-black/10 via-black/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container px-4 md:px-6 mx-auto max-w-5xl relative z-10 text-center">
        <FadeIn>

          <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-black leading-[1.1] tracking-tight mb-24 max-w-4xl mx-auto">
            Most teams are deciding <br/> 
            <span className="text-black/30 italic font-light">under pressure, not clarity.</span>
          </h3>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 border-y border-black/5 mb-24">
          {points.map((point, i) => (
            <FadeInChild key={i}>
              <div className="group relative p-10 bg-white hover:bg-black transition-all duration-700 h-full">
                <div className="flex flex-col items-center justify-center gap-6 h-full">

                  <p className="text-xl md:text-2xl font-sans font-light text-black group-hover:text-white transition-colors tracking-tight leading-snug">
                    {point.text}
                  </p>
                </div>
                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-4 h-4 border-b border-r border-white/40" />
                </div>
              </div>
            </FadeInChild>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.4}>
          <div className="inline-flex flex-col items-center gap-4">
            <div className="h-12 w-px bg-black/20 animate-bounce" />
            <p className="font-serif text-3xl md:text-4xl text-black font-medium tracking-tight">
              This is where mistakes compound.
            </p>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
