import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerChildren";

export const metadata = {
  title: "Tentang | Warung Taburai",
  description: "Kisah Warung Taburai dan komitmen kami untuk menghadirkan cita rasa Nusantara",
};

const timeline = [
  {
    year: "2002",
    title: "Awal Cerita",
    description: "Warung sederhana di tepi jalan Taburai yang dikelola keluarga besar Sari.",
  },
  {
    year: "2010",
    title: "Resep Turun Temurun",
    description: "Mulai mengoleksi dan membukukan resep keluarga dari berbagai daerah Indonesia.",
  },
  {
    year: "2018",
    title: "Warung Taburai Modern",
    description: "Renovasi total dengan konsep warung kontemporer tanpa meninggalkan nuansa hangat.",
  },
  {
    year: "2024",
    title: "Ekspansi Digital",
    description: "Menghadirkan layanan pemesanan daring dan pengalaman kuliner imersif.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 py-20">
      <section className="grid gap-12 md:grid-cols-[1.2fr,1fr] md:items-center">
        <FadeIn direction="left">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
            Cerita Kami
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--color-foreground)] md:text-5xl">
            Tentang Warung Taburai
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[var(--color-muted)]">
            Warung Taburai berawal dari tradisi keluarga yang gemar menghidangkan masakan rumahan. Dari setiap sesi memasak,
            kami belajar bahwa citarasa sejati lahir dari ketulusan berbagi.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
            Kini, Taburai oleh Praz Teguh berkembang menjadi destinasi kuliner yang menggabungkan
            kehangatan warung dengan pelayanan modern. Filosofi kami: menyajikan makanan yang jujur dengan rasa yang dalam.
          </p>
        </FadeIn>
        <FadeIn direction="right" delay={0.2}>
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/gallery/interior-baru.jpg"
              alt="Interior Warung Taburai"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>
      </section>

      <section>
        <FadeIn>
          <p className="separator-ornament text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
            Milestone
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-foreground)] md:text-3xl">
            Perjalanan Kami
          </h2>
        </FadeIn>
        <StaggerContainer className="mt-8 grid gap-6 md:grid-cols-2">
          {timeline.map((item) => (
            <StaggerItem key={item.year}>
              <article className="rounded-2xl border border-[var(--color-accent)]/15 bg-[var(--color-surface)] p-6">
                <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-primary)]">
                  {item.year}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-foreground)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{item.description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section>
        <FadeIn>
          <div className="rounded-2xl bg-[var(--color-primary-light)] p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
              Janji Kami
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-foreground)] md:text-3xl">
              Komitmen Taburai
            </h2>
            <StaggerContainer className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Menggunakan bahan segar tanpa pengawet buatan.",
                "Menjaga keaslian resep nusantara dengan penyesuaian minimal.",
                "Mendukung ekonomi lokal melalui kemitraan jangka panjang.",
                "Memberikan layanan personal pada setiap tamu.",
              ].map((text) => (
                <StaggerItem key={text}>
                  <div className="rounded-xl border border-[var(--color-accent)]/15 bg-[var(--color-background)] p-5 text-sm leading-relaxed text-[var(--color-muted)]">
                    {text}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      </section>

      <section className="text-center">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-foreground)]">
            Mari Berkenalan Lebih Dekat
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">
            Jadwalkan sesi private tasting untuk merancang menu sesuai kebutuhan acara Anda.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-[var(--color-primary)]/30 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:outline-none"
          >
            Hubungi Tim Taburai
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
