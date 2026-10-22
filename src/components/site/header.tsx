import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/site/logo";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/atelier", label: "L'atelier" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
        <Link to="/" className="flex min-w-0 items-center">
          <Logo className="h-12 w-auto sm:h-14" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="text-sm font-medium text-ink"
              activeProps={{ className: "text-sm font-semibold text-cobalt" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="inline-flex h-11 items-center bg-ember px-4 text-sm font-semibold text-paper"
          >
            Devis
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center border border-line bg-foam md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="menu-mobile" className="border-t border-line bg-paper px-5 py-3 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="flex h-12 items-center text-base font-medium"
                  activeProps={{ className: "flex h-12 items-center text-base font-semibold text-cobalt" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
