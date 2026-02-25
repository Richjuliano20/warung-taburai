import dynamic from "next/dynamic";
import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";

const BookingForm = dynamic(() => import("@/components/BookingForm"), {
  loading: () => (
    <div className="rounded-2xl border border-[var(--color-accent)]/15 bg-[var(--color-surface)] p-6 shadow-sm animate-pulse h-[600px]" />
  ),
});

export const metadata = {
  title: "Kontak | Warung Taburai",
  description: "Hubungi Warung Taburai untuk reservasi, kerja sama, atau pertanyaan lainnya",
};

const contactChannels = [
  {
    label: "Telepon",
    value: "0851-8724-6639",
    href: "tel:+6285187246639",
  },
  {
    label: "WhatsApp",
    value: "0851-8724-6639",
    href: "https://wa.me/6285187246639",
  },
  {
    label: "Email",
    value: "halo@warungtaburai.id",
    href: "mailto:halo@warungtaburai.id",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row">
      <aside className="lg:w-2/5">
        <FadeIn direction="left">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
            Kontak
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--color-foreground)] md:text-5xl">
            Hubungi Kami
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
            Tim Warung Taburai siap membantu merencanakan pengalaman bersantap Anda, mulai dari reservasi
            meja, pemesanan katering, hingga kolaborasi acara khusus.
          </p>
        </FadeIn>

        <FadeIn direction="left" delay={0.15}>
          <div className="mt-8 space-y-3">
            {contactChannels.map((channel) => (
              <Link
                key={channel.label}
                href={channel.href}
                className="block rounded-xl border border-[var(--color-accent)]/15 bg-[var(--color-surface)] px-5 py-4 transition-all hover:border-[var(--color-primary)]/30 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:outline-none"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {channel.label}
                </span>
                <div className="mt-1 text-lg font-medium text-[var(--color-foreground)]">{channel.value}</div>
              </Link>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.3}>
          <section className="mt-8 rounded-xl border border-[var(--color-accent)]/15 bg-[var(--color-surface)] p-5 text-sm leading-relaxed text-[var(--color-muted)]">
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-foreground)]">Lokasi</h2>
            <p className="mt-2">Jl. Kaliurang No.&nbsp;23, Karang Wuni, Caturtunggal, Depok, Sleman, Yogyakarta 55284</p>
            <p className="mt-2">
              Buka setiap hari hingga pukul 01.00 dini hari. Reservasi via telepon atau WhatsApp.
            </p>
          </section>
        </FadeIn>
      </aside>

      <div className="lg:w-3/5">
        <FadeIn direction="right" delay={0.2}>
          <BookingForm />
        </FadeIn>
      </div>
    </div>
  );
}
