import Image from "next/image";
import { getGalleryItems } from "@/lib/api";

export const metadata = {
  title: "Galeri | Warung Taburai",
  description: "Jelajahi suasana Warung Taburai melalui galeri foto",
};

export default async function GalleryPage() {
  const items = await getGalleryItems();

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold text-[var(--color-primary)]">Galeri Warung Taburai</h1>
        <p className="mt-3 text-base leading-relaxed text-[color:var(--color-muted-soft)]">
          Potret suasana hangat, detail plating, hingga momen spesial bersama para pelanggan setia kami.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <figure
            key={item.id}
            className="overflow-hidden rounded-3xl border border-[var(--color-primary)]/12 bg-[var(--color-surface)]/80 shadow-md"
          >
            <div className="relative h-72 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="px-6 py-5">
              <h3 className="text-lg font-semibold text-[var(--color-secondary)]">{item.title}</h3>
              {item.description && (
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted-soft)]">{item.description}</p>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
