import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  console.log("GET request", searchParams.get("name"));

  return NextResponse.json({ method: "GET" });
  // return new Response(JSON.stringify({ message: "Hello World" }));
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  console.log("POST request", body.name);
  return NextResponse.json({ method: "POST" });
  // return new Response(JSON.stringify({ message: "Hello World" }));
}
