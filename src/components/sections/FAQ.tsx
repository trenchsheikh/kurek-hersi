"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Who is this work for?",
    answer: "We work exclusively with AI-first B2B companies, where AI is the product and revenue depends on market belief, trust, and adoption.\n\nThis work is designed for senior leaders responsible for high-stakes GTM, pricing, or positioning decisions."
  },
  {
    question: "How do you ensure the buyers you speak to are credible?",
    answer: "Every participant is manually reviewed, cross-referenced, and validated for role accuracy and decision authority before inclusion.\n\nWe do not rely on panels, automated sourcing, or incentive-driven platforms. Verification is deliberate and independent to ensure the evidence reflects real buying power, not availability.\n\nIf we cannot source the right buyers to a standard we are comfortable defending, we will tell you directly and will not proceed at your expense."
  },
  {
    question: "How many clients do you work with at a time?",
    answer: "We operate as a boutique firm and deliberately limit the number of engagements we take on.\n\nEach project is handled with direct senior involvement throughout, from scoping to synthesis. This ensures every engagement receives the level of care, scrutiny, and judgment required when decisions carry real downside.\n\nWe do not run work in parallel at scale."
  },
  {
    question: "How is this different from analyst research or large research platforms?",
    answer: "We are consultants, but this is not a broad advisory or transformation engagement.\n\nTraditional consulting often spans multiple workstreams, frameworks, and opinions over long timelines. Analyst research provides general context and benchmarks.\n\nOur work is deliberately narrow and time-bound. We focus on resolving a specific, high-stakes decision by replacing internal assumptions with independent buyer truth. The outcome is clear direction you can defend, not ongoing advice or a programme of work."
  },
  {
    question: "What happens if the market signal is unclear or uncomfortable?",
    answer: "That outcome is still valuable.\n\nDisagreement, hesitation, or resistance in the market is itself a signal. We surface it clearly, explain why it exists, and show what reliably holds under scrutiny.\n\nIf the evidence challenges internal assumptions, you see that early, before commitments are made. You pay for an accurate reflection of reality, not reassurance."
  },
  {
    question: "How is this work priced?",
    answer: "We work on a fixed-scope, fixed-fee basis.\n\nThe scope, timeline, and outputs are agreed upfront before any work begins. There are no retainers, no open-ended extensions, and no upsells.\n\nIf we do not believe the work can deliver clear, defensible answers, we will say so and will not proceed at your expense."
  },
  {
    question: "How is data handled and protected?",
    answer: "All data collected is handled with strict confidentiality and used solely for the purpose of the engagement.\n\nBuyer inputs are anonymised, securely stored, and never reused across clients. We do not maintain panels, resell data, or build proprietary respondent databases.\n\nOnce the engagement is complete, data is retained only as long as necessary and then removed in line with standard data protection practices."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-white w-full flex justify-center border-b border-black/5">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-black">
               // FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div 
                className="border border-black/10 rounded-sm px-6 md:px-8 mb-2 hover:border-black/20 transition-all bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-6 md:py-8 flex items-center justify-between text-left group transition-all"
                >
                  <span className="text-base md:text-lg font-sans font-medium text-black/80 tracking-tight text-left pr-8">
                {faq.question}
              </span>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === i ? (
                      <Minus className="w-6 h-6 text-black/40" />
                    ) : (
                      <Plus className="w-6 h-6 text-black/40 group-hover:text-black transition-colors" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="pb-8 pr-4">
                        <p className="text-base md:text-lg text-black/60 font-serif italic leading-relaxed pt-2 pb-6 whitespace-pre-line">
                    {faq.answer}
                  </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
