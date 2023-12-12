import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "olá, mundo" });
}

export async function POST() {
  return NextResponse.json({ message: "olá, mundo" });
}

// no exemplo os dois retornam o mesmo resultado
