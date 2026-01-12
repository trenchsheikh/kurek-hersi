"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ArrowDown } from "lucide-react";
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
    { name: "The Decision", href: "#the-reality" },
    { name: "Partners", href: "#team" },
    { name: "Our Role", href: "#our-role" },
    { name: "The Diagnostic", href: "#the-diagnostic" },
    { name: "Fit", href: "#fit" },
    { name: "Conversation", href: "#conversation" },
  ];

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu if open

    const el = document.querySelector(href);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
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
        <Link href="/" className="z-50 group flex items-center">
          <img 
            src="/logo.png" 
            alt="Kurek Hersi" 
            className="h-14 md:h-16 w-auto invert grayscale brightness-0 brightness-[10] transition-all duration-300 group-hover:opacity-80 object-contain"
          />
        </Link>

        {/* Desktop Nav - Spaced out across full width */}
        <nav className="hidden md:flex items-center flex-grow justify-center px-8 lg:px-12">
          <div className="flex items-center justify-between w-full max-w-5xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] lg:text-xs font-medium text-white/50 hover:text-white transition-all duration-300 tracking-wider font-sans whitespace-nowrap"
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
            Start a Conversation
            <ArrowDown className="h-4 w-4" />
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
                    className="text-2xl font-serif font-bold text-black hover:text-black/60 transition-colors"
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
                  Start a Conversation
                  <ArrowDown className="h-5 w-5" />
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
