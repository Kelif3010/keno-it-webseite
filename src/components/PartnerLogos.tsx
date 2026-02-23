import ScrollReveal from "@/components/ScrollReveal";

const technologies = [
  "Microsoft Azure",
  "Microsoft 365",
  "Microsoft Intune",
  "Entra ID / Active Directory",
  "Exchange Online",
  "Microsoft Teams",
  "Windows 10 / 11",
  "Telekom Business",
];

const PartnerLogos = () => {
  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="container">
        <ScrollReveal>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            Technologien & Plattformen
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-secondary hover:text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PartnerLogos;
