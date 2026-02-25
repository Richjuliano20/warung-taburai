import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="Suasana hangat Warung Taburai"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
      </div>
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-6 rounded-3xl bg-[var(--color-primary)]/65 px-8 py-16 text-white shadow-2xl backdrop-blur-sm md:flex-row md:items-center md:gap-10">
        <div className="md:flex-1">
          <span className="inline-block rounded-full bg-[var(--color-secondary)]/30 px-4 py-1 text-xs uppercase tracking-widest text-white">
            Selamat Datang
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Nikmati cita rasa Nusantara di Warung Taburai
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
            Sajian autentik dari berbagai penjuru Indonesia, disajikan hangat dengan rempah pilihan
            dan suasana yang ramah.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:w-60">
          <Link
            href="/menu"
            className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-black/30 transition-transform duration-200 hover:-translate-y-0.5"
          >
            Lihat Menu
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-[var(--color-secondary)]/30 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-[var(--color-secondary)]/40"
          >
            Reservasi Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}
