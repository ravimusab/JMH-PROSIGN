import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { QuoteForm } from "@/components/site/quote-form";
import { SiteShell } from "@/components/site/shell";
import { company, besoins } from "@/data/site";
import { z } from "zod";

const contactSearch = z.object({
  besoin: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: contactSearch,
  head: () => ({
    meta: [
      { title: "Contact — JMH Pro'Sign" },
      { name: "description", content: "Demandez un devis à JMH Pro'Sign : téléphone, WhatsApp, email. Sacs personnalisés, impression et graphisme à Abidjan." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { besoin } = Route.useSearch();
  const known = besoins.some((item) => item.id === besoin);

  return (
    <SiteShell>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold tracking-widest text-ember uppercase">Contact</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Écrire à l'atelier.</h1>
          <p className="mt-4 leading-relaxed text-muted">
            Devis, quantités, délais ou simple question. On répond aux entreprises comme aux
            particuliers.
          </p>

          <ul className="mt-8 space-y-4">
            {company.phones.map((phone) => (
              <li key={phone.tel}>
                <a href={`tel:${phone.tel}`} className="flex items-center gap-3 text-base font-semibold">
                  <Phone className="size-5 text-cobalt" />
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                className="flex items-center gap-3 font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-5 text-cobalt" />
                WhatsApp {company.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 break-all font-semibold">
                <Mail className="size-5 shrink-0 text-cobalt" />
                {company.email}
              </a>
            </li>
            <li className="flex items-center gap-3 font-semibold">
              <MapPin className="size-5 text-cobalt" />
              {company.city} — {company.country}
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <QuoteForm initialBesoin={known && besoin ? besoin : ""} />
        </div>
      </section>

      <img
        src="/media/accessoires.jpg"
        alt="Sacoche, tote, banane et sacs de sport de la gamme JMH Pro'Sign"
        width={1088}
        height={656}
        className="h-auto w-full"
      />
    </SiteShell>
  );
}
