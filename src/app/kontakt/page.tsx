import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie die Goldschmiede Beckmann in Neu-Isenburg. Löwengasse 25, Tel: 06102 7990779.",
};

export default function KontaktPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">
            Kontakt
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
            Sprechen Sie mich an
          </h1>
          <p className="text-text-light/70 max-w-2xl mx-auto leading-relaxed">
            Ich freue mich auf Ihren Besuch oder Ihre Nachricht. Vereinbaren Sie
            gerne einen Termin für eine persönliche Beratung.
          </p>
          <div className="gold-line max-w-xs mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-2xl text-white mb-8">
              Goldschmiede Beckmann
            </h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gold text-sm tracking-wider uppercase mb-1">
                    Adresse
                  </h3>
                  <p className="text-text-light/80">
                    Löwengasse 25
                    <br />
                    Neu-Isenburg, Deutschland
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gold text-sm tracking-wider uppercase mb-1">
                    Telefon
                  </h3>
                  <a
                    href="tel:061027990779"
                    className="text-text-light/80 hover:text-gold transition-colors"
                  >
                    06102 7990779
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gold text-sm tracking-wider uppercase mb-1">
                    E-Mail
                  </h3>
                  <a
                    href="mailto:beckmann-goldschmiede@web.de"
                    className="text-text-light/80 hover:text-gold transition-colors"
                  >
                    beckmann-goldschmiede@web.de
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gold text-sm tracking-wider uppercase mb-1">
                    Öffnungszeiten
                  </h3>
                  <div className="text-text-light/80 space-y-1 text-sm">
                    <div className="flex justify-between gap-8">
                      <span>Montag</span>
                      <span className="text-text-muted">10:00 - 13:00 & 15:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Dienstag</span>
                      <span className="text-text-muted">10:00 - 13:00 & 15:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Mittwoch</span>
                      <span className="text-text-muted/50">geschlossen</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Donnerstag</span>
                      <span className="text-text-muted">10:00 - 13:00 & 15:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Freitag</span>
                      <span className="text-text-muted">10:00 - 13:00 & 15:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Samstag</span>
                      <span className="text-text-muted">10:00 - 14:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map embed placeholder */}
            <div className="mt-12 aspect-video rounded-xl overflow-hidden relative bg-warm-gray">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.5!2d8.694!3d50.054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTMO2d2VuZ2Fzc2UgMjUsIE5ldS1Jc2VuYnVyZw!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Goldschmiede Beckmann Standort"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-warm-gray border border-gold/10 rounded-2xl p-8 md:p-10">
              <h2 className="font-serif text-2xl text-white mb-2">
                Nachricht senden
              </h2>
              <p className="text-sm text-text-muted mb-8">
                Schreiben Sie mir und ich melde mich zeitnah bei Ihnen.
              </p>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-gold/80 mb-2 tracking-wider uppercase"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-charcoal border border-gold/10 rounded-lg px-4 py-3 text-text-light placeholder-text-muted/50 focus:outline-none focus:border-gold/40 transition-colors"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gold/80 mb-2 tracking-wider uppercase"
                  >
                    E-Mail-Adresse
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-charcoal border border-gold/10 rounded-lg px-4 py-3 text-text-light placeholder-text-muted/50 focus:outline-none focus:border-gold/40 transition-colors"
                    placeholder="ihre@email.de"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-gold/80 mb-2 tracking-wider uppercase"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full bg-charcoal border border-gold/10 rounded-lg px-4 py-3 text-text-light placeholder-text-muted/50 focus:outline-none focus:border-gold/40 transition-colors resize-none"
                    placeholder="Ihre Nachricht..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gold text-charcoal font-medium text-sm tracking-widest uppercase rounded-full hover:bg-gold-light transition-colors"
                >
                  Nachricht absenden
                </button>
              </form>
            </div>

            {/* Image */}
            <div className="mt-8 relative aspect-[2/1] rounded-xl overflow-hidden">
              <Image
                src="/images/laden/laden-3.jpg"
                alt="Goldschmiede Beckmann Werkstatt"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
