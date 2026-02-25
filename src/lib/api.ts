import type { BookingPayload, BookingResponse, GalleryItem, MenuItem } from "@/types";

const menuItems: MenuItem[] = [
  {
    id: "rendang",
    name: "Rendang Daging",
    description: "Daging sapi dimasak perlahan dengan santan dan rempah Minang otentik.",
    price: "Rp65.000",
    image: "/images/menu/rendang-baru.jpg",
    category: "makanan",
    spicyLevel: 3,
  },
  {
    id: "sate-ayam",
    name: "Sate Ayam Madura",
    description: "Sate ayam bumbu kacang khas Madura dengan lontong lembut.",
    price: "Rp45.000",
    image: "/images/menu/sate-ayam-baru.jpg",
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
    id: "tempe-mendoan",
    name: "Tempe Mendoan",
    description: "Tempe tipis digoreng setengah matang dengan cocolan sambal kecap.",
    price: "Rp22.000",
    image: "/images/menu/tempe-mendoan-baru.jpg",
    category: "cemilan",
  },
  {
    id: "sop-buntut",
    name: "Sop Buntut Bakar",
    description: "Sop buntut dibakar ringan dengan kuah rempah yang kaya rasa.",
    price: "Rp78.000",
    image: "/images/menu/sop-buntut-baru.jpg",
    category: "makanan",
  },
  {
    id: "klepon",
    name: "Klepon Pandan",
    description: "Kue tradisional berisi gula merah cair dengan taburan kelapa parut.",
    price: "Rp20.000",
    image: "/images/menu/klepon-baru.jpg",
    category: "cemilan",
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
    id: "plating",
    title: "Plating Rapi dan Artistik",
    description: "Setiap hidangan disajikan estetis untuk memanjakan mata.",
    image: "/images/gallery/plating-baru.jpg",
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
