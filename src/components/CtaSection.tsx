import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

interface CtaSectionProps {
  onOpenItCheck: () => void;
}

const CtaSection = ({ onOpenItCheck }: CtaSectionProps) => {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Bereit für IT, die einfach funktioniert?
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Vereinbaren Sie jetzt einen kostenlosen und unverbindlichen IT-Check. Wir analysieren
            Ihre aktuelle Situation und zeigen Ihnen, wie Sie Ihre IT optimieren können.
          </p>

          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-semibold" onClick={onOpenItCheck}>
            Kostenlosen IT-Check vereinbaren
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4 text-primary-foreground/70">
            <a href="tel:+4915222001551" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone className="h-4 w-4" />
              +49 152 22001551
            </a>
            <a href="mailto:info@keno-it.de" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Mail className="h-4 w-4" />
              info@keno-it.de
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
