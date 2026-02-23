import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl py-16 px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="text-3xl font-extrabold text-foreground mb-2">Datenschutzerklärung</h1>
        <p className="text-xs text-muted-foreground mb-10">Stand: Februar 2026</p>

        <section className="space-y-8 text-sm text-foreground leading-relaxed">

          <div>
            <h2 className="font-bold text-base mb-2">1. Verantwortlicher</h2>
            <p className="text-muted-foreground">
              Ken Ogunkoya<br />
              Lauffenstraße 2, 71642 Ludwigsburg<br />
              E-Mail: <a href="mailto:info@keno-it.de" className="text-secondary hover:underline">info@keno-it.de</a><br />
              Telefon: <a href="tel:+4915222001551" className="text-secondary hover:underline">+49 152 22001551</a>
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2">2. Hosting</h2>
            <p className="text-muted-foreground">
              Diese Website wird bei <strong className="text-foreground">Vercel Inc.</strong> (340 Pine Street, Suite 701, San Francisco, CA 94104, USA) gehostet. Vercel kann beim Aufruf der Website technische Daten (z. B. IP-Adresse, Browser, Uhrzeit des Zugriffs) in Server-Logfiles erfassen. Diese Daten werden ausschließlich zur Sicherstellung des technischen Betriebs verarbeitet und sind nicht einer bestimmten Person zuordenbar.
            </p>
            <p className="text-muted-foreground mt-2">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am stabilen Betrieb der Website). Vercel stellt im Rahmen des EU-U.S. Data Privacy Framework sicher, dass die Datenverarbeitung DSGVO-konform erfolgt. Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">vercel.com/legal/privacy-policy</a>
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2">3. Kontaktaufnahme</h2>
            <p className="text-muted-foreground">
              Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, werden die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, Nachricht sowie ggf. weitere Angaben) zur Bearbeitung Ihrer Anfrage bei uns gespeichert und ausschließlich per E-Mail an uns weitergeleitet. Eine Speicherung in einer Datenbank findet nicht statt.
            </p>
            <p className="text-muted-foreground mt-2">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnungsmaßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2">4. Schriftarten (Fonts)</h2>
            <p className="text-muted-foreground">
              Diese Website verwendet die Schriftart <em>Plus Jakarta Sans</em>, die lokal auf unserem Server gehostet wird. Es findet keine Verbindung zu externen Servern (z. B. Google) statt. Es werden keine personenbezogenen Daten durch die Schrifteinbindung übertragen.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2">5. WhatsApp-Kontakt</h2>
            <p className="text-muted-foreground">
              Auf dieser Website befinden sich Links, über die Sie uns direkt über WhatsApp kontaktieren können. Wenn Sie auf einen solchen Link klicken, verlassen Sie unsere Website und werden zu WhatsApp weitergeleitet. WhatsApp ist ein Dienst der Meta Platforms Ireland Ltd. (4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland).
            </p>
            <p className="text-muted-foreground mt-2">
              Durch die Nutzung von WhatsApp werden Daten (u. a. Ihre Telefonnummer und der Nachrichteninhalt) an Meta übertragen und gemäß den WhatsApp-Datenschutzrichtlinien verarbeitet. Wir haben auf diese Datenverarbeitung keinen Einfluss. Weitere Informationen: <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">whatsapp.com/legal/privacy-policy</a>
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2">6. Cookies und Tracking</h2>
            <p className="text-muted-foreground">
              Diese Website verwendet keine Tracking-Cookies und keine Analyse-Tools (z. B. Google Analytics). Es werden ausschließlich technisch notwendige Einstellungen (z. B. Theme-Präferenz) lokal im Browser gespeichert. Diese Daten verlassen Ihren Browser nicht und werden nicht an uns übertragen.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2">7. Ihre Rechte</h2>
            <p className="text-muted-foreground">Sie haben gemäß DSGVO folgende Rechte gegenüber uns:</p>
            <ul className="mt-2 space-y-1 text-muted-foreground list-none">
              {[
                "Recht auf Auskunft (Art. 15 DSGVO)",
                "Recht auf Berichtigung (Art. 16 DSGVO)",
                "Recht auf Löschung (Art. 17 DSGVO)",
                "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
                "Widerspruchsrecht (Art. 21 DSGVO)",
              ].map((right) => (
                <li key={right} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  {right}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-3">
              Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist z. B. der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2">8. Kontakt bei Datenschutzfragen</h2>
            <p className="text-muted-foreground">
              Bei Fragen zum Datenschutz erreichen Sie uns unter: <a href="mailto:info@keno-it.de" className="text-secondary hover:underline">info@keno-it.de</a>
            </p>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Datenschutz;
