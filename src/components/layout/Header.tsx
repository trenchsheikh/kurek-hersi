"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Decision", href: "#the-reality" },
    { name: "Our Role", href: "#our-role" },
    { name: "The Diagnostic", href: "#the-diagnostic" },
    { name: "Fit", href: "#fit" },
    { name: "Conversation", href: "#conversation" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-black/5 shadow-sm py-4"
          : "bg-white border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="z-50 group flex items-center">
          <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-black whitespace-nowrap">
            Kurek Hersi
          </span>
        </Link>

        {/* Desktop Nav - Spaced out across full width */}
        <nav className="hidden md:flex items-center flex-grow justify-center px-12 lg:px-24">
          <div className="flex items-center justify-between w-full max-w-4xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-black/60 hover:text-primary transition-colors tracking-widest font-sans uppercase"
                onClick={(e) => {
                   e.preventDefault();
                   const el = document.querySelector(link.href);
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
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex items-center">
          <Button asChild size="lg" className="rounded-full px-8 font-bold shadow-lg hover:shadow-xl transition-all bg-primary text-primary-foreground hover:scale-105 hidden md:flex">
            <Link href="#conversation" onClick={(e) => {
               e.preventDefault();
               const el = document.querySelector("#conversation");
               if (el) el.scrollIntoView({ behavior: "smooth" });
            }}>
              Start Conversation
            </Link>
          </Button>

          {/* Mobile Nav Trigger */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-black hover:bg-black/5">
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
                    className="text-2xl font-serif font-bold text-black hover:text-primary transition-colors"
                    onClick={() => {
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="h-px w-20 bg-black/10 my-4" />
                <Button asChild className="w-full max-w-xs rounded-full h-14 text-lg font-bold">
                  <Link href="#conversation">Start Conversation</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
