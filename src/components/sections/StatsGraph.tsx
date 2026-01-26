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
             <h2 className="font-serif text-3xl md:text-4xl lg:text-6xl text-foreground mb-8 leading-[0.9]">
               Data That <br/> Drives Growth.
             </h2>
             <p className="text-xl text-muted-foreground leading-relaxed mb-6">
               In a rapidly shifting B2B landscape, static reports aren't enough. We provide dynamic, real-time intelligence that evolves with your market.
             </p>
             <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                Our proprietary tracking models visualize emerging trends *before* they become mainstream, giving you the first-mover advantage.
             </p>
          </FadeIn>

          {/* Animating Chart - Professional Dashboard Style - Dark Theme */}
          <FadeIn delay={0.2} className="relative w-full h-[450px] bg-[oklch(0.20_0.05_150)] rounded-[2.5rem] p-8 flex flex-col shadow-2xl overflow-hidden border border-white/10">
             
             {/* Chart Data Header */}
             <div className="flex justify-between items-start mb-8 z-10">
               <div>
                 <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">Market Projection</h3>
                 <div className="flex items-baseline gap-2">
                   <span className="text-2xl font-serif font-bold text-white">24.8%</span>
                   <span className="text-sm font-sans font-bold text-emerald-400">+12% vs Baseline</span>
                 </div>
               </div>
               
               {/* Legend */}
               <div className="flex gap-4">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-white/20" />
                   <span className="text-xs font-bold text-white/40 uppercase tracking-wider">Market Avg</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-white" />
                   <span className="text-xs font-bold text-white uppercase tracking-wider">Optimized</span>
                 </div>
               </div>
             </div>

             {/* Chart Area */}
             <div className="relative flex-grow w-full">
                
                {/* Grid Lines */}
                <div className="absolute inset-x-0 inset-y-0 flex flex-col justify-between">
                   {[...Array(5)].map((_, i) => (
                     <div key={i} className="w-full h-px bg-white/5" />
                   ))}
                </div>

                {/* SVG Chart */}
                <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 400 200" preserveAspectRatio="none">
                   
                   <defs>
                     <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                       <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                     </linearGradient>
                   </defs>

                   {/* Baseline Path (White, Dashed, Slow Growth) */}
                   <motion.path
                     d="M 0,180 C 100,170 200,160 400,140"
                     fill="none"
                     stroke="#fff"
                     strokeOpacity="0.2"
                     strokeWidth="2"
                     strokeDasharray="5 5"
                     initial={{ pathLength: 0, opacity: 0 }}
                     whileInView={{ pathLength: 1, opacity: 1 }}
                     viewport={{ amount: 0.3, once: true }}
                     transition={{ duration: 2, ease: "linear" }}
                   />
                
                   {/* Optimized Path (White, Curve, Fast Growth) */}
                   <motion.path
                     d="M 0,180 C 80,180 150,150 200,100 C 250,50 320,30 400,10"
                     fill="none"
                     stroke="#fff"
                     strokeWidth="3"
                     strokeLinecap="round"
                     initial={{ pathLength: 0, opacity: 0 }}
                     whileInView={{ pathLength: 1, opacity: 1 }}
                     viewport={{ amount: 0.3, once: true }}
                     transition={{ duration: 2.5, ease: "anticipate" }}
                   />

                   {/* Area Fill for Optimized Path - Fade In */}
                   <motion.path
                     d="M 0,180 C 80,180 150,150 200,100 C 250,50 320,30 400,10 L 400,200 L 0,200 Z"
                     fill="url(#areaGradient)"
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ amount: 0.3, once: true }}
                     transition={{ delay: 1, duration: 1 }}
                   />

                   {/* Data Points */}
                    <motion.circle cx="200" cy="100" r="4" fill="#000" stroke="#fff" strokeWidth="2" 
                      initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.5 }} />
                    <motion.circle cx="400" cy="10" r="5" fill="#fff" 
                      initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 2.5 }} />

                </svg>
                
                {/* Floating Labels */}
                <motion.div 
                  className="absolute left-[50%] top-[35%] -translate-x-1/2 bg-white text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                >
                  Inflection Point
                </motion.div>

             </div>

             {/* X-Axis Labels */}
             <div className="flex justify-between mt-4 text-xs font-bold text-white/30 uppercase tracking-widest px-1">
               <span>Q1 2025</span>
               <span>Q2</span>
               <span>Q3</span>
               <span>Q4</span>
               <span>2026</span>
             </div>

          </FadeIn>

        </div>
      </div>
    </section>
  );
}
