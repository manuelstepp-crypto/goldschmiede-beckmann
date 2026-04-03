import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    src: "/images/ringe/ring-princess.jpg",
    name: "Diamantringe",
    category: "Ringe",
  },
  {
    src: "/images/ohrringe/ohrhaenger-perlen.jpg",
    name: "Perlohrringe",
    category: "Ohrringe",
  },
  {
    src: "/images/anhaenger/sudseeperle-brillanten.jpg",
    name: "Brillantanhänger",
    category: "Anhänger",
  },
  {
    src: "/images/ketten/kette-bunte-perlen.jpg",
    name: "Perlenketten",
    category: "Ketten",
  },
];

const services = [
  {
    title: "Verlobungsringe",
    desc: "Der perfekte Ring für den wichtigsten Moment",
    icon: "💎",
  },
  {
    title: "Eheringe & Trauringe",
    desc: "Symbol Ihrer ewigen Verbundenheit",
    icon: "💍",
  },
  {
    title: "Halsketten & Anhänger",
    desc: "Elegante Begleiter für jeden Anlass",
    icon: "✨",
  },
  {
    title: "Ohrringe",
    desc: "Von klassisch bis extravagant",
    icon: "🌟",
  },
  {
    title: "Armbänder",
    desc: "Handgefertigte Unikate am Handgelenk",
    icon: "⭐",
  },
  {
    title: "Lose Diamanten & Edelsteine",
    desc: "Erlesene Steine für Ihr Wunschstück",
    icon: "💠",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/laden/laden-1.jpg"
            alt="Goldschmiede Beckmann Atelier"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="animate-fade-in-up">
            <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-6">
              Seit 1993 in Neu-Isenburg
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1]">
              Goldschmiede
              <br />
              <span className="gold-shimmer">Beckmann</span>
            </h1>
          </div>
          <p className="animate-fade-in-up-delay text-lg md:text-xl text-text-light/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ehrliche und echte Goldschmiedekunst. Individuelle Schmuckstücke,
            die auf Ihre persönlichen Wünsche abgestimmt sind.
          </p>
          <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schmuck"
              className="inline-block px-8 py-4 bg-gold text-charcoal font-medium text-sm tracking-widest uppercase rounded-full hover:bg-gold-light transition-colors"
            >
              Kollektion entdecken
            </Link>
            <Link
              href="/kontakt"
              className="inline-block px-8 py-4 border border-gold/40 text-gold text-sm tracking-widest uppercase rounded-full hover:bg-gold/10 transition-colors"
            >
              Beratung vereinbaren
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold/50" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">
                Willkommen
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 leading-tight">
                Persönlichkeit und
                <br />
                <span className="text-gold">Zufriedenheit</span>
                <br />
                im Fokus
              </h2>
              <div className="space-y-6 text-text-light/70 leading-relaxed">
                <p>
                  Sie sind auf der Suche nach individuellen und exklusiven
                  Schmuckstücken, die auf Ihre persönlichen Wünsche und
                  Anforderungen abgestimmt sind? Dann sind Sie bei mir genau
                  richtig.
                </p>
                <p>
                  Die Goldschmiede Beckmann ist ein Goldschmiede-Atelier inmitten
                  der schönen Altstadt von Neu-Isenburg. Seit 1993 biete ich
                  hochwertigen Schmuck für jeden Anlass zu den verschiedensten
                  Preisklassen an.
                </p>
                <p>
                  Als Inhaber stehe ich Ihnen, Herr Stefan Beckmann, persönlich
                  und beratend zur Seite.
                </p>
              </div>
              <Link
                href="/ladengeschaeft"
                className="inline-block mt-8 text-gold text-sm tracking-widest uppercase hover:text-gold-light transition-colors group"
              >
                Mehr über das Atelier
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </Link>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                    <Image
                      src="/images/ringe/ring-spirale.jpg"
                      alt="Handgefertigter Ring"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src="/images/broschen/brosche-lapislazuli.jpg"
                      alt="Brosche mit Lapislazuli"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src="/images/ohrringe/ohrstecker-blume.jpg"
                      alt="Blumen Ohrstecker"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                    <Image
                      src="/images/anhaenger/lebensbaum.jpg"
                      alt="Lebensbaum Anhänger"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 border border-gold/10 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">
              Ausgewählte Stücke
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white">
              Unsere Kollektion
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <Link
                key={item.name}
                href="/schmuck"
                className="group relative aspect-[3/4] overflow-hidden rounded-lg"
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs tracking-[0.3em] uppercase text-gold mb-1">
                    {item.category}
                  </p>
                  <p className="font-serif text-xl text-white">{item.name}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/schmuck"
              className="inline-block px-8 py-4 border border-gold/40 text-gold text-sm tracking-widest uppercase rounded-full hover:bg-gold/10 transition-colors"
            >
              Alle Schmuckstücke ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">
              Unser Angebot
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
              Hochwertiger Schmuck für jeden Anlass
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 bg-warm-gray/50 border border-gold/5 rounded-xl hover:border-gold/20 transition-colors group"
              >
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h3 className="font-serif text-xl text-white mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-text-muted">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-warm-gray relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/laden/laden-4.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">
            Persönliche Beratung
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
            Ihr Wunschstück wartet
          </h2>
          <p className="text-text-light/70 mb-10 leading-relaxed">
            Besuchen Sie mich in meinem Atelier in der Löwengasse 25 in
            Neu-Isenburg. Ich freue mich darauf, Sie mit Leidenschaft und
            Engagement zu beraten.
          </p>
          <Link
            href="/kontakt"
            className="inline-block px-8 py-4 bg-gold text-charcoal font-medium text-sm tracking-widest uppercase rounded-full hover:bg-gold-light transition-colors"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
