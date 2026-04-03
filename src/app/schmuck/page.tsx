import type { Metadata } from "next";
import { JewelryGallery } from "@/components/JewelryGallery";

export const metadata: Metadata = {
  title: "Schmuck",
  description:
    "Entdecken Sie unsere handgefertigte Schmuckkollektion: Ringe, Ohrringe, Anhänger, Ketten, Armbänder und Broschen.",
};

const categories = [
  {
    id: "ringe",
    title: "Ringe",
    description: "Verlobungsringe, Eheringe, Trauringe und Schmuckringe",
    items: [
      { src: "/images/ringe/ring-spirale.jpg", name: "Ring Spirale 750Au Perle & Princess Diamant" },
      { src: "/images/ringe/ring-585au.jpg", name: "Ring 585Au Weißgold-Gelbgold & Brillanten" },
      { src: "/images/ringe/ring-princess.jpg", name: "Ring Princess Diamant 0,46 ct 900Au Gelbgold 750Au Weißgoldfassung" },
      { src: "/images/ringe/diamantring-platin.jpg", name: "Diamantring aus Platin" },
      { src: "/images/ringe/ring-turmalin.jpg", name: "Ring 585Au Gelbgold mit Turmalin" },
      { src: "/images/ringe/diamantring-750au.jpg", name: "Großer Diamantring 750Au Weißgold" },
      { src: "/images/ringe/trauringe-silber.jpg", name: "Trauringe Ag925 Silber geschwärzt mit Goldbuchstaben" },
      { src: "/images/ringe/ring-ebenholz.jpg", name: "Ring Ebenholz Ag925 Silber" },
    ],
  },
  {
    id: "ohrringe",
    title: "Ohrringe",
    description: "Ohrstecker, Ohrhänger und Creolen",
    items: [
      { src: "/images/ohrringe/perlohrstecker.jpg", name: "Perlohrstecker Ag925 Kügelchen 750Au" },
      { src: "/images/ohrringe/ohrhaenger-wurzelholz.jpg", name: "Ohrhänger Ag925 und 750Au Goldbügel mit Wurzelholz" },
      { src: "/images/ohrringe/ohrstecker-blume.jpg", name: "Ohrstecker Blume 750Au Gelbgold" },
      { src: "/images/ohrringe/perlohrstecker-beweglich.jpg", name: "Bewegliche Perlohrstecker 750Au Gelbgold und Akoya Zuchtperlen" },
      { src: "/images/ohrringe/ohrhaenger-perlen.jpg", name: "Ohrhänger 750Au mit Perlen beweglich" },
      { src: "/images/ohrringe/ohrstecker-gelbgold.jpg", name: "Ohrstecker 750Au Gelbgold" },
      { src: "/images/ohrringe/ohrstecker-sudseeperlen.jpg", name: "Ohrstecker Südseeperlen 585Au Gelbgold" },
    ],
  },
  {
    id: "anhaenger",
    title: "Anhänger",
    description: "Einzigartige Anhänger mit Edelsteinen und Perlen",
    items: [
      { src: "/images/anhaenger/lebensbaum.jpg", name: "Anhänger Lebensbaum 585Au" },
      { src: "/images/anhaenger/sudseeperle-brillanten.jpg", name: "Anhänger Südseeperle & Brillanten 750Au" },
      { src: "/images/anhaenger/blau-topas.jpg", name: "Anhänger Blau-Topas Ag925 Silber" },
      { src: "/images/anhaenger/citrin.jpg", name: "Anhänger Citrin Ag925 Silber" },
      { src: "/images/anhaenger/brillantanhaenger.jpg", name: "Brillantanhänger 750Au Weißgold" },
      { src: "/images/anhaenger/turmalin-cabouchon.jpg", name: "Anhänger Turmalin-Cabouchon Ag925 Silber" },
    ],
  },
  {
    id: "ketten",
    title: "Ketten & Armbänder",
    description: "Halsketten, Armreifen und Armbänder",
    items: [
      { src: "/images/ketten/kette-bunte-perlen.jpg", name: "Kette Bunte Perlen mit Magnetverschluss Ag925 Silber" },
      { src: "/images/ketten/armreif-opal.jpg", name: "Armreif Ag925 Silber mit Opaltropfen" },
      { src: "/images/ketten/armband-geflochten.jpg", name: "Armband geflochten Ag925 Silber" },
      { src: "/images/ketten/armreif-handgestrickt.jpg", name: "Armreif handgestrickt Ag925 Silber mit Edelstahl-Verschluss" },
      { src: "/images/ketten/drillingskette.jpg", name: "Drillingskette Ag925 Silber" },
    ],
  },
  {
    id: "broschen",
    title: "Broschen & Manschettenknöpfe",
    description: "Besondere Accessoires für besondere Anlässe",
    items: [
      { src: "/images/broschen/brosche-lapislazuli.jpg", name: "Brosche Lapislazuli Ag925 Silber & 750Au Gelbgold" },
      { src: "/images/broschen/manschettenknopfe.jpg", name: "Manschettenknöpfe Ag925 Silber" },
    ],
  },
];

export default function SchmuckPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">
          Kollektion
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
          Unsere Schmuckstücke
        </h1>
        <p className="text-text-light/70 max-w-2xl mx-auto leading-relaxed">
          Jedes Stück wird mit höchster Sorgfalt und Leidenschaft in meinem
          Atelier handgefertigt. Entdecken Sie die Vielfalt meiner Kollektion.
        </p>
        <div className="gold-line max-w-xs mx-auto mt-8" />
      </div>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="px-5 py-2 text-sm tracking-wider uppercase text-text-muted border border-gold/10 rounded-full hover:border-gold/40 hover:text-gold transition-colors"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </div>

      {/* Categories */}
      {categories.map((category) => (
        <section key={category.id} id={category.id} className="mb-24 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">
                {category.title}
              </h2>
              <p className="text-text-muted">{category.description}</p>
              <div className="gold-line max-w-[100px] mt-4" />
            </div>

            <JewelryGallery items={category.items} />
          </div>
        </section>
      ))}
    </div>
  );
}
