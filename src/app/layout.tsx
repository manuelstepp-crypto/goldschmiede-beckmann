import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Goldschmiede Beckmann | Handgefertigter Schmuck seit 1993",
    template: "%s | Goldschmiede Beckmann",
  },
  description:
    "Goldschmiede-Atelier in der Altstadt von Neu-Isenburg. Individuelle Schmuckstücke, Verlobungsringe, Eheringe und mehr. Seit 1993 mit Leidenschaft handgefertigt von Stefan Beckmann.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
