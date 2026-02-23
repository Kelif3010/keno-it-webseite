import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onOpenItCheck: () => void;
}

const HeroSection = ({ onOpenItCheck }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Serverraum" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm text-secondary-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            Managed Service Provider für KMU
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Ihre IT soll einfach funktionieren –{" "}
            <span className="text-gradient">wir kümmern uns darum.</span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Professionelle IT-Betreuung und Managed Services für kleine und mittelständische Unternehmen. Wir sind Ihre externe IT-Abteilung, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-semibold" onClick={onOpenItCheck}>
              Jetzt kostenlosen IT-Check vereinbaren
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
