"use client";

import { FadeIn, FadeInStagger, FadeInChild } from "@/components/ui/fade-in";

const team = [
  {
    name: "Jibreal Hersi",
    role: "PARTNER",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
  },
  {
    name: "Yusuf Kurek",
    role: "PARTNER",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
  }
];

export function Team() {
  return (
    <section id="team" className="py-32 bg-white w-full flex justify-center items-center border-b border-black/5">
      <div className="container px-4 md:px-6 w-full max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_3fr] gap-12 lg:gap-24 items-start mb-24">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.4em] text-black/40 uppercase mt-2">
               // Key People
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-sm text-black/60 font-sans font-medium leading-relaxed max-w-2xl">
              Our team comprises seasoned professionals with extensive experience in the industry. We bring a wealth of knowledge and a proven track record in strategic AI governance and market analytics. Meet our dedicated team members who are committed to delivering exceptional results.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-[1fr_3fr] gap-12 lg:gap-24">
          <div className="hidden lg:block" /> { /* Column spacer to align with text above */ }
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {team.map((member, i) => (
              <FadeInChild key={i}>
                <div className="group cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-black/5">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-black/30 tracking-[0.2em] mb-2 uppercase">{member.role}</p>
                    <h3 className="text-xl font-sans font-bold text-black tracking-tight">{member.name}</h3>
                  </div>
                </div>
              </FadeInChild>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
}
