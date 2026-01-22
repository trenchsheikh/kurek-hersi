import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const instrumentSerif = Instrument_Serif({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-serif",
  style: "normal" 
});

import { ScrollBeam } from "@/components/ui/scroll-beam";

export const metadata: Metadata = {
  title: "Kurek Hersi - Strategic B2B Intelligence",
  description: "Expert consulting that drives real growth.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-white.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon-white.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased bg-background text-foreground`}>
        <ScrollBeam />
        {children}
      </body>
    </html>
  );
}
