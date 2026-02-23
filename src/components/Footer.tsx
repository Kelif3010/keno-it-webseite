import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground/70">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xl font-extrabold text-primary-foreground tracking-tight">
              Keno IT<span className="text-secondary">.</span>
            </span>
            <p className="text-sm mt-1">Ihre externe IT-Abteilung</p>
          </div>

          <div className="flex gap-6 text-sm">
            <Link to="/impressum" className="hover:text-primary-foreground transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-primary-foreground transition-colors">Datenschutz</Link>
            <a href="#contact" className="hover:text-primary-foreground transition-colors">Kontakt</a>
          </div>

          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Keno IT. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
