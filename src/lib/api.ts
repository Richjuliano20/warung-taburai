import type { BookingPayload, BookingResponse, GalleryItem, MenuItem } from "@/types";

const menuItems: MenuItem[] = [
  {
    id: "nasi-ayam-kecap",
    name: "Nasi Ayam Kecap Taburai",
    description: "Nasi hangat dengan ayam kecap manis khas Taburai, dilengkapi sambal dan lalapan segar.",
    price: "Rp29.500",
    image: "/images/menu/nasi-ayam-kecap.jpeg",
    category: "makanan",
    spicyLevel: 1,
  },
  {
    id: "nasi-telur-orak-arik",
    name: "Nasi Telur Orak Arik Kecombrang",
    description: "Nasi dengan telur orak-arik berbumbu kecombrang, disajikan dengan sambal dan kerupuk.",
    price: "Rp20.400",
    image: "/images/menu/nasi-telur-orak-arik.jpeg",
    category: "makanan",
    spicyLevel: 1,
  },
  {
    id: "nasi-sampadeh-gajebo",
    name: "Nasi Sampadeh Gajebo",
    description: "Menu baru! Nasi dengan sampadeh gurih dan gajebo renyah, perpaduan rasa yang menggugah selera.",
    price: "Rp42.500",
    image: "/images/menu/nasi-sampadeh-gajebo.jpeg",
    category: "makanan",
    spicyLevel: 3,
  },
  {
    id: "nasi-tambusu-cabe-ijo",
    name: "Nasi Tambusu Cabe Ijo",
    description: "Menu baru! Nasi dengan tambusu empuk dan cabe ijo pedas segar khas Minang.",
    price: "Rp44.600",
    image: "/images/menu/nasi-tambusu-cabe-ijo.jpeg",
    category: "makanan",
    spicyLevel: 2,
  },
  {
    id: "nasi-tunjang-cabe-ijo",
    name: "Nasi Tunjang Cabe Ijo Taburai",
    description: "Nasi dengan tunjang lembut berbalut cabe ijo Taburai yang pedas dan segar.",
    price: "Rp44.600",
    image: "/images/menu/nasi-tunjang-cabe-ijo.jpeg",
    category: "makanan",
    spicyLevel: 2,
  },
  {
    id: "es-cendol",
    name: "Es Cendol Taburai",
    description: "Segarnya cendol hijau dengan gula aren cair dan santan kental.",
    price: "Rp25.000",
    image: "/images/menu/es-cendol-baru.jpg",
    category: "minuman",
  },
  {
    id: "paporit-bang-praz-1",
    name: "Paporit Bang Praz 1",
    description: "Paket hemat: nasi ayam goreng rempah dengan minuman segar dan buah potong.",
    price: "Rp74.500",
    image: "/images/menu/paporit-bang-praz-1.jpeg",
    category: "paket",
  },
  {
    id: "paporit-bang-praz-4",
    name: "Paporit Bang Praz 4",
    description: "Paket ber-4: empat porsi nasi ayam goreng lengkap dengan minuman segar untuk makan bersama.",
    price: "Rp245.000",
    image: "/images/menu/paporit-bang-praz-4.jpeg",
    category: "paket",
  },
];

const galleryItems: GalleryItem[] = [
  {
    id: "interior",
    title: "Suasana Interior Hangat",
    description: "Dominasi kayu dan tanaman hijau menghadirkan nuansa nyaman.",
    image: "/images/gallery/interior-baru.jpg",
  },
  {
    id: "menu-showcase",
    title: "Makan Santai Rasa Aduhai",
    description: "Ragam hidangan khas Warung Taburai yang menggugah selera, dari sambal hingga lauk pilihan.",
    image: "/images/gallery/background.jpeg",
  },
  {
    id: "owner",
    title: "Owner Praz Teguh",
    description: "Teguh Prasetyo menyapa langsung para tamu dan memastikan pengalaman bersantap terbaik.",
    image: "/images/gallery/owner-praz-teguh.jpg",
  },
];

export async function getMenuItems(): Promise<MenuItem[]> {
  return menuItems;
}

export async function getSignatureItems(): Promise<MenuItem[]> {
  return menuItems.filter((item) => item.category === "makanan").slice(0, 3);
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  return galleryItems;
}

export async function submitBooking(payload: BookingPayload): Promise<BookingResponse> {
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    message: `Terima kasih ${payload.name}, reservasi Anda untuk ${payload.guests} orang pada ${payload.date} telah kami terima!`,
  };
}
