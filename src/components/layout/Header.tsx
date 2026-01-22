"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Decision", href: "#the-reality" },
    { name: "Role", href: "#our-role" },
    { name: "Diagnostic", href: "#the-diagnostic" },
    { name: "Fit", href: "#fit" },
  ];

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu if open

    const el = document.querySelector(href);
    if (el) {
      const offset = 100;
      const elementTop = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-black/40 backdrop-blur-md border-b border-white/5 ${
        isScrolled ? "py-1 shadow-xl" : "py-2"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="z-50 group flex items-center"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img 
            src="/logo.png" 
            alt="Kurek Hersi" 
            className="h-14 md:h-16 w-auto invert grayscale brightness-0 brightness-[10] transition-all duration-300 group-hover:opacity-80 object-contain"
          />
        </Link>

        {/* Desktop Nav - Centered and Tight */}
        <nav className="hidden md:flex items-center flex-grow justify-center">
          <div className="flex items-center gap-12 lg:gap-16">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                scroll={false}
                className="text-[10px] uppercase font-bold text-white/40 hover:text-white transition-all duration-300 tracking-[0.25em] font-sans whitespace-nowrap"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex items-center">
          <Button 
            onClick={() => {
              if (window.Calendly) {
                window.Calendly.initPopupWidget({
                  url: 'https://calendly.com/jibreal-kurekhersi/30min'
                });
              }
            }}
            size="default" 
            className="rounded-sm px-6 font-medium transition-all bg-white text-black hover:bg-white/90 hover:scale-105 hidden md:flex items-center gap-2"
          >
            Get Started Today
          </Button>

          {/* Mobile Nav Trigger */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full h-auto bg-white border-b border-black/5">
              <nav className="flex flex-col items-center gap-6 py-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    scroll={false}
                    className="text-2xl font-sans font-bold text-black hover:text-black/60 transition-colors uppercase tracking-[0.2em]"
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="h-px w-20 bg-black/10 my-4" />
                <Button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (window.Calendly) {
                      window.Calendly.initPopupWidget({
                        url: 'https://calendly.com/jibreal-kurekhersi/30min'
                      });
                    }
                  }}
                  className="w-full max-w-xs rounded-sm h-14 text-lg font-medium flex items-center justify-center gap-2"
                >
                  Get Started Today
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
