import { NextResponse } from "next/server";

import type { BookingPayload } from "@/types";
import { submitBooking } from "@/lib/api";

function validatePayload(payload: Partial<BookingPayload>) {
  if (!payload.name || !payload.email || !payload.phone || !payload.date || !payload.guests) {
    return false;
  }
  return true;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<BookingPayload>;

    if (!validatePayload(payload)) {
      return NextResponse.json(
        { success: false, message: "Data reservasi tidak lengkap." },
        { status: 400 },
      );
    }

    const response = await submitBooking(payload as BookingPayload);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan saat memproses reservasi. Coba lagi nanti.",
      },
      { status: 500 },
    );
  }
}
