import { Building2, Briefcase, Rocket } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "KMU & Handwerksbetriebe",
    badge: "Microsoft 365 · Cloud · VPN",
    points: [
      "Mobiles Arbeiten & Homeoffice-Anbindung",
      "Microsoft 365 – Einrichtung, Lizenzierung & Support",
      "Stabile Netzwerkinfrastruktur im Büro und auf Baustellen",
      "Schutz vor Ransomware und Datenverlust",
    ],
  },
  {
    icon: Briefcase,
    title: "Büros & Dienstleister",
    badge: "Exchange · Teams · Intune",
    points: [
      "E-Mail & Kommunikation mit Exchange Online & Teams",
      "Gerätemanagement mit Microsoft Intune",
      "Sichere Cloud-Ablage & Zusammenarbeit mit SharePoint",
      "Einrichtung neuer Mitarbeiter-Accounts & Geräte",
    ],
  },
  {
    icon: Rocket,
    title: "Startups & Gründer",
    badge: "Azure · Entra ID · M365",
    points: [
      "IT-Infrastruktur von Anfang an richtig aufsetzen",
      "Azure & Entra ID – moderne Cloud-Identitätsverwaltung",
      "Skalierbare Lösungen die mit Ihrem Team wachsen",
      "Kein IT-Ballast – wir kümmern uns, Sie fokussieren sich",
    ],
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            Für wen wir da sind
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Egal ob 2 oder 50 Mitarbeiter –<br className="hidden sm:block" /> wir passen uns an.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Unsere Stärke liegt im Microsoft-Ökosystem. Ob bestehende Umgebung
            übernehmen oder neu aufsetzen – wir kennen uns aus.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group rounded-xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-secondary/10">
                <industry.icon className="h-7 w-7 text-secondary" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">{industry.title}</h3>

              <span className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary mb-5">
                {industry.badge}
              </span>

              <ul className="space-y-3">
                {industry.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
