"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";

export function TheDiagnostic() {
  return (
    <section id="the-diagnostic" className="relative py-32 bg-white w-full flex justify-center overflow-hidden border-b border-black/5">
      {/* Tech Grid Background (Light) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />

      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-5/12">
            <FadeIn>
              <div className="inline-flex items-center gap-2 mb-8">
                <div className="flex gap-1">
                  <div className="h-1 w-1 bg-black/40" />
                  <div className="h-1 w-1 bg-black/20" />
                  <div className="h-1 w-1 bg-black/10" />
                </div>
                <p className="text-[10px] font-medium tracking-[0.4em] text-black/40 uppercase font-mono">ENCRYPTED DIAGNOSTIC</p>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-black leading-[1.05] tracking-tight">
                Before execution, <br className="hidden md:block"/> 
                <span className="text-black/30 italic font-light">there is a diagnostic decision.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="w-full lg:w-7/12 relative">
            <FadeIn delay={0.2}>
              <div className="p-8 md:p-16 border border-black/5 bg-black/[0.01] rounded-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-black/10 pointer-events-none" />
                <div className="absolute -left-1 top-1/4 w-2 h-16 bg-black/5" />
                
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-black/20 uppercase tracking-widest">
                    [SYSTEM_CHECK: CLARITY_V4]
                  </span>
                  <div className="h-2 w-2 rounded-full bg-black/10" />
                </div>

                <p className="text-xl md:text-3xl font-sans font-light text-black/70 leading-relaxed tracking-tight mb-16">
                  We start by clarifying what <span className="text-black font-medium underline underline-offset-8 decoration-black/10">decision needs to be made</span> and what is at stake, before teams move to platforms, pilots, or hiring.
                </p>

                <div className="flex items-center justify-between pt-10 border-t border-black/5">
                  <p className="font-serif text-xl md:text-2xl text-black font-medium">
                    This work stands on its own.
                  </p>
                  <div className="text-[10px] font-mono text-black/40 bg-black/5 px-2 py-1 rounded">
                    PROTOCOL_OMNI
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Technical Footer Detail */}
        <div className="mt-24 flex items-center justify-between border-t border-black/5 pt-8">
           <div className="flex gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-1 w-8 bg-black/5 overflow-hidden">
                  <motion.div 
                    className="h-full bg-black/20"
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ delay: 0.5 + (i * 0.2), duration: 1 }}
                  />
                </div>
              ))}
           </div>
           <p className="text-[9px] font-mono text-black/20 tracking-widest uppercase">
             Decision Analytics Protocol // v.4.0
           </p>
        </div>
      </div>
    </section>
  );
}
