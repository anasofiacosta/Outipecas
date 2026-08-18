import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/marcas", label: "Marcas" },
  { to: "/servicos", label: "Serviços" },
  { to: "/inspiracao", label: "Inspiração" },
  { to: "/blog", label: "Blog" },
  { to: "/contactos", label: "Contactos" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-foreground/5 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-8 bg-foreground flex items-center justify-center">
            <div className="size-4 border border-background rotate-45" />
          </div>
          <span className="font-display text-2xl font-semibold tracking-tight uppercase">
            Aura &amp; Matiz
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-[11px] font-semibold uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/contactos"
            className="hidden md:block px-6 py-3 bg-foreground text-background text-[11px] font-semibold uppercase tracking-widest hover:bg-accent transition-colors"
          >
            Contactar
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-foreground/5 px-6 pb-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contactos"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-6 py-3 bg-foreground text-background text-center text-[11px] font-semibold uppercase tracking-widest"
            >
              Contactar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
