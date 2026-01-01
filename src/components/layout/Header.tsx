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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full transition-all duration-500 ease-in-out border max-w-[95vw] text-white ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-border/50 shadow-md py-1.5 px-2"
          : "bg-background/70 backdrop-blur-md border-transparent shadow-sm py-2.5 px-4"
      }`}
    >
      <div className="flex items-center gap-8 md:gap-16 px-4">
        <Link href="/" className="z-50 group">
          <div className={`transition-all duration-500 ease-in-out overflow-hidden flex items-center ${isScrolled ? "w-12" : "w-48"}`}>
            {isScrolled ? (
               <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-lg shadow-sm">
                 KH
               </div>
            ) : (
               <span className="text-2xl font-serif font-bold tracking-tight text-foreground whitespace-nowrap pl-2">
                Kurek Hersi
               </span>
            )}
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
