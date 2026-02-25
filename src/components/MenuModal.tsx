"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import type { MenuItem } from "@/types";

const CATEGORY_LABEL: Record<MenuItem["category"], string> = {
  makanan: "Makanan",
  minuman: "Minuman",
  paket: "Paket",
};

export default function MenuModal({
  item,
  onClose,
}: {
  item: MenuItem | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.name}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto overscroll-contain rounded-2xl bg-[var(--color-background)] shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              aria-label="Tutup"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="3" x2="13" y2="13" />
                <line x1="13" y1="3" x2="3" y2="13" />
              </svg>
            </button>

            {/* Image - full display without cropping */}
            <div className="relative w-full bg-[var(--color-surface)]">
              <Image
                src={item.image}
                alt={item.name}
                width={600}
                height={600}
                sizes="(max-width: 640px) 100vw, 500px"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <span className="inline-block rounded-full bg-[var(--color-primary)] px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-semibold text-white">
                  {CATEGORY_LABEL[item.category]}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-foreground)]">
                  {item.name}
                </h3>
                <span className="shrink-0 rounded-lg bg-[var(--color-primary-light)] px-3 py-1.5 text-base font-bold tabular-nums text-[var(--color-primary)]">
                  {item.price}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {item.description}
              </p>

              {typeof item.spicyLevel === "number" ? (
                <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-secondary)]" aria-label={`Tingkat pedas: ${item.spicyLevel} dari 3`}>
                  <span className="font-medium">Tingkat Pedas</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 3 }, (_, index) => (
                      <span
                        key={index}
                        className={`inline-block h-2.5 w-2.5 rounded-full ${
                          index < item.spicyLevel! ? "bg-[var(--color-primary)]" : "bg-[var(--color-accent)]/30"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-5 flex items-center gap-3 border-t border-[var(--color-accent)]/15 pt-4">
                <a
                  href="https://wa.me/6285187246639"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-full bg-[#25D366] px-5 py-3 text-center text-sm font-bold text-white shadow-md transition-all hover:bg-[#1da851] hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:outline-none"
                >
                  Pesan via WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="rounded-full border border-[var(--color-accent)]/20 px-5 py-3 text-sm font-medium text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:outline-none"
                >
                  Tutup
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
