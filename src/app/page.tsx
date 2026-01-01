import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { StatsGraph } from "@/components/sections/StatsGraph";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <StatsGraph />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
