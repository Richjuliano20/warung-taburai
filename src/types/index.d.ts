export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: "makanan" | "minuman" | "cemilan";
  spicyLevel?: number;
};

export type GalleryItem = {
  id: string;
  title: string;
  description?: string;
  image: string;
};

export interface BookingPayload {
  name: string;
  email: string;
  phone: string;
  date: string;
  guests: number;
  notes?: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
}
