"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function OurRole() {
  return (
    <section id="our-role" className="relative py-32 bg-black w-full flex justify-center overflow-hidden border-b border-white/5">
      {/* Tech Grid Background (Dark) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container px-4 md:px-6 mx-auto max-w-5xl relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <FadeIn>
              <div className="p-8 md:p-12 border border-white/10 bg-white/[0.02] rounded-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-8 bg-white/10" />
                <p className="text-xl md:text-2xl font-sans font-light text-white/70 leading-relaxed tracking-tight mb-12">
                  We operate as an independent decision partner to executive teams navigating high-stakes AI choices.
                </p>
                <div className="flex items-center justify-between pt-8 border-t border-white/10">
                  <p className="font-serif text-lg md:text-xl text-white font-medium italic leading-relaxed">
                    Our role is to reduce decision risk before capital, reputation, or organisational momentum is committed.
                  </p>

                </div>
              </div>
            </FadeIn>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-white/10 pointer-events-none" />
          </div>

          <div className="order-1 lg:order-2">
            <FadeIn delay={0.2}>

              <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-medium text-white leading-relaxed tracking-tight">
                <span className="whitespace-nowrap">We do <span className="text-white/30">not</span> sell software.</span> <br/>
                <span className="whitespace-nowrap">We are <span className="text-white/30">not</span> an AI vendor.</span> <br/>
                <span className="whitespace-nowrap">We are <span className="text-white/30">not</span> an implementation partner.</span>
              </h2>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
