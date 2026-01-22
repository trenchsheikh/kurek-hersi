"use client";

import { FadeIn } from "@/components/ui/fade-in";

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
    <section className="py-12 bg-white w-full flex justify-center items-center overflow-hidden border-b border-black/5">
      <div className="w-full max-w-6xl px-4 flex flex-col gap-8">
        
        <div className="text-center">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.3em] text-black/40 uppercase mb-6">
                Trusted by senior teams at
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 opacity-40 hover:opacity-100 transition-opacity duration-700">
           {companies.map((company) => (
             <div key={company.name} className={`h-8 flex items-center justify-center ${company.containerClass || 'w-28'}`}>
               <img 
                 src={company.logo} 
                 alt={company.name} 
                 className={`max-h-full max-w-full object-contain ${company.scale || ''}`} 
               />
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
