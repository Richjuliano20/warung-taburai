import MenuCard from "@/components/MenuCard";
import { getMenuItems } from "@/lib/api";

export const metadata = {
  title: "Menu | Warung Taburai",
  description: "Jelajahi ragam menu Warung Taburai dengan cita rasa Nusantara",
};

const sectionTitles: Record<string, string> = {
  makanan: "Hidangan Utama",
  minuman: "Minuman Segar",
  cemilan: "Camilan Tradisional",
};

export default async function MenuPage() {
  const items = await getMenuItems();
  const grouped = items.reduce<Record<string, typeof items>>((acc, item) => {
    acc[item.category] = acc[item.category] ? [...acc[item.category], item] : [item];
    return acc;
  }, {});

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold text-[var(--color-primary)]">Menu Warung Taburai</h1>
        <p className="mt-3 text-base leading-relaxed text-[color:var(--color-muted-soft)]">
          Setiap hidangan kami olah dari bahan segar pilihan dan rempah yang diracik secara tradisional.
          Silakan pilih tingkat kepedasan sesuai preferensi Anda.
        </p>
      </header>

      <div className="mt-12 space-y-12">
        {Object.entries(grouped).map(([category, menuItems]) => (
          <section key={category}>
            <h2 className="text-2xl font-semibold text-[var(--color-secondary)]">
              {sectionTitles[category] ?? category}
            </h2>
            <p className="mt-2 text-sm text-[color:var(--color-muted-soft)]">
              {category === "makanan" && "Disajikan dengan nasi hangat dan sambal pilihan."}
              {category === "minuman" && "Minuman segar untuk melengkapi santap Anda."}
              {category === "cemilan" && "Teman ngobrol yang renyah dan manis."}
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {menuItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
