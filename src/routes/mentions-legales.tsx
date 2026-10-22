import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/shell";
import { company, legal } from "@/data/site";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — JMH Pro'Sign" },
      {
        name: "description",
        content: "Mentions légales du site JMH Pro'Sign : identité de l'entreprise, contact, hébergeur et données personnelles.",
      },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-5 py-14">
        <h1 className="text-4xl font-extrabold sm:text-5xl">Mentions légales</h1>

        <h2 className="mt-10 text-2xl font-bold">Éditeur du site</h2>
        <ul className="mt-3 space-y-1 leading-relaxed">
          <li>
            {legal.name} (nom commercial : {company.name}), {legal.form} au capital de {legal.capital}
          </li>
          <li>Siège : {company.city}, {company.country}</li>
          <li>RCCM : {legal.rccm}</li>
          <li>NCC : {legal.ncc}</li>
          <li>Email : {company.email}</li>
          <li>Téléphone : {company.phones.map((phone) => phone.display).join(" / ")}</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold">Hébergeur</h2>
        <p className="mt-3 leading-relaxed">
          {legal.host} — {legal.hostSite}
        </p>

        <h2 className="mt-10 text-2xl font-bold">Données personnelles</h2>
        <p className="mt-3 leading-relaxed text-muted">
          Le formulaire de devis ne stocke aucune donnée sur ce site : le message que vous
          rédigez s'ouvre dans WhatsApp et n'est transmis qu'à {company.name}. Les polices du
          site sont chargées depuis Google Fonts. Pour toute question ou demande de suppression
          de vos échanges, écrivez à {company.email}.
        </p>

        <h2 className="mt-10 text-2xl font-bold">Propriété intellectuelle</h2>
        <p className="mt-3 leading-relaxed text-muted">
          Le logo, les photos, les visuels et les textes de ce site appartiennent à{" "}
          {company.name}. Toute reproduction sans accord écrit est interdite.
        </p>
      </section>
    </SiteShell>
  );
}
