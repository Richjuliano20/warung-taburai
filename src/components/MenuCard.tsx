import Image from "next/image";
import type { MenuItem } from "@/types";

const CATEGORY_LABEL: Record<MenuItem["category"], string> = {
  makanan: "Makanan",
  minuman: "Minuman",
  cemilan: "Cemilan",
};

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--color-primary)]/12 bg-[var(--color-background)] shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-200 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs uppercase tracking-widest text-white">
          {CATEGORY_LABEL[item.category]}
        </span>
      </div>
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-[var(--color-foreground)]">{item.name}</h3>
          <span className="rounded-full bg-[var(--color-secondary)]/10 px-3 py-1 text-sm font-semibold text-[var(--color-secondary)]">
            {item.price}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-[color:var(--color-muted-soft)]">{item.description}</p>
        {typeof item.spicyLevel === "number" && (
          <div className="flex items-center gap-1 text-xs uppercase tracking-widest text-[var(--color-primary)]">
            Pedas:
            {Array.from({ length: 3 }, (_, index) => (
              <span
                key={index}
                className={`inline-block h-2 w-2 rounded-full ${
                  index < item.spicyLevel ? "bg-[var(--color-primary)]" : "bg-[color:rgba(140,43,20,0.18)]"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
