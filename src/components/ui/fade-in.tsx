"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  style?: React.CSSProperties | any;
}

export const FadeIn = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.5,
  yOffset = 20,
  style
}: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset, scale: 0.95, filter: "blur(4px)" }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : { opacity: 0, y: yOffset, scale: 0.95, filter: "blur(4px)" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export const FadeInStagger = ({ 
  children, 
  className = "",
  staggerDelay = 0.1
}: { 
  children: React.ReactNode; 
  className?: string; 
  staggerDelay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay } },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInChild = ({ children, className="" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20, filter: "blur(4px)", scale: 0.95 },
        visible: { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)", 
          scale: 1,
          transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } 
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
