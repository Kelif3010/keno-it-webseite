import { Search, FileText, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "IT-Check & Ist-Analyse",
    desc: "Wir schauen uns Ihre aktuelle Infrastruktur an – remote oder vor Ort. Keine versteckten Kosten, keine Verpflichtung.",
    duration: "1–2 Tage",
  },
  {
    number: "02",
    icon: FileText,
    title: "Konzept & transparentes Angebot",
    desc: "Sie erhalten einen klaren Maßnahmenplan und ein Festpreisangebot. Kein Kleingedrucktes, keine Überraschungen.",
    duration: "2–3 Tage",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Umsetzung & Migration",
    desc: "Wir migrieren und konfigurieren Ihre Systeme – so geplant, dass Ihr Betrieb zu keinem Zeitpunkt stillsteht.",
    duration: "je nach Umfang",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Go-Live & laufende Betreuung",
    desc: "Nach dem Go-Live sind wir Ihre externe IT-Abteilung. Proaktives Monitoring, schnelle Reaktionszeiten, persönlicher Kontakt.",
    duration: "fortlaufend",
  },
];

const RoadmapSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            So läuft es ab
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Ihr Weg zu sicherer IT – in 4 Schritten.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Kein IT-Projekt muss chaotisch sein. Unser Prozess ist klar strukturiert –
            damit Sie immer wissen, was als Nächstes passiert.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line – desktop only */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-border" style={{ left: "calc(12.5%)", right: "calc(12.5%)" }} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Circle with number */}
                <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-secondary bg-background shadow-card">
                  <step.icon className="h-8 w-8 text-secondary" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-extrabold text-secondary-foreground">
                    {index + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="inline-block rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-semibold text-secondary">
                    {step.duration}
                  </span>
                  <h3 className="font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
