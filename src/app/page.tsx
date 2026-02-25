import Link from "next/link";
import Image from "next/image";

import HeroSection from "@/components/HeroSection";
import MenuGrid from "@/components/MenuGrid";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerChildren";
import { getGalleryItems, getSignatureItems } from "@/lib/api";

export default async function HomePage() {
  const [signatureItems, galleryItems] = await Promise.all([
    getSignatureItems(),
    getGalleryItems(),
  ]);

  return (
    <div>
      <HeroSection />

      {/* Intro Section */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <FadeIn>
          <p className="separator-ornament text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
            Warisan Cita Rasa
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-bold leading-snug text-[var(--color-foreground)] md:text-4xl">
            Berawal dari Dapur Keluarga di Taburai
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 text-base leading-relaxed text-[var(--color-muted)]">
            Warung Taburai menghadirkan menu khas Nusantara dengan sentuhan modern.
            Kami percaya makanan bukan sekadar santapan, melainkan cerita yang dibagikan
            dari satu meja ke meja lainnya.
          </p>
        </FadeIn>
      </section>

      {/* Menu Andalan */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex items-end justify-between gap-4">
          <FadeIn direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
              Pilihan Terbaik
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-foreground)] md:text-3xl">
              Menu Andalan
            </h3>
          </FadeIn>
          <FadeIn direction="right">
            <Link
              href="/menu"
              className="shrink-0 rounded-full border border-[var(--color-primary)]/20 px-5 py-2.5 text-sm font-medium text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary)] hover:text-white focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:outline-none"
            >
              Lihat semua menu
            </Link>
          </FadeIn>
        </div>
        <MenuGrid
          items={signatureItems}
          className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        />
      </section>

      {/* Highlights */}
      <section className="relative overflow-hidden bg-[var(--color-surface)] py-20 noise-overlay">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
                Kenapa Kami
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-foreground)] md:text-3xl">
                Mengapa Pelanggan Memilih Taburai
              </h3>
            </div>
          </FadeIn>
          <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "Rempah Asli", desc: "Rempah pilihan digiling sendiri setiap pagi oleh tim dapur kami." },
              { title: "Suasana Hangat", desc: "Nuansa kayu dan musik tradisional menciptakan pengalaman bersantap yang tenang." },
              { title: "Layanan Personal", desc: "Tim kami siap menyesuaikan tingkat kepedasan dan preferensi rasa Anda." },
              { title: "Bahan Berkualitas", desc: "Kerja sama dengan petani lokal memastikan bahan selalu segar." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-2xl border border-[var(--color-accent)]/15 bg-[var(--color-background)] p-6 shadow-sm">
                  <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-primary)]">{item.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-4">
          <FadeIn direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
              Suasana
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-foreground)] md:text-3xl">
              Cuplikan Galeri
            </h3>
          </FadeIn>
          <FadeIn direction="right">
            <Link
              href="/gallery"
              className="shrink-0 rounded-full border border-[var(--color-primary)]/20 px-5 py-2.5 text-sm font-medium text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary)] hover:text-white focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:outline-none"
            >
              Lihat galeri lengkap
            </Link>
          </FadeIn>
        </div>
        <StaggerContainer className="mt-8 grid gap-5 md:grid-cols-3">
          {galleryItems.map((item) => (
            <StaggerItem key={item.id}>
              <figure className="group overflow-hidden rounded-2xl border border-[var(--color-accent)]/15 bg-[var(--color-surface)]">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={280}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-4">
                  <strong className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-foreground)]">{item.title}</strong>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--color-muted)]">{item.description}</p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* YouTube Reviews */}
      <section className="relative overflow-hidden bg-[var(--color-surface)] py-20 noise-overlay">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
                Kata Mereka
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-foreground)] md:text-3xl">
                Review dari Food Vlogger
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[var(--color-muted)]">
                Lihat langsung bagaimana food vlogger ternama Indonesia mencicipi hidangan Warung Taburai.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10">
              <YouTubeEmbed />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <FadeIn>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
              Testimoni
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-foreground)] md:text-3xl">
              Apa Kata Pelanggan
            </h3>
          </div>
        </FadeIn>
        <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              quote: "Pecah banget di mulut! Rasanya autentik, resep asli dari ibunya Praz Teguh.",
              name: "Anak Kuliner",
              role: "Food Vlogger",
            },
            {
              quote: "Bumbunya beda banget! Beneran niat jualannya, wajib cobain.",
              name: "Tasyi Athasyia",
              role: "Food Vlogger",
            },
            {
              quote: "Dendeng merah dan tunjang cabe ijo-nya juara. Recommended!",
              name: "Nex Carlos",
              role: "Food Vlogger",
            },
          ].map((item) => (
            <StaggerItem key={item.name}>
              <blockquote className="flex h-full flex-col justify-between rounded-2xl border border-[var(--color-accent)]/15 bg-[var(--color-surface)] p-6">
                <p className="text-sm italic leading-relaxed text-[var(--color-foreground)]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-4 border-t border-[var(--color-accent)]/15 pt-4">
                  <cite className="not-italic">
                    <span className="text-sm font-semibold text-[var(--color-primary)]">{item.name}</span>
                    <span className="block text-xs text-[var(--color-muted)]">{item.role}</span>
                  </cite>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)] p-10 text-white shadow-2xl shadow-[var(--color-primary)]/20 md:p-14 noise-overlay">
            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-lg">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold md:text-3xl">
                  Rayakan Momen Spesial Anda
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Paket private dining, live cooking, hingga hampers khas Nusantara
                  untuk acara kantor atau keluarga.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#facc15] px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-[#1c0f0a] shadow-xl shadow-black/20 transition-all hover:bg-[#fbbf24] focus-visible:ring-2 focus-visible:ring-[#facc15] focus-visible:outline-none"
                >
                  Hubungi Kami
                </Link>
                <Link
                  href="/about"
                  className="rounded-full border-2 border-white/60 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  Tentang Taburai
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
