import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-warm-gray border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-gold mb-4">
              Goldschmiede Beckmann
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Ehrliche und echte Goldschmiedekunst seit 1993. Individuelle
              Schmuckstücke, gefertigt mit Leidenschaft in Neu-Isenburg.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Navigation
            </h4>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-sm text-text-muted hover:text-gold transition-colors"
              >
                Start
              </Link>
              <Link
                href="/schmuck"
                className="block text-sm text-text-muted hover:text-gold transition-colors"
              >
                Schmuck
              </Link>
              <Link
                href="/ladengeschaeft"
                className="block text-sm text-text-muted hover:text-gold transition-colors"
              >
                Atelier
              </Link>
              <Link
                href="/kontakt"
                className="block text-sm text-text-muted hover:text-gold transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Kontakt
            </h4>
            <div className="space-y-3 text-sm text-text-muted">
              <p>Löwengasse 25</p>
              <p>Neu-Isenburg</p>
              <p>
                <a
                  href="tel:061027990779"
                  className="hover:text-gold transition-colors"
                >
                  06102 7990779
                </a>
              </p>
              <p>
                <a
                  href="mailto:beckmann-goldschmiede@web.de"
                  className="hover:text-gold transition-colors"
                >
                  beckmann-goldschmiede@web.de
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="gold-line mt-12 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Goldschmiede Beckmann. Alle Rechte
            vorbehalten.
          </p>
          <p className="text-xs text-text-muted">
            Handgefertigt mit Leidenschaft seit 1993
          </p>
        </div>
      </div>
    </footer>
  );
}
