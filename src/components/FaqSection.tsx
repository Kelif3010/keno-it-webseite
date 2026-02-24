import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    question: "Was kostet eine IT-Betreuung bei Keno IT?",
    answer:
      "Unsere Managed-Service-Pakete beginnen ab 149 € pro Monat für kleine Teams. Da jedes Unternehmen unterschiedliche Anforderungen hat, erstellen wir Ihnen nach dem kostenlosen IT-Check ein maßgeschneidertes Festpreisangebot – ohne Kleingedrucktes.",
  },
  {
    question: "Brauche ich einen langfristigen Vertrag?",
    answer:
      "Nein. Unsere Verträge sind monatlich kündbar. Wir setzen auf Vertrauen, nicht auf Abhängigkeit. Unsere Kunden bleiben, weil sie zufrieden sind – nicht weil sie müssen.",
  },
  {
    question: "Wie schnell reagieren Sie bei einem IT-Notfall?",
    answer:
      "Bei kritischen Ausfällen melden wir uns in der Regel innerhalb von 1–2 Stunden. Unser Ziel für alle Anfragen ist eine Reaktionszeit von unter 8 Stunden. Viele Probleme lösen wir remote, ohne dass Sie auf jemanden warten müssen.",
  },
  {
    question: "Für welche Unternehmensgröße sind Sie geeignet?",
    answer:
      "Wir sind auf kleine und mittelständische Unternehmen mit 1 bis 50 Mitarbeitern spezialisiert – vom Handwerksbetrieb über Büros und Dienstleister bis hin zu Startups. Wenn Sie unsicher sind ob wir passen, fragen Sie einfach – das kostenlose Erstgespräch schafft Klarheit.",
  },
  {
    question: "Was passiert beim kostenlosen IT-Check?",
    answer:
      "Wir schauen uns Ihre aktuelle IT-Infrastruktur an – remote per Fernzugriff oder vor Ort bei Ihnen. Sie erhalten danach eine ehrliche Einschätzung Ihrer Schwachstellen und einen konkreten Maßnahmenplan. Das alles ist kostenlos und unverbindlich.",
  },
  {
    question: "Betreuen Sie auch Homeoffice-Mitarbeiter?",
    answer:
      "Ja. Wir richten sichere VPN-Verbindungen, Homeoffice-Arbeitsplätze und Cloudlösungen wie Microsoft 365 ein, sodass Ihr Team von überall sicher und produktiv arbeiten kann.",
  },
  {
    question: "Was ist, wenn ich bereits einen IT-Dienstleister habe?",
    answer:
      "Kein Problem. Wir übernehmen bestehende Umgebungen, koordinieren bei Bedarf die Übergabe und sorgen für eine reibungslose Umstellung – ohne Datenverlust und ohne Betriebsunterbrechung.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              Häufige Fragen
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Ihre Fragen – unsere Antworten.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Alles was Sie vor der Zusammenarbeit wissen möchten.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card px-6 shadow-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FaqSection;
