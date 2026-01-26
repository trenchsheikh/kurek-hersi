import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const interSerif = Inter({ 
  subsets: ["latin"], 
  variable: "--font-serif",
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
      <head>
        <link 
          href="https://assets.calendly.com/assets/external/widget.css" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.variable} ${interSerif.variable} font-sans antialiased bg-background text-foreground`}>
        <Script 
          src="https://assets.calendly.com/assets/external/widget.js" 
          strategy="afterInteractive"
        />
        <ScrollBeam />
        {children}
      </body>
    </html>
  );
}
