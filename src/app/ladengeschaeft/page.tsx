import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atelier & Ladengeschäft",
  description:
    "Besuchen Sie das Goldschmiede-Atelier von Stefan Beckmann in der Altstadt von Neu-Isenburg.",
};

const storeImages = [
  { src: "/images/laden/laden-1.jpg", alt: "Goldschmiede Beckmann - Eingangsbereich" },
  { src: "/images/laden/laden-2.jpg", alt: "Goldschmiede Beckmann - Schmuckvitrinen" },
  { src: "/images/laden/laden-3.jpg", alt: "Goldschmiede Beckmann - Werkstatt" },
  { src: "/images/laden/laden-4.jpg", alt: "Goldschmiede Beckmann - Beratungsbereich" },
  { src: "/images/laden/laden-5.jpg", alt: "Goldschmiede Beckmann - Ausstellung" },
  { src: "/images/laden/laden-6.jpg", alt: "Goldschmiede Beckmann - Atelier" },
];

export default function LadengeschaeftPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">
              Unser Atelier
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">
              Ein Ort für
              <br />
              <span className="text-gold">echte Handwerkskunst</span>
            </h1>
            <div className="space-y-6 text-text-light/70 leading-relaxed">
              <p>
                Ich fertige für meine Kundinnen und Kunden immer individuell
                angepasste Schmuckstücke und freue mich darauf, Sie mit
                Leidenschaft und Engagement zu beraten.
              </p>
              <p>
                Mein Atelier befindet sich inmitten der schönen Altstadt von
                Neu-Isenburg. Hier vereinen sich traditionelle
                Goldschmiedekunst mit modernem Design zu einzigartigen
                Kreationen.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="inline-block mt-8 px-8 py-4 bg-gold text-charcoal font-medium text-sm tracking-widest uppercase rounded-full hover:bg-gold-light transition-colors"
            >
              Termin vereinbaren
            </Link>
          </div>

          <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
            <Image
              src="/images/laden/laden-1.jpg"
              alt="Goldschmiede Beckmann Atelier"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 border border-gold/10 rounded-xl" />
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">
            Impressionen
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Einblicke in unser Atelier
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {storeImages.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-lg group ${
                index === 0 ? "sm:col-span-2 sm:row-span-2 aspect-square" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="bg-warm-gray border border-gold/10 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-white mb-2">Standort</h3>
              <p className="text-sm text-text-muted">
                Löwengasse 25
                <br />
                Neu-Isenburg
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-white mb-2">Öffnungszeiten</h3>
              <div className="text-sm text-text-muted space-y-1">
                <p>Mo, Di, Do, Fr: 10 - 13 & 15 - 18 Uhr</p>
                <p>Sa: 10 - 14 Uhr</p>
                <p>Mi: geschlossen</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-white mb-2">Kontakt</h3>
              <div className="text-sm text-text-muted space-y-1">
                <p>
                  <a href="tel:061027990779" className="hover:text-gold transition-colors">
                    06102 7990779
                  </a>
                </p>
                <p>
                  <a href="mailto:beckmann-goldschmiede@web.de" className="hover:text-gold transition-colors">
                    beckmann-goldschmiede@web.de
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
