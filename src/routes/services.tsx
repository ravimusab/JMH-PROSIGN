import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/shell";
import { services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — JMH Pro'Sign" },
      { name: "description", content: "Fabrication de sacs personnalisés, impression sur tout support (textile, bâches, flyers, PVC) et conception graphique à Abidjan." },
    ],
  }),
  component: ServicesPage,
});

const visuals: Record<string, { src: string; alt: string }> = {
  sacs: {
    src: "/media/porte-voyage.jpg",
    alt: "Porte-document en tissu wax et sac de voyage siglés JMH",
  },
  impression: {
    src: "/media/textile.jpg",
    alt: "Casquettes, cartes, stylos, t-shirts et polos imprimés",
  },
  graphisme: {
    src: "/media/catalogue.jpg",
    alt: "Planche de pièces siglées : carnets, sacs, housses et porte-documents",
  },
};

function ServicesPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-sm font-semibold tracking-widest text-ember uppercase">Services</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold sm:text-5xl">
          Trois métiers, un seul atelier.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          On fabrique le sac, on imprime le support, on dessine la marque. Chaque commande est
          suivie du brief jusqu'à la pièce en main.
        </p>
      </section>

      {services.map((service) => {
        const visual = visuals[service.id];
        return (
          <article key={service.id} id={service.id} className="border-t border-line">
            <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold text-ember">{service.index}</p>
                <h2 className="mt-2 text-3xl font-bold">{service.title}</h2>
                <p className="mt-4 leading-relaxed text-muted">{service.lead}</p>
                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 size-2 shrink-0 bg-ember" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  search={{ besoin: service.id === "impression" ? "signaletique" : service.id }}
                  className="mt-8 inline-flex h-12 items-center bg-ink px-5 text-sm font-semibold text-paper"
                >
                  Devis — {service.title}
                </Link>
              </div>
              <img
                src={visual.src}
                alt={visual.alt}
                width={1088}
                height={640}
                className="h-auto w-full border border-line"
              />
            </div>
          </article>
        );
      })}
    </SiteShell>
  );
}
