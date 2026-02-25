import BookingForm from "@/components/BookingForm";
import Link from "next/link";

export const metadata = {
  title: "Kontak | Warung Taburai",
  description: "Hubungi Warung Taburai untuk reservasi, kerja sama, atau pertanyaan lainnya",
};

const contactChannels = [
  {
    label: "Telepon",
    value: "+62 21 1234 5678",
    href: "tel:+622112345678",
  },
  {
    label: "WhatsApp",
    value: "+62 811 2341 567",
    href: "https://wa.me/628112341567",
  },
  {
    label: "Email",
    value: "halo@warungtaburai.id",
    href: "mailto:halo@warungtaburai.id",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row">
      <aside className="lg:w-2/5">
        <h1 className="text-4xl font-bold text-[var(--color-primary)]">Hubungi Kami</h1>
        <p className="mt-3 text-base leading-relaxed text-[color:var(--color-muted-soft)]">
          Tim Warung Taburai siap membantu merencanakan pengalaman bersantap Anda, mulai dari reservasi
          meja, pemesanan katering, hingga kolaborasi acara khusus.
        </p>

        <div className="mt-8 space-y-4">
          {contactChannels.map((channel) => (
            <Link
              key={channel.label}
              href={channel.href}
              className="block rounded-2xl border border-[var(--color-primary)]/18 bg-[var(--color-surface)]/90 px-5 py-4 shadow-sm transition hover:border-[var(--color-primary)]"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-[color:rgba(44,22,16,0.55)]">
                {channel.label}
              </span>
              <div className="text-lg font-medium text-[var(--color-secondary)]">{channel.value}</div>
            </Link>
          ))}
        </div>

        <section className="mt-10 rounded-3xl border border-[var(--color-primary)]/12 bg-[var(--color-surface)] p-6 text-sm leading-relaxed text-[color:var(--color-muted-soft)]">
          <h2 className="text-lg font-semibold text-[var(--color-secondary)]">Lokasi</h2>
          <p className="mt-2">Jl. Hangat No. 12, Kebayoran Baru, Jakarta Selatan</p>
          <p className="mt-2">
            Parkir valet dan ruang mushola tersedia. Kami juga menyediakan akses Wi-Fi berkecepatan tinggi untuk rapat bisnis.
          </p>
        </section>
      </aside>

      <div className="lg:w-3/5">
        <BookingForm />
      </div>
    </div>
  );
}
