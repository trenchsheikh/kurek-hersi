"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-10 bg-background overflow-hidden w-full">
      
      <div className="container px-4 md:px-6 w-full max-w-[95%]">
        <div className="grid lg:grid-cols-2 gap-6 min-h-[85vh]">
          
          {/* Left Card - Text Content */}
          <FadeIn className="bg-primary text-primary-foreground rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden group">
             {/* Abstract Background Decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             
             <div>
               <div className="flex items-center gap-2 mb-8">
                 <div className="flex -space-x-2">
                   {[1,2,3].map(i => (
                     <div key={i} className="h-8 w-8 rounded-full bg-accent/20 border border-primary flex items-center justify-center text-[10px] font-bold">
                       U{i}
                     </div>
                   ))}
                 </div>
                 <div className="flex gap-0.5 text-accent">
                   {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                 </div>
                 <span className="text-sm font-medium opacity-80 pl-2">Trusted by 500+ firms</span>
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

             <div className="flex flex-wrap gap-4">
               <Button 
                size="lg" 
                className="h-14 px-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all font-semibold text-lg" 
                asChild
               >
                 <Link href="#contact">
                   Start Your Project
                 </Link>
               </Button>
               <Button 
                variant="outline"
                size="lg" 
                className="h-14 px-8 rounded-full bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-all font-medium text-lg" 
                asChild
               >
                 <Link href="#services">
                   View Case Studies
                 </Link>
               </Button>
             </div>
          </FadeIn>

          {/* Right Card - Visual/Image */}
          <FadeIn delay={0.2} className="relative rounded-[2.5rem] overflow-hidden bg-muted min-h-[400px] lg:min-h-auto group">
             {/* Placeholder for high-quality corporate image - using a gradient pattern for now if image tool not available/requested explicitly yet, 
                 but mimicking the requested 'image' feel with a sophisticated abstract layout */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
             
             <div className="absolute bottom-8 left-8 right-8">
               <div className="bg-white/90 backdrop-blur-md p-6 rounded-[1.5rem] shadow-xl">
                 <div className="flex justify-between items-end">
                   <div>
                     <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Latest Report</p>
                     <p className="text-xl font-serif font-bold text-foreground">Q4 Market Analysis: Tech Sector</p>
                   </div>
                   <div className="h-10 w-10 rounded-full bg-foreground flex items-center justify-center text-background">
                     <ArrowRight className="h-5 w-5 -rotate-45" />
                   </div>
                 </div>
               </div>
             </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
