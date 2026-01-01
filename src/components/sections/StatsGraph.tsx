"use client";

import { motion } from "framer-motion";
import { Pill } from "@/components/ui/pill";
import { FadeIn } from "@/components/ui/fade-in";

export function StatsGraph() {
  return (
    <section id="analytics" className="py-32 bg-background relative overflow-hidden w-full flex justify-center items-center">
      <div className="container px-4 md:px-6 w-full max-w-[95%]">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <FadeIn className="max-w-xl">
             <Pill className="mb-6">Analytics</Pill>
             <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground mb-8 leading-[0.9]">
               Data That <br/> Drives Growth.
             </h2>
             <p className="text-xl text-muted-foreground leading-relaxed mb-6">
               In a rapidly shifting B2B landscape, static reports aren't enough. We provide dynamic, real-time intelligence that evolves with your market.
             </p>
             <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                Our proprietary tracking models visualize emerging trends *before* they become mainstream, giving you the first-mover advantage.
             </p>
          </FadeIn>

          {/* Animating Chart */}
          <FadeIn delay={0.2} className="relative w-full h-[400px] bg-muted/30 rounded-[2.5rem] border border-black/5 p-8 flex items-end justify-center overflow-hidden">
             
             {/* Chart Grid Lines */}
             <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-20 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-full h-px bg-black border-t border-dashed border-black/50" />
                ))}
             </div>

             {/* SVG Container */}
             <div className="absolute inset-0 p-8">
               <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <defs>
                   <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                     <stop offset="0%" stopColor="#1f514c" />
                     <stop offset="100%" stopColor="#4ade80" />
                   </linearGradient>
                   <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(31, 81, 76, 0.3)" />
                   </filter>
                 </defs>
                 
                 {/* Animated Path */}
                 <motion.path
                   d="M 0,80 C 20,70 40,85 50,50 C 60,15 80,30 100,10"
                   fill="none"
                   stroke="url(#lineGradient)"
                   strokeWidth="3"
                   strokeLinecap="round"
                   filter="url(#shadow)"
                   initial={{ pathLength: 0, opacity: 0 }}
                   whileInView={{ pathLength: 1, opacity: 1 }}
                   viewport={{ amount: 0.3, once: true }}
                   transition={{ duration: 2.5, ease: "easeInOut" }}
                 />
                 
                 {/* End Point / Dot */}
                 <motion.circle
                   cx="100" cy="10" r="3"
                   fill="#1f514c"
                   initial={{ scale: 0, opacity: 0 }}
                   whileInView={{ scale: 1, opacity: 1 }}
                   viewport={{ amount: 0.3, once: true }}
                   transition={{ delay: 2.5, duration: 0.5, type: "spring" }}
                 />
               </svg>
             </div>

             {/* Dynamic Tooltip/Label appearing at the end */}
             <motion.div 
               className="absolute top-12 right-12 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-black/5"
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ amount: 0.3, once: true }}
               transition={{ delay: 2, duration: 0.5 }}
             >
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-0.5">Projected</span>
                <span className="text-xl font-sans font-bold text-black">+142%</span>
             </motion.div>

          </FadeIn>

        </div>
      </div>
    </section>
  );
}
