"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";

// Verified SVG URLs (Wikimedia/CDN)
const companies = [
  { name: "Goldman Sachs", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg" },
  { name: "J.P. Morgan", logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/JPMorgan_Chase_Logo_2008_1.svg" },
  { name: "McKinsey", logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/McKinsey_%26_Company_Shield_Logo.svg" }, // Shield logo has some color/shape
  { name: "BlackRock", logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/BlackRock_logo.svg" },
  { name: "Morgan Stanley", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Morgan_Stanley_Logo_1.svg" },
  { name: "Citigroup", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Citigroup_Logo.svg" },
  { name: "Bain & Company", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bain_and_Company_Logo.svg" },
  { name: "BCG", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Boston_Consulting_Group_2020_logo.svg" },
];

const technologies = [
  { name: "Tableau", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" }, 
  { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
  { name: "Qualtrics", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Qualtrics_XM_logo.svg" }, 
  { name: "Snowflake", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg" }, 
  { name: "Google Analytics", logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Analytics_logo.svg" },
  { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
  { name: "Looker", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Looker_Logo.svg" }, 
];

export function LogoCarousel() {
  return (
    <section className="py-24 bg-background w-full flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-[95%] flex flex-col gap-12">
        
        <div className="text-center">
          <FadeIn>
            <p className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-8">
               Trusted by Leaders, Powered by Innovation
            </p>
          </FadeIn>
        </div>

        <div className="relative flex flex-col gap-12">
            {/* Row 1: Companies (Left) */}
            <div className="flex overflow-hidden mask-gradient">
              <motion.div 
                className="flex gap-16 md:gap-24 items-center flex-shrink-0"
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                {[...companies, ...companies].map((company, i) => (
                  <div key={`${company.name}-${i}`} className="h-20 w-32 md:w-40 flex items-center justify-center relative px-4">
                     {/* 
                         Company Logos: 
                         Force White Silhouette (invert brightness-0) for contrast on dark bg.
                         Opacity 50% -> 100% on hover.
                     */}
                     <img 
                       src={company.logo} 
                       alt={company.name} 
                       className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300" 
                     />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2: Technologies (Right) */}
            <div className="flex overflow-hidden mask-gradient">
              <motion.div 
                className="flex gap-16 md:gap-24 items-center flex-shrink-0"
                initial={{ x: "-50%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                {[...technologies, ...technologies].map((tech, i) => (
                  <div key={`${tech.name}-${i}`} className="h-16 w-32 md:w-40 flex items-center justify-center relative px-4">
                     {/* 
                        Tech Logos:
                        Also forced to White Silhouette for consistency and visibility on dark background.
                        (Original colors often include black text which would be invisible).
                     */}
                     <img 
                       src={tech.logo} 
                       alt={tech.name} 
                       className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300" 
                     />
                  </div>
                ))}
              </motion.div>
            </div>
        </div>

      </div>
    </section>
  );
}
