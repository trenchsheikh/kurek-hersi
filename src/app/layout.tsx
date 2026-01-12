import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });
const dmSerif = DM_Serif_Display({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-serif",
  style: "normal" 
});

import { ScrollBeam } from "@/components/ui/scroll-beam";

export const metadata: Metadata = {
  title: "Kurek Hersi - Strategic B2B Intelligence",
  description: "Expert consulting that drives real growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${dmSerif.variable} font-sans antialiased bg-background text-foreground`}>
        <ScrollBeam />
        {children}
      </body>
    </html>
  );
}
