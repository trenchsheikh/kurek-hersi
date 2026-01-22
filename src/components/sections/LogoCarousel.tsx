"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";

const companies = [
  { name: "Ipsos", logo: "/Ipsos_logo.svg", containerClass: "w-20" },
  { name: "Barclays", logo: "/Barclays-Logo.png", scale: "scale-150" },
  { name: "HSBC", logo: "/HSBC_logo.png" },
  { name: "Royal Bank of Scotland", logo: "/Royal_Bank_of_Scotland_logo.png" },
  { name: "Department for Education", logo: "/Department_for_Education.svg" },
  { name: "The Times Newspaper", logo: "/The-Times-Logo.jpg", scale: "scale-150" },
  { name: "NHS", logo: "/National_Health_Service_(England)_logo.png" },
  { name: "Department for Transport", logo: "/Department_for_Transport.svg" },
  { name: "University College London", logo: "/University_College_London_logo.png" },
  { name: "King's College", logo: "/King's_College_London_logo.png" },
  { name: "Lloyds Banking", logo: "/Lloyds-Bank-Logo.jpg" },
];

export function LogoCarousel() {
  return (
    <section className="py-16 bg-white w-full border-b border-black/5 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col gap-10">
        
        <div className="text-center">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.3em] text-black/40 uppercase mb-6">
                Trusted by senior teams at
            </p>
          </FadeIn>
        </div>

        <div 
          className="relative w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <motion.div 
            className="flex items-center gap-12 md:gap-24 w-max"
            animate={{ x: "-50%" }}
            transition={{ 
              duration: 100, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...companies, ...companies].map((company, i) => (
              <div 
                key={`${company.name}-${i}`} 
                className={`flex items-center justify-center opacity-100 ${company.containerClass || 'w-32'}`}
              >
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className={`max-h-12 w-auto object-contain ${company.scale || ''}`} 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
