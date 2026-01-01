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
    { name: "Services", href: "#services" },
    { name: "Methodology", href: "#methodology" },
    { name: "Insights", href: "#stats" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50 rounded-full transition-all duration-500 ease-in-out border ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border shadow-md py-3"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="z-50 transition-all duration-300">
          {isScrolled ? (
             <div className="h-10 w-10 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20">
               <span className="font-serif font-bold text-foreground text-lg">KH</span>
             </div>
          ) : (
             <span className="text-2xl font-serif font-bold tracking-tight text-foreground whitespace-nowrap">
              Kurek Hersi
             </span>
          )}
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
             {/* Hide nav text on scroll for cleaner look if requested, or keep it. Keeping for now but ensuring contrast */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Button asChild size="sm" className="rounded-full px-6 font-medium shadow-sm hover:shadow-md transition-all bg-foreground text-background hover:bg-foreground/90 ml-2">
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="#contact">Get Started</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
