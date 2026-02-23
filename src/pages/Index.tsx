import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnerLogos from "@/components/PartnerLogos";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import RoadmapSection from "@/components/RoadmapSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PrivateSupportSection from "@/components/PrivateSupportSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ItCheckDialog from "@/components/ItCheckDialog";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  const [itCheckOpen, setItCheckOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenItCheck={() => setItCheckOpen(true)} />
      <HeroSection onOpenItCheck={() => setItCheckOpen(true)} />
      <PartnerLogos />
      <ScrollReveal><ServicesSection /></ScrollReveal>
      <ScrollReveal><IndustriesSection /></ScrollReveal>
      <ScrollReveal><RoadmapSection /></ScrollReveal>
      <ScrollReveal><TestimonialsSection /></ScrollReveal>
      <ScrollReveal><PrivateSupportSection /></ScrollReveal>
      <AboutSection />
      <ScrollReveal><FaqSection /></ScrollReveal>
      <ScrollReveal><CtaSection onOpenItCheck={() => setItCheckOpen(true)} /></ScrollReveal>
      <Footer />
      <ItCheckDialog open={itCheckOpen} onOpenChange={setItCheckOpen} />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
