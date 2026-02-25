import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-accent)]/15 bg-[var(--color-surface)] py-16 text-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-primary)]">
            Warung Taburai
          </h2>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-muted)]">
            by Praz Teguh
          </p>
          <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
            Masakan rumahan khas Nusantara yang autentik, dimasak dengan bahan segar
            dan resep turun-temurun.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-foreground)]">Jam Operasional</h3>
          <ul className="mt-3 space-y-1.5 text-[var(--color-muted)]">
            <li>Senin – Jumat: 10.00 – 22.00</li>
            <li>Sabtu – Minggu: 09.00 – 23.00</li>
          </ul>
        </div>

        <nav aria-label="Kontak">
          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-foreground)]">Kontak</h3>
          <ul className="mt-3 space-y-1.5 text-[var(--color-muted)]">
            <li>
              <a href="tel:+6285187246639" className="transition-colors hover:text-[var(--color-primary)]">
                0851-8724-6639
              </a>
            </li>
            <li>
              <a href="mailto:halo@warungtaburai.id" className="transition-colors hover:text-[var(--color-primary)]">
                halo@warungtaburai.id
              </a>
            </li>
            <li>Jl. Kaliurang No.&nbsp;23, Yogyakarta</li>
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-foreground)]">Navigasi</h3>
          <ul className="mt-3 space-y-1.5">
            {[
              { href: "/menu", label: "Menu" },
              { href: "/about", label: "Tentang" },
              { href: "/gallery", label: "Galeri" },
              { href: "/contact", label: "Kontak" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-6xl border-t border-[var(--color-accent)]/15 pt-6 px-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-[var(--color-muted)]">
        <span>© {new Date().getFullYear()} Warung Taburai by Praz Teguh. Hak cipta dilindungi.</span>
        <span className="uppercase tracking-wider text-[var(--color-accent)]">Makan Santai, Rasa Aduhai</span>
      </div>
    </footer>
  );
}
