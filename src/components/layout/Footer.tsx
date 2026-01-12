import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-20 bg-black text-white border-t border-white/5">
      <div className="container px-4 md:px-6 w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
           
           {/* Logo / Copyright */}
           <div className="flex flex-col items-center md:items-start gap-4">
             <span className="text-2xl font-sans font-bold tracking-tighter text-white">Kurek|Hersi</span>
             <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
               © {new Date().getFullYear()} Kurek Hersi. Strategic AI Governance.
             </p>
           </div>
           
           {/* Note */}
           <div className="text-xs text-white/30 font-medium tracking-wide text-center md:text-left uppercase">
             DISCRETIONARY PARTNERSHIPS ONLY.
           </div>

           {/* Links */}
           <nav className="flex gap-12">
             <Link href="#" className="text-[10px] font-bold text-white/40 hover:text-white transition-colors uppercase tracking-[0.2em]">
               Privacy
             </Link>
             <Link href="#" className="text-[10px] font-bold text-white/40 hover:text-white transition-colors uppercase tracking-[0.2em]">
               LinkedIn
             </Link>
           </nav>
        </div>
      </div>
    </footer>
  );
}
