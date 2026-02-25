import Link from "next/link";
import Image from "next/image";

import HeroSection from "@/components/HeroSection";
import MenuCard from "@/components/MenuCard";
import { getGalleryItems, getSignatureItems } from "@/lib/api";
import styles from "@/styles/Home.module.css";

export default async function HomePage() {
  const [signatureItems, galleryItems] = await Promise.all([
    getSignatureItems(),
    getGalleryItems(),
  ]);

  return (
    <div>
      <HeroSection />
      <div className={styles.page}>
        <section className={styles.intro}>
          <h2 className={styles.sectionTitle}>Warisan Cita Rasa Taburai</h2>
          <p className={styles.sectionDescription}>
            Berawal dari dapur keluarga di Kalimantan, Warung Taburai menghadirkan menu khas
            Nusantara dengan sentuhan modern. Kami percaya makanan bukan sekadar santapan, melainkan
            cerita yang dibagikan dari satu meja ke meja lainnya.
          </p>
        </section>

        <section className={styles.section}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className={styles.sectionTitle}>Menu Andalan</h3>
              <p className="max-w-2xl text-sm leading-relaxed text-[color:var(--color-muted-soft)]">
                Pilihan menu terbaik kami dengan bahan baku lokal dan cita rasa yang kaya.
              </p>
            </div>
            <Link
              href="/menu"
              className="shrink-0 rounded-full border border-[var(--color-primary)]/18 px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition hover:border-[var(--color-primary)]"
            >
              Lihat semua menu
            </Link>
          </div>
          <div className={styles.menuGrid}>
            {signatureItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Mengapa Pelanggan Memilih Kami</h3>
          <div className={styles.highlightGrid}>
            <div className={styles.highlightCard}>
              <h4 className="text-lg font-semibold text-[var(--color-primary)]">Rempah Asli Nusantara</h4>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted-soft)]">
                Menggunakan rempah pilihan yang digiling sendiri oleh tim dapur kami setiap pagi.
              </p>
            </div>
            <div className={styles.highlightCard}>
              <h4 className="text-lg font-semibold text-[var(--color-primary)]">Suasana Hangat</h4>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted-soft)]">
                Interior bernuansa kayu dan musik keroncong ringan menciptakan pengalaman bersantap yang tenang.
              </p>
            </div>
            <div className={styles.highlightCard}>
              <h4 className="text-lg font-semibold text-[var(--color-primary)]">Layanan Personal</h4>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted-soft)]">
                Tim kami siap membantu menyesuaikan tingkat kepedasan dan preferensi rasa Anda.
              </p>
            </div>
            <div className={styles.highlightCard}>
              <h4 className="text-lg font-semibold text-[var(--color-primary)]">Bahan Lokal Berkualitas</h4>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted-soft)]">
                Kami bekerja sama dengan petani lokal untuk memastikan bahan selalu segar dan berkelanjutan.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className={styles.sectionTitle}>Cuplikan Galeri</h3>
              <p className="max-w-2xl text-sm leading-relaxed text-[color:var(--color-muted-soft)]">
                Rasakan atmosfer Warung Taburai melalui galeri foto berikut ini.
              </p>
            </div>
            <Link
              href="/gallery"
              className="shrink-0 rounded-full border border-[var(--color-primary)]/18 px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition hover:border-[var(--color-primary)]"
            >
              Lihat galeri lengkap
            </Link>
          </div>
          <div className={styles.galleryPreview}>
            {galleryItems.map((item) => (
              <figure key={item.id}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={360}
                  height={240}
                  className="h-full w-full object-cover"
                />
                <figcaption className="px-4 py-3 text-sm text-[color:var(--color-muted-soft)]">
                  <strong className="text-[var(--color-primary)]">{item.title}</strong>
                  <br />
                  {item.description}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <div>
            <h3 className="text-2xl font-bold">Rayakan Momen Spesial Anda</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/90">
              Kami menyediakan paket private dining, live cooking, hingga hampers khas Nusantara untuk acara kantor atau keluarga.
              Hubungi tim kami untuk mendapatkan rekomendasi paket terbaik.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link
              href="/contact"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-white/90"
            >
              Hubungi Kami
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Kenali Taburai Lebih Dekat
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
