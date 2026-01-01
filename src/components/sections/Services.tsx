"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Globe, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="services" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Our Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive B2B research solutions tailored for complex industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 bg-card hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
