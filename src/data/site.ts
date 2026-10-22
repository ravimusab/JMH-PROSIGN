export const company = {
  name: "JMH Pro'Sign",
  city: "Abidjan",
  country: "Côte d'Ivoire",
  line: "Votre image, notre mission.",
  promise: "La qualité qui vous représente.",
  email: "jmhprosign@gmail.com",
  phones: [
    { display: "07 07 16 46 14", tel: "+2250707164614" },
    { display: "07 09 30 81 62", tel: "+2250709308162" },
  ],
  whatsapp: "2250143728777",
  whatsappDisplay: "+225 01 43 72 87 77",
} as const;

export const legal = {
  name: "JMH PROSIGN",
  form: "SARL",
  capital: "1 000 000 FCFA",
  rccm: "CI-ABJ-03-2021-B12-05601",
  ncc: "2196055K",
  host: "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
  hostSite: "https://vercel.com",
} as const;

export const services = [
  {
    id: "sacs",
    index: "01",
    title: "Fabrication de sacs",
    lead: "Des sacs durables et personnalisés, pour le bureau, la boutique, la cérémonie ou l'événement.",
    points: [
      "Sacs en matière résistante, plastique ou papier",
      "Impression ou marquage à votre image",
      "Formats boutiques, entreprises, cérémonies et événements",
      "Conférenciers, sacs à main, sacs à dos, sacs de voyage, sport et shopping",
    ],
  },
  {
    id: "impression",
    index: "02",
    title: "Impression sur tout support",
    lead: "Une impression nette, durable et lisible, du textile au grand format.",
    points: [
      "T-shirts et polos personnalisés",
      "Bâches et kakemonos",
      "Flyers et affiches",
      "Stickers, cartes PVC, agendas et documents",
    ],
  },
  {
    id: "graphisme",
    index: "03",
    title: "Conception graphique",
    lead: "Du premier croquis à la pièce livrée, le design est tenu dans le même atelier.",
    points: [
      "Logos",
      "Flyers et affiches d'événements",
      "Cartes de visite",
      "Identité visuelle complète",
    ],
  },
] as const;

export type OfferingCat = "sacs" | "textile" | "papeterie" | "signaletique";

export const categories: { id: "tout" | OfferingCat; label: string }[] = [
  { id: "tout", label: "Tout" },
  { id: "sacs", label: "Sacs" },
  { id: "textile", label: "Textile" },
  { id: "papeterie", label: "Papeterie" },
  { id: "signaletique", label: "Signalétique" },
];

export const offerings: { cat: OfferingCat; title: string; detail: string }[] = [
  {
    cat: "sacs",
    title: "Conférencier",
    detail: "Rabat sombre et tissu wax, pour réunions, remises et cadeaux d'entreprise.",
  },
  {
    cat: "sacs",
    title: "Sac à main",
    detail: "Bandoulière ou porté main, motifs wax ou finition unie, logo en façade.",
  },
  {
    cat: "sacs",
    title: "Sac en bandoulière",
    detail: "Format compact, poche zippée, tissu imprimé ou toile unie.",
  },
  {
    cat: "sacs",
    title: "Sac à dos",
    detail: "École, équipe ou terrain. Plusieurs volumes, marquage poitrine ou dos.",
  },
  {
    cat: "sacs",
    title: "Sac de voyage",
    detail: "Souple ou structuré, anses renforcées, grande surface de marquage.",
  },
  {
    cat: "sacs",
    title: "Porte-document",
    detail: "Pour dossiers, ordinateurs et pièces de cérémonie. Toile, simili ou wax.",
  },
  {
    cat: "sacs",
    title: "Sac shopping",
    detail: "Cabas boutique et événement, anses longues, impression grand format.",
  },
  {
    cat: "sacs",
    title: "Sac sport & banane",
    detail: "Sac de sport, sacoche et banane pour clubs, staff et goodies.",
  },
  {
    cat: "sacs",
    title: "Housse",
    detail: "Housse de protection siglée, pour matériel, tenue ou cadeau.",
  },
  {
    cat: "textile",
    title: "T-shirts et polos",
    detail: "Couleurs unies, logo poitrine, dos ou manche. Séries équipes et événements.",
  },
  {
    cat: "textile",
    title: "Casquettes",
    detail: "Casquettes et bob, broderie ou impression du sigle.",
  },
  {
    cat: "papeterie",
    title: "Cartes de visite",
    detail: "Recto verso, QR code possible, papier qui tient en main.",
  },
  {
    cat: "papeterie",
    title: "Stylos de marque",
    detail: "Stylos métal en écrin, gravés ou imprimés.",
  },
  {
    cat: "papeterie",
    title: "Blocs-notes et agendas",
    detail: "Carnets et agendas millésimés, couverture siglée.",
  },
  {
    cat: "signaletique",
    title: "Bâches et kakemonos",
    detail: "Supports grand format pour façade, stand et cérémonie.",
  },
  {
    cat: "signaletique",
    title: "Flyers et affiches",
    detail: "Annonces d'événements, promotions et communications internes.",
  },
  {
    cat: "signaletique",
    title: "Stickers",
    detail: "Autocollants logo, packaging et signalétique de proximité.",
  },
  {
    cat: "signaletique",
    title: "Cartes PVC",
    detail: "Badges et cartes rigides, impression nette et durable.",
  },
];

export const lookbook: { cats: OfferingCat[]; src: string; alt: string; caption: string }[] = [
  {
    cats: ["sacs"],
    src: "/media/trio-wax.jpg",
    alt: "Conférencier wax, sac à main à motifs et sacoche noire siglés JMH Pro'Sign",
    caption: "Wax & conférencier",
  },
  {
    cats: ["sacs"],
    src: "/media/sacs-dos.jpg",
    alt: "Trois sacs à dos personnalisés JMH Pro'Sign posés sur une étagère",
    caption: "Sacs à dos",
  },
  {
    cats: ["sacs"],
    src: "/media/shopping.jpg",
    alt: "Deux sacs shopping bleus à bandes wax, marque JMH Pro'Sign",
    caption: "Sacs shopping",
  },
  {
    cats: ["sacs"],
    src: "/media/porte-voyage.jpg",
    alt: "Porte-document wax et sac de voyage clair siglés JMH Pro'Sign",
    caption: "Porte-document & voyage",
  },
  {
    cats: ["sacs"],
    src: "/media/dos-voyage.jpg",
    alt: "Sac à dos, sac damier et sac de voyage sur une étagère",
    caption: "Dos, main et voyage",
  },
  {
    cats: ["sacs"],
    src: "/media/sport-main.jpg",
    alt: "Sac sport, sac à main, sac à dos et sacoche de l'atelier JMH",
    caption: "Sport, main, dos",
  },
  {
    cats: ["sacs"],
    src: "/media/sacs-neige.jpg",
    alt: "Sacs à dos et sacs de voyage de plusieurs couleurs avec le logo JMH",
    caption: "Séries couleur",
  },
  {
    cats: ["sacs"],
    src: "/media/accessoires.jpg",
    alt: "Sacoche, tote bag, banane et deux sacs de sport personnalisés",
    caption: "Formats du quotidien",
  },
  {
    cats: ["textile"],
    src: "/media/textile.jpg",
    alt: "Casquettes, cartes de visite, stylos, t-shirts et polos aux couleurs JMH Pro'Sign",
    caption: "Textile & goodies",
  },
  {
    cats: ["sacs", "papeterie"],
    src: "/media/catalogue.jpg",
    alt: "Planche catalogue : blocs-notes, agendas, porte-documents, sacs et housses",
    caption: "Planche atelier",
  },
];

export const engagements = [
  {
    title: "Écoute",
    text: "On part du besoin réel : usage, quantité, support et rendu du logo.",
  },
  {
    title: "Délais",
    text: "La date annoncée est la date tenue. Pas de surprise le jour de l'événement.",
  },
  {
    title: "Prix justes",
    text: "Une qualité d'atelier, à des tarifs qui restent accessibles.",
  },
  {
    title: "Après-vente",
    text: "Si une pièce ne convient pas, on reprend le sujet. Le suivi ne s'arrête pas à la livraison.",
  },
] as const;

export const reasons = [
  {
    title: "Une équipe qui fait le métier",
    text: "Fabrication, design et impression sont dans la même maison.",
  },
  {
    title: "Plusieurs supports",
    text: "Sacs, textiles, rigides, papiers, PVC. Un seul interlocuteur.",
  },
  {
    title: "Des outils nets",
    text: "Couleurs tenues, impression précise, pièces qui durent à l'usage.",
  },
  {
    title: "Accompagnement complet",
    text: "Du premier croquis jusqu'à la série livrée, vous n'êtes pas laissé seul.",
  },
] as const;

export const values = [
  { title: "Intégrité", text: "Transparence sur le prix, le délai et ce qui est faisable." },
  { title: "Innovation", text: "De nouvelles coupes, de nouveaux motifs, de nouvelles idées de marquage." },
  { title: "Excellence", text: "Chaque commande est visée comme une pièce qu'on signerait." },
  { title: "Respect", text: "Du client, de sa marque, et de la parole donnée." },
] as const;

export const besoins = [
  { id: "sacs", label: "Sacs personnalisés" },
  { id: "textile", label: "Textile (t-shirts, polos, casquettes)" },
  { id: "papeterie", label: "Papeterie et goodies" },
  { id: "signaletique", label: "Bâches, flyers, stickers, PVC" },
  { id: "graphisme", label: "Logo et identité visuelle" },
  { id: "autre", label: "Autre besoin" },
] as const;
