import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex flex-col items-center md:items-start gap-2">
             <span className="text-2xl font-bold tracking-tighter">Kurek Hersi</span>
             <p className="text-muted-foreground text-sm">
               © {new Date().getFullYear()} Kurek Hersi. All rights reserved.
             </p>
           </div>
           
           <nav className="flex gap-6">
             <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
               Privacy Policy
             </Link>
             <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
               Terms of Service
             </Link>
             <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
               LinkedIn
             </Link>
           </nav>
        </div>
      </div>
    </footer>
  );
}
