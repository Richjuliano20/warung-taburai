"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import type { BookingPayload, BookingResponse } from "@/types";
import { useWindowSize } from "@/hooks/useWindowSize";

const initialState: BookingPayload = {
  name: "",
  email: "",
  phone: "",
  date: "",
  guests: 2,
  notes: "",
};

export default function BookingForm() {
  const [form, setForm] = useState<BookingPayload>(initialState);
  const [status, setStatus] = useState<{ loading: boolean; message?: string; error?: string }>({
    loading: false,
  });
  const { width } = useWindowSize();

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
      className="rounded-3xl border border-[var(--color-primary)]/12 bg-[var(--color-surface)]/90 p-6 shadow-md backdrop-blur-sm"
    >
      <h2 className="text-2xl font-semibold text-[var(--color-secondary)]">Reservasi Meja</h2>
      <p className="mt-2 text-sm text-[color:var(--color-muted-soft)]">
        {width && width < 640
          ? "Kami akan menghubungi Anda untuk konfirmasi dalam 10 menit."
          : "Isi formulir berikut, tim kami akan menghubungi Anda dalam 10 menit untuk konfirmasi."}
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-[color:var(--color-muted-soft)]">
            Nama lengkap
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="rounded-xl border border-[var(--color-primary)]/18 px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none"
            placeholder="Contoh: Siti Nurhaliza"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-[color:var(--color-muted-soft)]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="rounded-xl border border-[var(--color-primary)]/18 px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none"
            placeholder="nama@email.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-[color:var(--color-muted-soft)]">
            Nomor telepon / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            className="rounded-xl border border-[var(--color-primary)]/18 px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none"
            placeholder="0812-XXXX-XXXX"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="text-sm font-medium text-[color:var(--color-muted-soft)]">
            Tanggal & waktu
          </label>
          <input
            id="date"
            name="date"
            type="datetime-local"
            required
            value={form.date}
            onChange={handleChange}
            className="rounded-xl border border-[var(--color-primary)]/18 px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="guests" className="text-sm font-medium text-[color:var(--color-muted-soft)]">
            Jumlah tamu
          </label>
          <select
            id="guests"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            className="rounded-xl border border-[var(--color-primary)]/18 px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none"
          >
            {[1, 2, 3, 4, 5, 6, 8, 10].map((guest) => (
              <option key={guest} value={guest}>
                {guest} orang
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="notes" className="text-sm font-medium text-[color:var(--color-muted-soft)]">
            Catatan tambahan
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={form.notes ?? ""}
            onChange={handleChange}
            className="rounded-xl border border-[var(--color-primary)]/18 px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none"
            placeholder="Contoh: permintaan dekorasi ulang tahun"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 text-xs text-[color:var(--color-muted-soft)] md:flex-row md:items-center md:justify-between">
        <span>* Pihak kami akan menghubungi Anda via WhatsApp untuk konfirmasi.</span>
        <button
          type="submit"
          className="self-start rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary)]/90 disabled:cursor-not-allowed disabled:bg-[var(--color-muted)]/40 md:self-auto"
          disabled={status.loading}
        >
          {status.loading ? "Mengirim..." : "Kirim Reservasi"}
        </button>
      </div>

      {status.message && (
        <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          {status.message}
        </div>
      )}
      {status.error && (
        <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {status.error}
        </div>
      )}
    </form>
  );
}
