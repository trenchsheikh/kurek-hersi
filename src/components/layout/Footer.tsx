import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-20 bg-black text-white border-t border-white/5">
      <div className="container px-4 md:px-6 w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
           
            {/* Logo / Copyright */}
            <div className="flex-1 flex flex-col items-center md:items-start gap-4">
              <img 
                src="/logo.png" 
                alt="Kurek Hersi" 
                className="h-10 w-auto invert grayscale brightness-0 brightness-[10] object-contain"
              />
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                © {new Date().getFullYear()}
              </p>
            </div>
            
            {/* Note - Soft and Centered */}
            <div className="flex-1 flex justify-center">
              <p className="text-sm font-serif italic text-white/20 text-center max-w-[280px] leading-relaxed">
                We typically work with a small number of clients at a time.
              </p>
            </div>

            {/* Links */}
            <nav className="flex-1 flex justify-center md:justify-end gap-12">
              <Link href="#" className="text-[10px] font-bold text-white/40 hover:text-white transition-all duration-300 uppercase tracking-[0.2em]">
                Privacy
              </Link>
              <Link href="#" className="text-[10px] font-bold text-white/40 hover:text-white transition-all duration-300 uppercase tracking-[0.2em]">
                LinkedIn
              </Link>
            </nav>
        </div>
      </div>
    </footer>
  );
}
