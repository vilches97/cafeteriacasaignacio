import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const navLinks = [
  { labelKey: "nav.inicio", href: "#inicio" },
  { labelKey: "nav.desayunos", href: "#desayunos" },
  { labelKey: "nav.nosotros", href: "#nosotros" },
  { labelKey: "nav.carta", href: "#carta" },
  { labelKey: "nav.galeria", href: "#galeria" },
  { labelKey: "nav.opiniones", href: "#opiniones" },
  { labelKey: "nav.horario", href: "#horario" },
  { labelKey: "nav.contacto", href: "#contacto" },
];

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-narrow flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className={`font-heading text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-primary' : 'text-background'}`}>
          Cafetería Casa Ignacio
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors hover:opacity-70 ${
                  scrolled ? "text-foreground" : "text-background"
                }`}
              >
                {t(l.labelKey)}
              </a>
            </li>
          ))}
          <li>
            <LanguageSelector />
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSelector />
          <button
            onClick={() => setOpen(!open)}
            className={`p-2 ${scrolled ? "text-foreground" : "text-background"}`}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border shadow-lg">
          <ul className="flex flex-col py-4 px-6 gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-foreground font-medium text-sm border-b border-border/50 hover:bg-muted/50 transition-colors rounded"
                >
                  {t(l.labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
