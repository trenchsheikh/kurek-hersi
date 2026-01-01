"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Building2, Globe, LineChart } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { useScroll, useTransform, motion } from "framer-motion";

export function Hero() {
  const { scrollY } = useScroll();
  // Start animation almost immediately (10px) so user feels it "straight away", complete by 400px
  const gap = useTransform(scrollY, [10, 400], ["1.5rem", "0rem"]); 
  const borderRadius = useTransform(scrollY, [10, 400], ["2.5rem", "0rem"]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-10 overflow-hidden w-full">
      
      <div className="container px-4 md:px-6 w-full max-w-[95%]">
        <motion.div 
          style={{ gap }}
          className="grid lg:grid-cols-2 min-h-[85vh]"
        >
          
          {/* Left Card - Text Content */}
          <FadeIn 
            style={{ borderTopRightRadius: borderRadius, borderBottomRightRadius: borderRadius }}
            className="bg-[oklch(0.20_0.05_150)] text-white rounded-l-[2.5rem] rounded-r-[2.5rem] lg:rounded-r-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden group shadow-2xl"
          >
             {/* Abstract Background Decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             
             <div>
               <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-2 pr-6 mb-10 w-fit hover:bg-white/10 transition-colors duration-300">
                 <div className="flex -space-x-3">
                   <div className="h-10 w-10 rounded-full bg-[oklch(0.25_0.1_150)] border-2 border-[oklch(0.20_0.05_150)] flex items-center justify-center text-white/80 z-30">
                     <Building2 className="h-4 w-4" />
                   </div>
                   <div className="h-10 w-10 rounded-full bg-[oklch(0.30_0.1_150)] border-2 border-[oklch(0.20_0.05_150)] flex items-center justify-center text-white/80 z-20">
                     <LineChart className="h-4 w-4" />
                   </div>
                   <div className="h-10 w-10 rounded-full bg-[oklch(0.35_0.1_150)] border-2 border-[oklch(0.20_0.05_150)] flex items-center justify-center text-white/80 z-10">
                     <Globe className="h-4 w-4" />
                   </div>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-xs font-medium text-white/60 uppercase tracking-widest leading-none mb-1">Trusted By</span>
                   <span className="text-sm font-sans font-medium text-white tracking-wide">500+ Global Firms</span>
                 </div>
               </div>

               <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] mb-8">
                 Expert <br/>
                 <span className="text-accent italic">Consulting</span> <br/>
                 That Drives <br/>
                 Real Growth.
               </h1>

               <p className="text-lg md:text-xl text-primary-foreground/80 max-w-md font-light leading-relaxed mb-10">
                 Kurek Hersi delivers the strategic intelligence required to navigate complex B2B markets with absolute confidence.
               </p>
             </div>

             <div className="flex flex-wrap gap-4 mt-2">
               <Button 
                size="default" 
                className="h-12 pl-6 pr-1.5 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 flex items-center gap-3 group/btn" 
                asChild
               >
                 <Link href="#contact">
                   Schedule Discovery Call
                   <div className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-500 group-hover/btn:rotate-[-45deg]">
                     <ArrowRight className="h-4 w-4" />
                   </div>
                 </Link>
               </Button>
               
               <Button 
                variant="ghost" 
                size="default" 
                className="h-12 px-8 rounded-full bg-black/20 border border-white/10 text-white hover:bg-black/30 hover:text-white transition-all duration-300 font-medium text-sm flex items-center gap-2 backdrop-blur-md hover:scale-105" 
                asChild
               >
                 <Link href="#services">
                   <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                   Explore Intelligence
                 </Link>
               </Button>
             </div>
          </FadeIn>

          {/* Right Card - Visual/Image */}
          <FadeIn delay={0.2} 
            style={{ borderTopLeftRadius: borderRadius, borderBottomLeftRadius: borderRadius }}
            className="relative rounded-r-[2.5rem] rounded-l-[2.5rem] lg:rounded-l-[2.5rem] overflow-hidden bg-muted min-h-[400px] lg:min-h-auto group"
          >
             {/* Restored Corporate Image Background */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
             
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-[1.5rem] shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 group/card">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm font-medium text-black/60 uppercase tracking-wider mb-1">Strategic Insight</p>
                      <p className="text-xl font-serif font-bold text-black">2025 Market Outlook</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-white transition-transform duration-500 group-hover/card:rotate-[-45deg]">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
          </FadeIn>

        </motion.div>
      </div>
    </section>
  );
}
