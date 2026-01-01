"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const data = [
  { label: "Q1", value: 30 },
  { label: "Q2", value: 45 },
  { label: "Q3", value: 60 },
  { label: "Q4", value: 85 },
];

export function StatsGraph() {
  const [hasInView, setHasInView] = useState(false);

  return (
    <section id="stats" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
              Data That Drives Growth
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              In today's fast-paced B2B landscape, relying on intuition isn't enough. 
              Our clients see an average of 40% improvement in decision-making speed and accuracy.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">98%</h3>
                <p className="text-sm text-muted-foreground">Client Retention Rate</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <Card className="w-full max-w-md p-8 bg-card border shadow-lg">
               <h3 className="text-lg font-semibold mb-6">Market Growth Projection</h3>
               <div className="h-64 flex items-end justify-between gap-4">
                 {data.map((item, index) => (
                   <div key={item.label} className="relative flex flex-col items-center flex-1 h-full justify-end group">
                     {/* Bar */}
                     <motion.div
                       className="w-full bg-primary/20 rounded-t-md relative overflow-hidden"
                       initial={{ height: 0 }}
                       whileInView={{ height: `${item.value}%` }}
                       transition={{ duration: 1, delay: index * 0.2, type: "spring" }}
                       viewport={{ once: true }}
                     >
                       <div className="absolute inset-0 bg-primary opacity-80 group-hover:opacity-100 transition-opacity" />
                     </motion.div>
                     
                     {/* Label */}
                     <span className="mt-2 text-sm text-muted-foreground font-medium">{item.label}</span>
                     
                     {/* Value tooltip/label */}
                     <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 + index * 0.2 }}
                        className="absolute -top-6 text-sm font-bold text-primary"
                     >
                       {item.value}%
                     </motion.span>
                   </div>
                 ))}
               </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
