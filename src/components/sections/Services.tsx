"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { Pill } from "@/components/ui/pill";

const services = [
  {
    title: "Market Intelligence",
    description: "Deep dive analysis into market trends, size, and growth potential.",
    features: ["Trend Analysis", "Market Sizing", "Growth Forecasting"]
  },
  {
    title: "Competitor Analysis",
    description: "Systematic evaluation of competitors to refine your strategic edge.",
    features: ["Benchmarking", "SWOT Analysis", "Gap identification"]
  },
  {
    title: "Consumer Behavior",
    description: "Understanding the 'why' behind customer decisions quantitatively.",
    features: ["Survey Design", "Focus Groups", "Sentiment Analysis"]
  },
  {
    title: "Growth Strategy",
    description: "Data-backed roadmaps to scale operations and enter new markets.",
    features: ["Go-to-Market", "Scalability Audits", "Risk Assessment"]
  },
];

export function Services() {
  return (
    <section id="services" className="min-h-screen py-24 bg-secondary/30 w-full flex flex-col justify-center">
      <div className="container px-4 md:px-6 w-full max-w-[95%]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <FadeIn>
             <Pill className="mb-4">Our Expertise</Pill>
             <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground max-w-2xl">
               Comprehensive <br/> Research Capabilities
             </h2>
           </FadeIn>
           <FadeIn delay={0.2} className="hidden md:block">
             <p className="text-muted-foreground max-w-sm text-right">
               We don't just find data. We find the answers that matter to your bottom line.
             </p>
           </FadeIn>
        </div>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <Card key={service.title} className="border-none shadow-none bg-background rounded-[2rem] p-8 hover:shadow-xl transition-all duration-500 group">
              <CardHeader className="p-0 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-lg font-bold font-serif text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {i + 1}
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors -rotate-45 group-hover:rotate-0 transform duration-300" />
                </div>
                <CardTitle className="text-3xl font-serif mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground text-lg">{service.description}</p>
              </CardHeader>
              <CardContent className="p-0 pt-6 border-t border-border/50">
                <ul className="space-y-3">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-accent fill-accent/20" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
