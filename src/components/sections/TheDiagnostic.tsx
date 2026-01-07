"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Pill } from "@/components/ui/pill";
import { motion } from "framer-motion";

export function TheDiagnostic() {
  return (
    <section id="the-diagnostic" className="py-40 bg-background relative overflow-hidden w-full flex justify-center items-center">
      <div className="container px-4 md:px-6 w-full max-w-[95%]">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          
          <FadeIn className="max-w-xl">
            <Pill className="mb-8 font-sans">The Diagnostic</Pill>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-10 leading-[0.9] tracking-tight">
              Before execution, <br/> there is a <br/> diagnostic.
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground font-sans font-light leading-relaxed mb-12">
              We start by clarifying what decision needs to be made and what is at stake, before teams move to platforms, pilots, or hiring.
            </p>
            <div className="pl-10 border-l border-accent/30 py-2">
              <p className="font-serif text-3xl text-foreground/80 italic tracking-tight">
                This work stands on its own.
              </p>
            </div>
          </FadeIn>

          {/* Animating Visual - Refined Chart Style */}
          <FadeIn delay={0.2} className="relative w-full h-[500px] bg-secondary/30 rounded-[3rem] p-12 flex flex-col shadow-2xl overflow-hidden border border-white/5 group">
             <div className="absolute top-0 right-0 w-80 h-80 bg-accent/3 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
             
             <div className="flex justify-between items-start mb-16 z-10">
               <div>
                 <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-2 font-sans">Decision Clarity Index</h3>
                 <div className="flex items-baseline gap-3">
                   <span className="text-4xl font-serif font-bold text-white">High Stakes</span>
                 </div>
               </div>
               
               <div className="h-12 w-12 rounded-full bg-white/3 flex items-center justify-center border border-white/5 transition-colors group-hover:border-accent/20">
                 <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
               </div>
             </div>

             <div className="relative flex-grow w-full">
                {/* SVG Chart adapted from StatsGraph */}
                <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 400 200" preserveAspectRatio="none">
                   <defs>
                     <linearGradient id="diagGradient" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.15" />
                       <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                     </linearGradient>
                   </defs>

                   {/* Diagnostic Path */}
                   <motion.path
                     d="M 0,180 C 100,180 150,150 200,80 C 250,10 350,10 400,10"
                     fill="none"
                     stroke="currentColor"
                     className="text-accent/60"
                     strokeWidth="4"
                     strokeLinecap="round"
                     initial={{ pathLength: 0, opacity: 0 }}
                     whileInView={{ pathLength: 1, opacity: 1 }}
                     viewport={{ amount: 0.3, once: true }}
                     transition={{ duration: 3, ease: "anticipate" }}
                   />

                   <motion.path
                     d="M 0,180 C 100,180 150,150 200,80 C 250,10 350,10 400,10 L 400,200 L 0,200 Z"
                     fill="url(#diagGradient)"
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ delay: 1, duration: 1.5 }}
                   />
                </svg>
                
                <motion.div 
                  className="absolute left-[50%] top-[35%] -translate-x-1/2 bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-bold shadow-2xl flex items-center gap-3 font-sans"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  Diagnostic Decision
                </motion.div>
             </div>

             <div className="flex justify-between mt-12 text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] px-1 font-sans">
               <span>Identification</span>
               <span>Analysis</span>
               <span>Clarity</span>
               <span>Strategy</span>
             </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
