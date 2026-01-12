"use client";

import { FadeIn } from "@/components/ui/fade-in";

// Verified SVG URLs (Wikimedia/CDN)
const companies = [
  { name: "Goldman Sachs", logo: "/Goldman-Sachs-Logo.png" },
  { name: "J.P. Morgan", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Logo_of_JPMorganChase_2024.svg" },
  { name: "McKinsey", logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/McKinsey_Script_Mark_2019.svg" },
  { name: "BlackRock", logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/BlackRock_wordmark.svg" },
  { name: "Morgan Stanley", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Morgan_Stanley_Logo_2024.svg" },
  { name: "Citigroup", logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Citi_logo_March_2023.svg" },
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
    <section className="py-12 bg-white w-full flex justify-center items-center overflow-hidden border-b border-black/5">
      <div className="w-full max-w-6xl px-4 flex flex-col gap-8">
        
        <div className="text-center">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.3em] text-black/40 uppercase mb-6">
                Trusted by senior teams at
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-10 items-center justify-items-center opacity-40 grayscale hover:opacity-100 transition-opacity duration-700">
           {companies.map((company) => (
             <div key={company.name} className="h-8 w-32 flex items-center justify-center">
               <img 
                 src={company.logo} 
                 alt={company.name} 
                 className="max-h-full max-w-full object-contain brightness-0" 
               />
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
