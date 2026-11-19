import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/shell";
import { reasons, values } from "@/data/site";

export const Route = createFileRoute("/atelier")({
  head: () => ({
    meta: [
      { title: "L'atelier — JMH Pro'Sign" },
      { name: "description", content: "Mission, valeurs et engagements de JMH Pro'Sign, atelier de sacs personnalisés et d'impression à Abidjan." },
    ],
  }),
  component: AtelierPage,
});

function AtelierPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-sm font-semibold tracking-widest text-ember uppercase">L'atelier</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold sm:text-5xl">
          Une référence utile, pas une vitrine vide.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          JMH Pro'Sign veut compter parmi les maisons qui fabriquent des sacs, impriment juste, et
          proposent des solutions graphiques qui tiennent. Chaque client repart avec une pièce
          adaptée, durable, et qui valorise sa marque.
        </p>
      </section>

      <section className="border-t border-line bg-foam">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Mission</h2>
            <ul className="mt-5 space-y-4 leading-relaxed">
              <li>Produire des articles fiables, soignés et professionnels.</li>
              <li>
                Accompagner particuliers, entreprises et organisations pour que leur image se voie.
              </li>
              <li>Rester rapides, clairs, et joignables.</li>
            </ul>
          </div>
          <img
            src="/media/trio-wax.jpg"
            alt="Conférencier wax et sacs à main en tissu wax siglés JMH Pro'Sign"
            width={1088}
            height={616}
            className="h-auto w-full border border-line"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-3xl font-bold">Pourquoi passer par JMH</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {reasons.map((reason) => (
            <li key={reason.title} className="border border-line p-5">
              <h3 className="text-xl font-bold">{reason.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{reason.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-3xl font-bold">Valeurs</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <li key={value.title}>
                <p className="text-sm font-semibold text-ember">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-bold">{value.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{value.text}</p>
              </li>
            ))}
          </ol>
          <Link
            to="/contact"
            className="mt-10 inline-flex h-12 items-center bg-ember px-5 text-sm font-semibold text-paper"
          >
            Parler d'une commande
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
