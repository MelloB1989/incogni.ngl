import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import config from "@/config";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data?.message || !data?.slug) {
      return NextResponse.json(
        { success: false, error: "Invalid input" },
        { status: 400 }
      );
    }

    const params = new URLSearchParams({
      id: data.slug,
      title: data.message,
      message: JSON.stringify({ message: data.message }),
      type: "Default",
      image_url: config.LOGO_WHITE
    });

    await axios.get(`https://wirepusher.com/send?${params.toString()}`);

    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json(
      { success: false, error: e?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
