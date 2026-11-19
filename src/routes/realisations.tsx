import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteShell } from "@/components/site/shell";
import { categories, familles, lookbook, offerings, type OfferingCat } from "@/data/site";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — JMH Pro'Sign" },
      { name: "description", content: "Sacs, textile marqué, papeterie et supports imprimés : découvrez les pièces proposées par JMH Pro'Sign à Abidjan." },
    ],
  }),
  component: RealisationsPage,
});

function RealisationsPage() {
  const [active, setActive] = useState<(typeof categories)[number]["id"]>("tout");

  const pieces = useMemo(
    () => (active === "tout" ? offerings : offerings.filter((item) => item.cat === active)),
    [active],
  );
  const groupes = useMemo(() => {
    const photos =
      active === "tout" ? lookbook : lookbook.filter((item) => item.cats.includes(active as OfferingCat));
    return familles
      .map((famille) => ({ ...famille, photos: photos.filter((p) => p.famille === famille.id) }))
      .filter((groupe) => groupe.photos.length > 0);
  }, [active]);

  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-sm font-semibold tracking-widest text-ember uppercase">Réalisations</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold sm:text-5xl">
          Ce qui sort de l'atelier.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Sacs fabriqués à l'atelier, textiles et accessoires sélectionnés auprès de nos
          fournisseurs, personnalisés par JMH.
        </p>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrer les réalisations">
          {categories.map((category) => {
            const selected = active === category.id;
            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(category.id)}
                className={
                  selected
                    ? "h-11 bg-ink px-4 text-sm font-semibold text-paper"
                    : "h-11 border border-line bg-foam px-4 text-sm font-semibold"
                }
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {pieces.map((piece) => (
            <li key={piece.title} className="border border-line bg-foam p-5">
              <h2 className="text-xl font-bold">{piece.title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{piece.detail}</p>
            </li>
          ))}
        </ul>

        {groupes.length > 0 ? (
          groupes.map((groupe) => (
            <div key={groupe.id} className="mt-12">
              <h2 className="text-2xl font-bold">{groupe.titre}</h2>
              <p className="mt-2 text-muted">{groupe.texte}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {groupe.photos.map((photo) => (
                  <figure key={photo.src} className="border border-line bg-foam">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      width={1088}
                      height={640}
                      loading="lazy"
                      className="h-auto w-full"
                    />
                    <figcaption className="px-4 py-3 text-sm font-medium">{photo.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="mt-12 border border-line bg-cobalt px-6 py-10 text-paper">
            <h2 className="text-2xl font-bold">Impression sur tout support</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-paper/85">
              Bâches, kakemonos, flyers, affiches, stickers et cartes PVC. Le fichier est préparé
              ici, puis imprimé pour tenir dehors comme en main.
            </p>
          </div>
        )}
      </section>
    </SiteShell>
  );
}
