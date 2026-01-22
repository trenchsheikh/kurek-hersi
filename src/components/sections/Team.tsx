"use client";

import { FadeIn, FadeInStagger, FadeInChild } from "@/components/ui/fade-in";

const team = [
  {
    name: "Jibreal Hersi",
    role: "PARTNER",
    image: "/jibz.jpeg"
  },
  {
    name: "Bart Kurek",
    role: "PARTNER",
    image: "/bart.jpeg"
  }
];

export function Team() {
  return (
    <section id="team" className="py-32 bg-white w-full flex justify-center items-center border-b border-black/5">
      <div className="container px-4 md:px-6 w-full max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.4em] text-black/40 uppercase mb-4">
               // MEET THE FOUNDERS
            </p>
          </FadeIn>
        </div>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
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
    </section>
  );
}
