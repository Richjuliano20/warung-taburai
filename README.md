# Warung Taburai

Website promosi untuk Warung Taburai, menampilkan cerita brand, menu andalan, galeri suasana, serta formulir reservasi yang terhubung ke API sederhana.

## Fitur Utama
- **Desain landing page** dengan hero section, highlight keunggulan, dan CTA yang jelas.
- **Halaman informatif** untuk Tentang, Menu, Galeri, dan Kontak.
- **Formulir reservasi** yang mengirim data ke endpoint `POST /api/booking` dan memberikan umpan balik instan.
- **Komponen reusable** seperti header, footer, hero, dan kartu menu.
- **Tailwind CSS** serta CSS Module untuk styling responsif.

## Struktur Proyek
```
/warung-taburai
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── hero.jpg
│       ├── logo.jpg
│       ├── menu/
│       │   ├── rendang.jpg
│       │   ├── sate-ayam.jpg
│       │   └── …
│       └── gallery/
│           ├── interior.jpg
│           └── …
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── menu/
│   │   ├── gallery/
│   │   ├── contact/
│   │   └── api/booking/route.ts
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   └── types/
├── next.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

## Menjalankan Secara Lokal
1. Instal dependencies:
   ```bash
   npm install
   ```
2. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```
3. Buka `http://localhost:3000` di browser untuk melihat situs.

## Testing & Linting
- Jalankan `npm run lint` untuk memastikan kode sesuai aturan ESLint.

## Deploy ke Vercel
1. Pastikan perubahan sudah di-push ke repository Git Anda.
2. Masuk ke [Vercel](https://vercel.com) dan buat proyek baru.
3. Pilih repository yang berisi aplikasi ini.
4. Gunakan pengaturan default Next.js. Vercel akan otomatis membangun dan meng-host website Anda.

## Lisensi
Proyek ini dibuat untuk kebutuhan demonstrasi dan dapat dimodifikasi sesuai kebutuhan Warung Taburai.
