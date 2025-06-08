import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Error inserting blog:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
