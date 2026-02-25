"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import type { BookingPayload, BookingResponse } from "@/types";

const initialState: BookingPayload = {
  name: "",
  email: "",
  phone: "",
  date: "",
  guests: 2,
  notes: "",
};

const inputClass =
  "rounded-xl border border-[var(--color-accent)]/20 bg-[var(--color-background)] px-4 py-3 text-sm transition-all focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:border-transparent focus-visible:outline-none";

export default function BookingForm() {
  const [form, setForm] = useState<BookingPayload>(initialState);
  const [status, setStatus] = useState<{ loading: boolean; message?: string; error?: string }>({
    loading: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ loading: true });

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Gagal memproses reservasi, silakan coba lagi.");
      }

      const data = (await response.json()) as BookingResponse;
      setStatus({ loading: false, message: data.message });
      setForm(initialState);
    } catch (error) {
      setStatus({
        loading: false,
        error: error instanceof Error ? error.message : "Terjadi kesalahan yang tidak terduga.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[var(--color-accent)]/15 bg-[var(--color-surface)] p-6 shadow-sm md:p-8"
    >
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-foreground)]">
        Reservasi Meja
      </h2>
      <p className="mt-2 text-sm text-[var(--color-muted)]">
        <span className="hidden sm:inline">Isi formulir berikut, tim kami akan menghubungi Anda dalam 10 menit untuk konfirmasi.</span>
        <span className="sm:hidden">Kami akan menghubungi Anda untuk konfirmasi dalam 10 menit.</span>
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
            Nama lengkap
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Contoh: Siti Nurhaliza"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="nama@email.com"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
            Nomor telepon / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="0812-XXXX-XXXX"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="date" className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
            Tanggal & waktu
          </label>
          <input
            id="date"
            name="date"
            type="datetime-local"
            required
            value={form.date}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="guests" className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
            Jumlah tamu
          </label>
          <select
            id="guests"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            className={inputClass}
          >
            {[1, 2, 3, 4, 5, 6, 8, 10].map((guest) => (
              <option key={guest} value={guest}>
                {guest} orang
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label htmlFor="notes" className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
            Catatan tambahan
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={form.notes ?? ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="Contoh: permintaan dekorasi ulang tahun"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <span className="text-xs text-[var(--color-muted)]">* Konfirmasi via WhatsApp dalam 10 menit.</span>
        <button
          type="submit"
          className="group relative overflow-hidden self-start rounded-full bg-[var(--color-primary)] px-7 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-[var(--color-primary)]/30 disabled:cursor-not-allowed disabled:opacity-50 md:self-auto focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:outline-none"
          disabled={status.loading}
        >
          <span className="relative z-10">{status.loading ? "Mengirim\u2026" : "Kirim Reservasi"}</span>
          <span className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
        </button>
      </div>

      <div aria-live="polite" className="mt-4">
        {status.message ? (
          <div role="status" className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            {status.message}
          </div>
        ) : null}
        {status.error ? (
          <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {status.error}
          </div>
        ) : null}
      </div>
    </form>
  );
}
