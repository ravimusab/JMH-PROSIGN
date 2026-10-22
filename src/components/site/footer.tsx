import { Link } from "@tanstack/react-router";
import { company } from "@/data/site";
import { Logo } from "@/components/site/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Logo className="h-14 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/80">
            Fabrication de sacs, impression professionnelle et solutions graphiques.{" "}
            {company.city}, {company.country}.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ember">Atelier</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/services" className="hover:text-ember">
                Services
              </Link>
            </li>
            <li>
              <Link to="/realisations" className="hover:text-ember">
                Réalisations
              </Link>
            </li>
            <li>
              <Link to="/atelier" className="hover:text-ember">
                Vision & valeurs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-ember">
                Demander un devis
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ember">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            {company.phones.map((phone) => (
              <li key={phone.tel}>
                <a href={`tel:${phone.tel}`}>{phone.display}</a>
              </li>
            ))}
            <li>
              <a href={`mailto:${company.email}`} className="break-all">
                {company.email}
              </a>
            </li>
            <li>
              {company.city} — {company.country}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-paper/70">
          © {new Date().getFullYear()} {company.name}. {company.line}{" "}
          <Link to="/mentions-legales" className="underline">
            Mentions légales
          </Link>
        </p>
      </div>
    </footer>
  );
}
