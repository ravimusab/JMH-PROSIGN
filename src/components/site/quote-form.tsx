import { useState, type FormEvent } from "react";
import { besoins, company } from "@/data/site";

type Fields = {
  nom: string;
  organisation: string;
  telephone: string;
  besoin: string;
  message: string;
};

const empty: Fields = {
  nom: "",
  organisation: "",
  telephone: "",
  besoin: "",
  message: "",
};

export function QuoteForm({ initialBesoin = "" }: { initialBesoin?: string }) {
  const [fields, setFields] = useState<Fields>({ ...empty, besoin: initialBesoin });
  const [error, setError] = useState("");
  const [opened, setOpened] = useState(false);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setError("");
    setOpened(false);
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    if (fields.nom.trim().length < 2) {
      setError("Indiquez votre nom.");
      return;
    }
    if (fields.telephone.trim().length < 8) {
      setError("Indiquez un numéro joignable.");
      return;
    }
    if (!fields.besoin) {
      setError("Choisissez le type de besoin.");
      return;
    }
    if (fields.message.trim().length < 8) {
      setError("Décrivez la pièce, la quantité ou l'échéance.");
      return;
    }

    const label = besoins.find((item) => item.id === fields.besoin)?.label ?? fields.besoin;
    const lines = [
      "Bonjour JMH Pro'Sign,",
      "",
      "Je souhaite un devis.",
      `Nom : ${fields.nom.trim()}`,
      fields.organisation.trim() ? `Organisation : ${fields.organisation.trim()}` : "",
      `Téléphone : ${fields.telephone.trim()}`,
      `Besoin : ${label}`,
      `Message : ${fields.message.trim()}`,
    ].filter(Boolean);

    const url = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpened(true);
  }

  return (
    <form onSubmit={submit} className="grid gap-4 bg-foam p-5 sm:p-6" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium">
          Nom
          <input
            name="nom"
            autoComplete="name"
            value={fields.nom}
            onChange={(event) => update("nom", event.target.value)}
            className="h-12 border border-line bg-paper px-3 font-normal"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Organisation
          <input
            name="organisation"
            autoComplete="organization"
            value={fields.organisation}
            onChange={(event) => update("organisation", event.target.value)}
            className="h-12 border border-line bg-paper px-3 font-normal"
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-medium">
        Téléphone
        <input
          name="telephone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={fields.telephone}
          onChange={(event) => update("telephone", event.target.value)}
          className="h-12 border border-line bg-paper px-3 font-normal"
        />
      </label>
      <label className="grid gap-1.5 text-sm font-medium">
        Besoin
        <select
          name="besoin"
          value={fields.besoin}
          onChange={(event) => update("besoin", event.target.value)}
          className="h-12 border border-line bg-paper px-3 font-normal"
        >
          <option value="">Choisir</option>
          {besoins.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium">
        Votre demande
        <textarea
          name="message"
          rows={5}
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          className="border border-line bg-paper px-3 py-3 font-normal leading-relaxed"
          placeholder="Quantité, format, délai, ou une phrase sur l'usage."
        />
      </label>
      {error ? (
        <p className="text-sm font-medium text-ember" role="alert">
          {error}
        </p>
      ) : null}
      <button type="submit" className="h-12 bg-ember text-sm font-semibold text-paper">
        Envoyer sur WhatsApp
      </button>
      {opened ? (
        <p className="text-sm leading-relaxed text-muted">
          WhatsApp s'ouvre avec votre message. S'il reste fermé, écrivez au {company.whatsappDisplay}.
        </p>
      ) : (
        <p className="text-sm leading-relaxed text-muted">
          Le message part sur WhatsApp. Rien n'est stocké sur le site.
        </p>
      )}
    </form>
  );
}
