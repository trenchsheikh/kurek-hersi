"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Pill } from "@/components/ui/pill";
import { ShieldAlert } from "lucide-react";

export function OurRole() {
  return (
    <section id="our-role" className="py-40 bg-secondary/40 relative overflow-hidden w-full flex justify-center">
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto max-w-[95%]">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          <FadeIn>
            <Pill className="mb-8 font-sans">Our Role</Pill>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-12 leading-[0.9] tracking-tight">
              We are not vendors, <br/> implementers, <br/> or generalists.
            </h2>
            <div className="h-px w-24 bg-accent/40" />
          </FadeIn>

          <FadeIn delay={0.2} className="space-y-16">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light font-sans leading-tight text-foreground/80 tracking-tight">
              Our work sits between <span className="text-foreground font-normal border-b-2 border-accent/20">strategy consulting</span> and <span className="text-foreground font-normal border-b-2 border-accent/20">market research</span>, focused on senior-level insight and decision clarity.
            </p>
            
            <div className="bg-background/20 backdrop-blur-sm rounded-[2.5rem] p-10 md:p-12 border border-white/5 shadow-2xl flex items-start gap-8 group hover:border-accent/10 transition-all duration-500">
              <div className="h-14 w-14 rounded-full bg-accent/5 flex items-center justify-center text-accent shrink-0 border border-accent/10">
                <ShieldAlert className="h-7 w-7" />
              </div>
              <div className="space-y-3">
                <p className="text-2xl font-serif font-medium text-foreground">Independence and focus are deliberate.</p>
                <p className="text-muted-foreground font-sans font-light text-lg leading-relaxed">
                  Our neutrality is our greatest asset in providing unvarnished truth, unincumbered by vendor agendas or implementation bias.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
