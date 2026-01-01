import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-black/5">
      <div className="container px-4 md:px-6 w-full max-w-[95%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           
           {/* Logo / Copyright */}
           <div className="flex flex-col items-center md:items-start gap-2">
             <span className="text-2xl font-serif font-bold tracking-tight text-foreground">Kurek Hersi</span>
             <p className="text-muted-foreground text-sm font-medium">
               © {new Date().getFullYear()} Kurek Hersi. All rights reserved.
             </p>
           </div>
           
           {/* Links */}
           <nav className="flex gap-8">
             <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
               Privacy Policy
             </Link>
             <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
               Terms of Service
             </Link>
             <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
               LinkedIn
             </Link>
           </nav>
        </div>
      </div>
    </footer>
  );
}
