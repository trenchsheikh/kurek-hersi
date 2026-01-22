"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-black/40 backdrop-blur-md border-b border-white/5 ${
        isScrolled ? "py-0 shadow-xl" : "py-0"
      }`}
    >
      <div className="w-full px-4 md:px-12 flex items-center justify-between relative min-h-[70px] md:min-h-[80px]">
        {/* Logo container - precisely centered and aligned with site content */}
        <div className="container mx-auto px-4 md:px-6 flex items-center">
          <Link 
            href="/" 
            className="z-50 group flex items-center w-fit"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img 
              src="/logo.png" 
              alt="Kurek Hersi" 
              className="h-12 md:h-20 w-auto invert grayscale brightness-0 brightness-[10] transition-all duration-300 group-hover:opacity-80 object-contain"
            />
          </Link>
        </div>

        <div className="flex-shrink-0">
          <Button 
            onClick={() => {
              if (window.Calendly) {
                window.Calendly.initPopupWidget({
                  url: 'https://calendly.com/jibreal-kurekhersi/30min'
                });
              }
            }}
            size="default" 
            className="rounded-none px-4 md:px-6 h-10 md:h-11 font-medium transition-all bg-white text-black hover:bg-white/90 hover:scale-105 flex items-center gap-2 text-[10px] md:text-sm uppercase tracking-wider"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </header>
  );
}
