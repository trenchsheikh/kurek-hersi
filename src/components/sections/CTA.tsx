"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
          Ready to Elevate Your Strategy?
        </h2>
        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
          Partner with Kurek Hersi for world-class B2B market research that delivers clear answers to complex questions.
        </p>
        <Button 
          size="lg" 
          variant="secondary" 
          className="h-14 px-8 text-lg font-semibold"
          asChild
        >
          <Link href="mailto:contact@kurekhersi.com">
            Schedule a Consultation
          </Link>
        </Button>
      </div>
    </section>
  );
}
