"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollBeam() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 right-0 bottom-0 w-1.5 bg-primary/20 z-[100] hidden md:block" // Track
    >
      <motion.div
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-[#4ade80] origin-top rounded-b-full" // Gradient Beam No Glow
        style={{ scaleY, height: "100%" }}
      />
    </motion.div>
  );
}
