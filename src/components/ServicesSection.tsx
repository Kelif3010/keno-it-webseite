import { Headphones, Users, ShieldCheck, RefreshCw } from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Sofort-Hilfe per Fernwartung",
    description:
      "PC hängt, E-Mail geht nicht, Office macht Probleme? Wir verbinden uns remote und lösen es – ohne dass Sie auf einen Techniker warten müssen. Schnell, direkt, unkompliziert.",
  },
  {
    icon: Users,
    title: "Onboarding & Geräteverwaltung",
    description:
      "Neuer Mitarbeiter? Wir richten Account, Gerät und Zugriffsrechte ein – von Anfang an sicher konfiguriert. Und beim Ausscheiden sorgen wir für sauberes Off-boarding.",
  },
  {
    icon: ShieldCheck,
    title: "IT-Sicherheit & MFA",
    description:
      "Zwei-Faktor-Authentifizierung, moderne Sicherheitsrichtlinien und Schutz vor Phishing-Angriffen. Wir machen Ihr Unternehmen deutlich schwerer angreifbar – ohne Aufwand für Sie.",
  },
  {
    icon: RefreshCw,
    title: "Proaktive Wartung",
    description:
      "Wir halten Ihre Systeme im Hintergrund aktuell: Sicherheitsupdates, regelmäßige Health-Checks und Patch-Management – bevor ein veraltetes System zum Problem wird.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            Unsere Leistungen
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Was wir konkret für Sie tun.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Kein Bauchladen. Wir fokussieren uns auf das, was kleine Unternehmen wirklich brauchen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-secondary/10">
                <service.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
