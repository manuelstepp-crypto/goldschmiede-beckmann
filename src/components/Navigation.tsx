"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const schmuckLinks = [
  { href: "/schmuck#ringe", label: "Ringe" },
  { href: "/schmuck#ohrringe", label: "Ohrringe" },
  { href: "/schmuck#anhaenger", label: "Anhänger" },
  { href: "/schmuck#ketten", label: "Ketten & Armbänder" },
  { href: "/schmuck#broschen", label: "Broschen" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [schmuckOpen, setSchmuckOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/90 backdrop-blur-md border-b border-gold/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo/logo.jpg"
            alt="Goldschmiede Beckmann"
            width={48}
            height={48}
            className="rounded-full border border-gold/30 group-hover:border-gold transition-colors"
          />
          <div className="hidden sm:block">
            <span className="font-serif text-lg text-gold tracking-wide">
              Goldschmiede
            </span>
            <span className="block text-xs tracking-[0.3em] uppercase text-text-muted">
              Beckmann
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm tracking-widest uppercase text-text-light/80 hover:text-gold transition-colors"
          >
            Start
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => setSchmuckOpen(true)}
            onMouseLeave={() => setSchmuckOpen(false)}
          >
            <Link
              href="/schmuck"
              className="text-sm tracking-widest uppercase text-text-light/80 hover:text-gold transition-colors"
            >
              Schmuck
            </Link>
            {schmuckOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="bg-warm-gray border border-gold/20 rounded-lg py-2 min-w-[200px] shadow-2xl">
                  {schmuckLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-5 py-2.5 text-sm text-text-light/80 hover:text-gold hover:bg-gold/5 transition-colors"
                      onClick={() => setSchmuckOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            href="/ladengeschaeft"
            className="text-sm tracking-widest uppercase text-text-light/80 hover:text-gold transition-colors"
          >
            Atelier
          </Link>
          <Link
            href="/kontakt"
            className="text-sm tracking-widest uppercase text-text-light/80 hover:text-gold transition-colors px-5 py-2 border border-gold/40 rounded-full hover:bg-gold/10 transition-all"
          >
            Kontakt
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gold"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-warm-gray border-t border-gold/10 px-6 py-6 space-y-4">
          <Link
            href="/"
            className="block text-sm tracking-widest uppercase text-text-light/80 hover:text-gold"
            onClick={() => setMobileOpen(false)}
          >
            Start
          </Link>
          <Link
            href="/schmuck"
            className="block text-sm tracking-widest uppercase text-text-light/80 hover:text-gold"
            onClick={() => setMobileOpen(false)}
          >
            Schmuck
          </Link>
          {schmuckLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm text-text-muted hover:text-gold pl-4"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/ladengeschaeft"
            className="block text-sm tracking-widest uppercase text-text-light/80 hover:text-gold"
            onClick={() => setMobileOpen(false)}
          >
            Atelier
          </Link>
          <Link
            href="/kontakt"
            className="block text-sm tracking-widest uppercase text-gold"
            onClick={() => setMobileOpen(false)}
          >
            Kontakt
          </Link>
        </div>
      )}
    </header>
  );
}
