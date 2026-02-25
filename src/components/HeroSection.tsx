"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-banner.jpeg"
          alt="Warung Taburai storefront"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
              Yogyakarta
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-6 font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.1] text-white md:text-7xl"
          >
            Makan Santai,
            <br />
            <span className="text-[var(--color-accent)]">Rasa Aduhai</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-5 max-w-lg text-base leading-relaxed text-white/80 md:text-lg"
          >
            Masakan rumahan khas Nusantara dengan rempah pilihan.
            Dari dapur Warung Taburai by Praz Teguh, langsung ke meja Anda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/menu"
              className="rounded-full bg-[#b91c1c] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-black/30 transition-all duration-300 hover:bg-[#991b1b] hover:shadow-xl focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              Lihat Menu
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-white/95 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#7f1d1d] shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              Reservasi
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
    </section>
  );
}
