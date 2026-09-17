import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import StrategySlider from "@/components/StrategySlider";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f4f4f0] text-[#131310] overflow-x-hidden selection:bg-[#83c42e] selection:text-[#131310]">
      {/* Interactive Micro-Interactions */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Selected Work / Case Studies */}
      <SelectedWork />

      {/* Services ("What I Do") */}
      <Services />

      {/* Signature Interactive Strategy Comparison */}
      <StrategySlider />

      {/* The 4-Step Process */}
      <Process />

      {/* Testimonials / Social Proof */}
      <Testimonials />

      {/* Contact & Footer */}
      <Footer />
    </main>
  );
}
