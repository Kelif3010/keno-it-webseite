import { useEffect, useRef, useState } from "react";
import { UserCheck, ShieldCheck, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { numericTarget: 5, suffix: "+", label: "Jahre IT-Erfahrung" },
  { numericTarget: 2, suffix: "", label: "Feste Ansprechpartner" },
  { numericTarget: null, display: "< 8h", label: "Ø Reaktionszeit" },
];

const promises = [
  {
    icon: UserCheck,
    title: "Persönliche Betreuung",
    desc: "Ihr Anliegen kennt ein Name, kein Ticketsystem.",
  },
  {
    icon: ShieldCheck,
    title: "Datenschutz & Compliance",
    desc: "Sicherer Umgang mit sensiblen Daten – besonders für Kanzleien.",
  },
  {
    icon: Zap,
    title: "Proaktiver Ansatz",
    desc: "Wir lösen IT-Engpässe, bevor sie Ihren Betrieb stören.",
  },
];

const team = [
  {
    initials: "K",
    photo: "/ken.jpg",
    name: "Ken Ogunkoya",
    role: "Fachinformatiker & Technik-Kopf",
    desc: "Spezialist für Cloud-Migrationen, Netzwerktechnik und IT-Sicherheit. Sorgt dafür, dass Ihre Systeme stabil laufen.",
  },
  {
    initials: "E",
    photo: "",
    name: "Elif Mükan",
    role: "Struktur & Projektleitung",
    desc: "Verantwortlich für Organisation, Design und Kommunikation. Bringt Struktur in komplexe IT-Projekte.",
  },
];

function AnimatedStat({ stat }: { stat: typeof stats[number] }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || stat.numericTarget === null) return;
    const target = stat.numericTarget;
    const duration = 1200;
    let startTime: number;
    const animate = (now: number) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, stat.numericTarget]);

  const display =
    stat.numericTarget !== null
      ? `${count}${stat.suffix}`
      : (stat as { display: string }).display;

  return (
    <div ref={ref} className="rounded-xl bg-card border border-border p-5 text-center shadow-card">
      <div className="text-3xl font-extrabold text-secondary">{display}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</div>
    </div>
  );
}

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container">

        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              Über uns
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Zwei Experten. Ein Ziel.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Keno IT ist ein spezialisiertes Managed-Service-Team für KMU und Kanzleien. Kleine
              Unternehmen verdienen dieselbe IT-Qualität wie Konzerne – nur persönlicher, schneller
              und ohne anonyme Hotline.
            </p>
          </div>
        </ScrollReveal>

        {/* Animated Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-16">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Team + Promises */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div className="grid sm:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.initials} delay={i * 120}>
                <div className="group text-center rounded-xl bg-card border border-border p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-secondary/20 group-hover:border-secondary transition-colors overflow-hidden bg-secondary/10 flex items-center justify-center">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-2xl font-extrabold text-secondary">{member.initials}</span>
                    )}
                  </div>
                  <h3 className="font-bold text-foreground">{member.name}</h3>
                  <p className="text-secondary text-xs font-semibold uppercase tracking-wide mt-1 mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={80}>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wir handeln proaktiv, bevor Probleme entstehen. Bei uns landet Ihre Anfrage nicht in
                einem endlosen Ticket-System, sondern direkt bei den Experten, die Ihre IT aufgebaut
                haben.
              </p>
              {promises.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-xl border border-border bg-card shadow-card"
                >
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
