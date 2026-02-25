import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Tentang | Warung Taburai",
  description: "Kisah Warung Taburai dan komitmen kami untuk menghadirkan cita rasa Nusantara",
};

const timeline = [
  {
    year: "2002",
    title: "Awal Cerita",
    description: "Warung sederhana di tepi jalan Taburai yang dikelola keluarga besar Sari.",
  },
  {
    year: "2010",
    title: "Resep Turun Temurun",
    description: "Mulai mengoleksi dan membukukan resep keluarga dari berbagai daerah Indonesia.",
  },
  {
    year: "2018",
    title: "Warung Taburai Modern",
    description: "Renovasi total dengan konsep warung kontemporer tanpa meninggalkan nuansa hangat.",
  },
  {
    year: "2024",
    title: "Ekspansi Digital",
    description: "Menghadirkan layanan pemesanan daring dan pengalaman kuliner imersif.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16">
      <section className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
        <div>
          <h1 className="text-4xl font-bold text-[var(--color-primary)]">Tentang Warung Taburai</h1>
          <p className="mt-4 text-base leading-relaxed text-[color:var(--color-muted-soft)]">
            Warung Taburai berawal dari tradisi keluarga yang gemar menghidangkan masakan rumahan. Dari setiap sesi memasak,
            kami belajar bahwa citarasa sejati lahir dari ketulusan berbagi. Kini, Taburai berkembang menjadi destinasi kuliner
            yang menggabungkan kehangatan warung dengan pelayanan modern.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[color:var(--color-muted-soft)]">
            Kami bekerja sama dengan petani lokal untuk mendapatkan bahan segar, serta mengolah rempah secara manual di dapur kami.
            Filosofi kami sederhana: menyajikan makanan yang jujur dengan rasa yang dalam.
          </p>
        </div>
        <div className="relative h-[360px] w-full overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/gallery/interior.jpg"
            alt="Interior Warung Taburai"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[var(--color-primary)]">Perjalanan Kami</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {timeline.map((item) => (
            <article
              key={item.year}
              className="rounded-3xl border border-[var(--color-primary)]/12 bg-[var(--color-surface)] p-6 shadow-sm"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-secondary)]">
                {item.year}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[var(--color-foreground)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted-soft)]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-[var(--color-secondary)]/10 p-8">
        <h2 className="text-2xl font-semibold text-[var(--color-secondary)]">
          Komitmen Kami
        </h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          <li className="rounded-2xl border border-[var(--color-secondary)]/20 bg-[var(--color-surface)] p-5 leading-relaxed text-[color:var(--color-muted-soft)]">
            Menggunakan bahan segar tanpa pengawet buatan.
          </li>
          <li className="rounded-2xl border border-[var(--color-secondary)]/20 bg-[var(--color-surface)] p-5 leading-relaxed text-[color:var(--color-muted-soft)]">
            Menjaga keaslian resep nusantara dengan penyesuaian minimal.
          </li>
          <li className="rounded-2xl border border-[var(--color-secondary)]/20 bg-[var(--color-surface)] p-5 leading-relaxed text-[color:var(--color-muted-soft)]">
            Mendukung ekonomi lokal melalui kemitraan jangka panjang dengan pemasok.
          </li>
          <li className="rounded-2xl border border-[var(--color-secondary)]/20 bg-[var(--color-surface)] p-5 leading-relaxed text-[color:var(--color-muted-soft)]">
            Memberikan layanan personal pada setiap tamu yang datang.
          </li>
        </ul>
      </section>

      <section className="rounded-3xl border border-[var(--color-primary)]/12 bg-[var(--color-surface)]/90 p-8 text-center shadow-sm">
        <h2 className="text-2xl font-semibold">Mari Berkenalan Lebih Dekat</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--color-muted-soft)]">
          Jadwalkan sesi private tasting dengan tim kami untuk merancang menu sesuai kebutuhan acara Anda.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary)]/90"
        >
          Hubungi Tim Taburai
        </Link>
      </section>
    </div>
  );
}
