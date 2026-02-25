import MenuGrid from "@/components/MenuGrid";
import FadeIn from "@/components/motion/FadeIn";
import { getMenuItems } from "@/lib/api";

export const metadata = {
  title: "Menu | Warung Taburai",
  description: "Jelajahi ragam menu Warung Taburai dengan cita rasa Nusantara",
};

const sectionTitles: Record<string, string> = {
  makanan: "Hidangan Utama",
  minuman: "Minuman Segar",
  paket: "Paket Hemat",
};

const sectionDescriptions: Record<string, string> = {
  makanan: "Disajikan dengan nasi hangat, sambal, dan lalapan segar.",
  minuman: "Minuman segar untuk melengkapi santap Anda.",
  paket: "Paket lengkap untuk makan bersama keluarga atau teman.",
};

export default async function MenuPage() {
  const items = await getMenuItems();
  const grouped = items.reduce<Record<string, typeof items>>((acc, item) => {
    acc[item.category] = acc[item.category] ? [...acc[item.category], item] : [item];
    return acc;
  }, {});

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <FadeIn>
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
            Daftar Menu
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--color-foreground)] md:text-5xl">
            Menu Warung Taburai
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
            Setiap hidangan kami olah dari bahan segar pilihan dan rempah yang diracik secara tradisional.
          </p>
        </header>
      </FadeIn>

      <div className="mt-14 space-y-16">
        {Object.entries(grouped).map(([category, menuItems]) => (
          <section key={category}>
            <FadeIn>
              <p className="separator-ornament text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                {sectionTitles[category] ?? category}
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                {sectionDescriptions[category] ?? ""}
              </p>
            </FadeIn>
            <MenuGrid
              items={menuItems}
              className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            />
          </section>
        ))}
      </div>
    </div>
  );
}
