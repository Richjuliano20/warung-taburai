export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-primary)]/15 bg-[var(--color-surface)]/80 py-10 text-sm text-[var(--color-foreground)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <h2 className="text-lg font-semibold text-[var(--color-primary)]">Warung Taburai</h2>
          <p className="mt-2 leading-relaxed text-[var(--color-muted)]">
            Cicipi sensasi kuliner Nusantara yang autentik, dimasak dengan bahan segar
            dan resep turun-temurun dari Taburai.
          </p>
        </div>
        <div>
          <h3 className="font-semibold uppercase tracking-wide text-[var(--color-muted)]">Jam Operasional</h3>
          <ul className="mt-2 space-y-1 text-[var(--color-muted)]">
            <li>Senin - Jumat: 10.00 - 22.00</li>
            <li>Sabtu - Minggu: 09.00 - 23.00</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold uppercase tracking-wide text-[var(--color-muted)]">Kontak</h3>
          <ul className="mt-2 space-y-1 text-[var(--color-muted)]">
            <li>Telepon: <a href="tel:+622112345678" className="text-[var(--color-primary)]">+62 21 1234 5678</a></li>
            <li>Email: <a href="mailto:halo@warungtaburai.id" className="text-[var(--color-primary)]">halo@warungtaburai.id</a></li>
            <li>Alamat: Jl. Hangat No. 12, Jakarta</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 w-full max-w-6xl border-t border-[var(--color-primary)]/15 pt-4 text-center text-xs text-[var(--color-muted)]">
        © {new Date().getFullYear()} Warung Taburai. Hak cipta dilindungi.
      </div>
    </footer>
  );
}
