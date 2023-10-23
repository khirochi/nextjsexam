import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

//export const dynamic = "force-static";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("id");

  return NextResponse.json({ method: "GET", id: query });
}

export async function POST(req: NextRequest) {}
