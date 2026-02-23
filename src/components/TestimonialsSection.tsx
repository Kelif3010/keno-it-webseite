import { ShieldCheck, Handshake, Lightbulb } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const commitments = [
  {
    icon: ShieldCheck,
    title: "Wir versprechen nur, was wir halten können.",
    desc: "Keine aufgeblähten Angebote, keine Buzzwords. Wir sagen klar was wir können – und was nicht. Wenn wir nicht die richtige Lösung für Sie sind, sagen wir das auch.",
  },
  {
    icon: Lightbulb,
    title: "Microsoft-Expertise aus der täglichen Praxis.",
    desc: "Azure, Intune, Entra ID und Microsoft 365 sind für uns kein Theoriestoff – wir arbeiten täglich damit. Was wir Ihnen einrichten, kennen wir aus dem echten Betrieb.",
  },
  {
    icon: Handshake,
    title: "Ihr Erfolg ist unser erster Ruf.",
    desc: "Wir bauen Keno IT auf Empfehlungen auf. Jeder Kunde bekommt deshalb 100% Einsatz – nicht weil wir müssen, sondern weil wir beweisen wollen was wir können.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              Unser Anspruch
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground">
              Ehrlich. Kompetent. Verlässlich.
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/70">
              Was uns antreibt – und was Sie von uns erwarten dürfen.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {commitments.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 120}>
              <div className="flex flex-col h-full rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-8">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20">
                  <item.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-bold text-primary-foreground text-lg mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
