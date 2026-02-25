"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { MenuItem } from "@/types";

const CATEGORY_LABEL: Record<MenuItem["category"], string> = {
  makanan: "Makanan",
  minuman: "Minuman",
  paket: "Paket",
};

export default function MenuCard({
  item,
  onClick,
}: {
  item: MenuItem;
  onClick?: (item: MenuItem) => void;
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-[var(--color-accent)]/15 bg-[var(--color-surface)] shadow-sm"
      onClick={() => onClick?.(item)}
      role="button"
      tabIndex={0}
      aria-label={`Lihat detail ${item.name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.(item);
        }
      }}
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute left-4 bottom-4 rounded-full bg-[var(--color-primary)] px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-semibold text-white shadow-lg">
          {CATEGORY_LABEL[item.category]}
        </span>
      </div>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-[var(--color-foreground)]">{item.name}</h3>
          <span className="shrink-0 rounded-lg bg-[var(--color-primary-light)] px-3 py-1 text-sm font-bold tabular-nums text-[var(--color-primary)]">
            {item.price}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-[var(--color-muted)] line-clamp-2">{item.description}</p>
        {typeof item.spicyLevel === "number" ? (
          <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-[var(--color-secondary)]" aria-label={`Tingkat pedas: ${item.spicyLevel} dari 3`}>
            <span className="font-medium">Pedas</span>
            {Array.from({ length: 3 }, (_, index) => (
              <span
                key={index}
                className={`inline-block h-2 w-2 rounded-full transition-colors ${
                  index < item.spicyLevel! ? "bg-[var(--color-primary)]" : "bg-[var(--color-accent)]/30"
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
        ) : null}
        <span className="mt-1 text-xs font-medium text-[var(--color-primary)] opacity-0 transition-opacity group-hover:opacity-100">
          Klik untuk detail →
        </span>
      </div>
    </motion.article>
  );
}
