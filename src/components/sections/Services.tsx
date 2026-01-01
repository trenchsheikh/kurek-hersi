"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, BarChart3, Users, TrendingUp } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";

const services = [
  {
    title: "Market Intelligence",
    description: "Deep dive analysis into market trends, size, and growth potential to identify new opportunities.",
    icon: Globe,
  },
  {
    title: "Competitor Analysis",
    description: "Systematic evaluation of current and potential competitors to refine your strategic edge.",
    icon: BarChart3,
  },
  {
    title: "Consumer Behavior",
    description: "Understanding the 'why' behind customer decisions through qualitative and quantitative research.",
    icon: Users,
  },
  {
    title: "Growth Strategy",
    description: "Data-backed roadmaps to scale your operations and enter new vertical markets confidently.",
    icon: TrendingUp,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-primary">
            Comprehensive Research Capabilities
          </h2>
          <p className="text-muted-foreground text-xl">
            We don't just find data. We find the answers that matter to your bottom line.
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="h-full border-none shadow-sm bg-card hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <service.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
