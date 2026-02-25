import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Warung Taburai | Makan Santai Rasa Aduhai",
  description:
    "Warung Taburai by Praz Teguh menyajikan masakan rumahan khas Nusantara dengan rempah pilihan. Makan santai, rasa aduhai.",
  openGraph: {
    title: "Warung Taburai | Makan Santai Rasa Aduhai",
    description:
      "Sajian autentik khas Nusantara dari Warung Taburai by Praz Teguh. Makan santai, rasa aduhai.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${fraunces.variable} ${plusJakarta.variable} antialiased flex min-h-screen flex-col bg-[var(--color-background)] text-[var(--color-foreground)]`}
      >
        <a href="#main-content" className="skip-nav">
          Langsung ke konten utama
        </a>
        <Header />
        <main id="main-content" className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
