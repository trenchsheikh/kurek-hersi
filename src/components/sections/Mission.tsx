"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function Mission() {
  return (
    <section className="py-32 bg-black text-white w-full flex justify-center items-center overflow-hidden">
      <div className="container px-4 md:px-6 w-full max-w-6xl relative">
        <div className="grid lg:grid-cols-[1fr_3fr] gap-12 lg:gap-24 items-start">
          
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase mt-2">
               // Our Mission
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold leading-[1.1] tracking-tighter">
              Our mission is to drive <span className="text-white/40 italic">strategic growth</span> and success through <span className="text-white">expert governance</span> and advisory services, ensuring both our clients and partners achieve their full potential.
            </h2>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
