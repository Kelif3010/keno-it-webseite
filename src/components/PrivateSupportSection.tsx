import { Smartphone, Tv, Wrench, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    icon: Smartphone,
    title: "Gerät einrichten",
    price: "89 €",
    description:
      "Smartphone, Smartwatch oder Tablet neu einrichten – inkl. vollständiger Datenübertragung vom Altgerät, App-Einrichtung und persönlicher Einweisung.",
    highlight: false,
  },
  {
    icon: Tv,
    title: "Smart Home & Streaming",
    price: "119 €",
    description:
      "Fernseher mit Internet, YouTube & Mediatheken verbinden, Smart-Steckdosen, Thermostate oder andere smarte Geräte einrichten – bis zu 3 Geräte inkl. Einweisung.",
    highlight: true,
  },
  {
    icon: Wrench,
    title: "Technik-Hilfe vor Ort",
    price: "79 €",
    description:
      "WLAN bricht weg, Router macht Probleme, Drucker druckt nicht mehr? Wir kommen vorbei und lösen es – zum Festpreis, egal wie lange es dauert.",
    highlight: false,
  },
];

const PrivateSupportSection = () => {
  const whatsappUrl = "https://wa.me/4915222001551?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20den%20Privat-Support.";

  return (
    <div id="private">
      {/* Divider */}
      <div className="relative flex items-center py-0 bg-background">
        <div className="flex-grow border-t border-border" />
        <span className="mx-6 flex-shrink-0 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Auch für Privatpersonen
        </span>
        <div className="flex-grow border-t border-border" />
      </div>

      {/* Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              Privat-Support
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Technik einfach gemacht –{" "}
              <span className="text-gradient">wir kommen zu Ihnen.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Klare Festpreise, keine versteckten Kosten. Ob neues Smartphone,
              smarte Steckdose oder kaputter WLAN-Router – wir helfen.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className={`relative flex flex-col rounded-xl border p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${
                  pkg.highlight
                    ? "border-secondary bg-card ring-2 ring-secondary/20"
                    : "border-border bg-card"
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-3 py-0.5 text-xs font-bold text-secondary-foreground">
                    Beliebt
                  </span>
                )}

                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <pkg.icon className="h-6 w-6 text-secondary" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-1">{pkg.title}</h3>

                <div className="text-3xl font-extrabold text-primary my-3">
                  {pkg.price}
                  <span className="text-sm font-normal text-muted-foreground ml-1">Festpreis</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {pkg.description}
                </p>
              </div>
            ))}
          </div>

          {/* Travel info */}
          <div className="mt-8 max-w-xl mx-auto rounded-xl border border-border bg-card px-6 py-4 flex items-start gap-3">
            <MapPin className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Kostenlose Anfahrt</span> im Umkreis von 20 km ab Ludwigsburg.
              Darüber hinaus: +15 € (bis 40 km) · +30 € (bis 60 km) · ab 60 km auf Anfrage.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <p className="text-muted-foreground mb-4">
              Einfach Paket aussuchen und direkt Termin vereinbaren:
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-semibold px-8 py-6 text-base"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Termin per WhatsApp anfragen
              </a>
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              Kein WhatsApp? Einfach anrufen:{" "}
              <a href="tel:+4915222001551" className="underline hover:text-foreground transition-colors">
                +49 152 22001551
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivateSupportSection;
