"use client";

import { motion } from "framer-motion";

export function HeroVisual() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      <div className="absolute inset-0 bg-black" />

      {/* 
        Optimization:
        1. Removed parent-level blur (expensive).
        2. Removed mix-blend-mode (expensive).
        3. Using direct radial gradients with transparency for 'softness' instead of filters.
        4. Added will-change-transform for browser hinting.
      */}
      <div className="relative h-full w-full">
        {/* Main Flowing Gradient 1 */}
        <motion.div
          className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)",
            willChange: "transform",
          }}
          animate={{
            x: ["0%", "10%", "-5%", "0%"],
            y: ["0%", "10%", "5%", "0%"],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main Flowing Gradient 2 */}
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[90vw] h-[90vw] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 60%)",
            willChange: "transform",
          }}
          animate={{
            x: ["0%", "-10%", "5%", "0%"],
            y: ["0%", "-10%", "-5%", "0%"],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Center Drifting Light - "The Pulse" */}
        <motion.div
          className="absolute top-[20%] left-[30%] w-[60vw] h-[60vw] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 50%)",
            willChange: "transform",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Soft detail overlay pattern (static, cheap) */}
         <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Clean Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/90 pointer-events-none" />
    </div>
  );
}
