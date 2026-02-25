import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerChildren";
import { getGalleryItems } from "@/lib/api";

export const metadata = {
  title: "Galeri | Warung Taburai",
  description: "Jelajahi suasana Warung Taburai melalui galeri foto",
};

export default async function GalleryPage() {
  const items = await getGalleryItems();

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <FadeIn>
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
            Galeri Foto
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--color-foreground)] md:text-5xl">
            Suasana Warung Taburai
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
            Potret suasana hangat, detail plating, hingga momen spesial bersama pelanggan setia kami.
          </p>
        </header>
      </FadeIn>

      <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <StaggerItem key={item.id}>
            <figure className="group overflow-hidden rounded-2xl border border-[var(--color-accent)]/15 bg-[var(--color-surface)] shadow-sm">
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-5">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-foreground)]">{item.title}</h3>
                {item.description ? (
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{item.description}</p>
                ) : null}
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
