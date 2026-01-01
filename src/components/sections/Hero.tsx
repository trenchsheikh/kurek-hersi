"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background text-foreground">
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-secondary/40 via-background to-background" />
      
      <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-10">
        
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2" />
            The New Standard in B2B Intelligence
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="max-w-5xl">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight leading-[0.9] text-primary">
            Precision <span className="italic text-muted-foreground">in</span> Every <br className="hidden md:block" />
            Strategic Decision.
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Kurek Hersi provides the definitive data that Fortune 500 companies rely on to navigate complex market landscapes.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-4">
          <Button 
            size="lg" 
            className="h-14 px-10 text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105" 
            asChild
          >
            <Link href="#contact">
              Start a Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="h-14 px-10 text-lg rounded-full border-border bg-background hover:bg-secondary transition-all" 
            asChild
          >
            <Link href="#services">
              Our Methodology
            </Link>
          </Button>
        </FadeIn>
      
      </div>
    </section>
  );
}
