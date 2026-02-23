import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";

interface NavbarProps {
  onOpenItCheck: () => void;
}

const Navbar = ({ onOpenItCheck }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const links = [
    { label: "Leistungen", href: "#services" },
    { label: "Über uns", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#contact" },
  ];

  const ThemeToggle = () => (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
      aria-label="Dark Mode umschalten"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-extrabold text-primary-foreground tracking-tight">
          Keno IT<span className="text-secondary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <Button size="sm" variant="secondary" className="font-semibold" onClick={onOpenItCheck}>
            IT-Check anfragen
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile: Theme Toggle + Burger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button className="text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 py-4">
          <div className="container flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground" onClick={() => setMobileOpen(false)}>
                {l.label}
              </a>
            ))}
            <Button size="sm" variant="secondary" className="font-semibold w-fit" onClick={() => { onOpenItCheck(); setMobileOpen(false); }}>
              IT-Check anfragen
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
