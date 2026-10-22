import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/shell";
import { company, engagements, services } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JMH Pro'Sign — Sacs & impression à Abidjan" },
      { name: "description", content: "JMH Pro'Sign à Abidjan : fabrication de sacs personnalisés, impression sur tout support et conception graphique." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-sm font-semibold tracking-widest text-ember uppercase">
            {company.city} · {company.country}
          </p>
          <h1 className="mt-3 text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">
            {company.line}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Fabrication de sacs, impression sur tout support et solutions graphiques sur mesure.
            Des pièces fiables, à votre nom, pour les entreprises, les boutiques et les événements.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center bg-ember px-5 text-sm font-semibold text-paper"
            >
              Demander un devis
              <ArrowRight className="ml-2 size-4" />
            </Link>
            <Link
              to="/realisations"
              className="inline-flex h-12 items-center justify-center border border-ink px-5 text-sm font-semibold"
            >
              Voir les réalisations
            </Link>
          </div>
        </div>
        <div className="grid gap-3">
          <figure className="bg-ink">
            <img
              src="/media/trio-wax.jpg"
              alt="Conférencier wax, sac à main à motifs et sacoche noire siglés JMH Pro'Sign"
              width={1088}
              height={616}
              className="h-auto w-full"
            />
          </figure>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/media/shopping.jpg"
              alt="Sacs shopping bleus à bandes wax"
              width={1088}
              height={656}
              className="h-full w-full object-cover"
            />
            <img
              src="/media/sacs-dos.jpg"
              alt="Sacs à dos personnalisés de l'atelier"
              width={1088}
              height={620}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-foam">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="flex flex-col">
              <p className="text-sm font-semibold text-ember">{service.index}</p>
              <h2 className="mt-2 text-2xl font-bold">{service.title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{service.lead}</p>
              <Link to="/services" hash={service.id} className="mt-4 text-sm font-semibold text-cobalt">
                Détail du service
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-ember uppercase">L'atelier</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Chez JMH, l'expertise sert votre image.
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Sacs, impressions et graphisme, tenus ensemble. Le produit doit être net, durable,
            et reconnaissable comme le vôtre — pas comme un article générique.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {engagements.map((item) => (
            <li key={item.title} className="border border-line bg-foam p-5">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-cobalt text-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-3xl font-bold text-balance">{company.promise}</p>
            <p className="mt-2 max-w-xl text-paper/85">
              Dites-nous la pièce, la quantité et la date. On répond sur WhatsApp.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center bg-paper px-5 text-sm font-semibold text-ink"
          >
            Écrire à l'atelier
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
