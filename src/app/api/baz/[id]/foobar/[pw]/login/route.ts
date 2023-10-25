import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

// https://reffect.co.jp/react/next-js-13/#url-%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF%E3%81%AE%E5%8F%96%E5%BE%97
export function GET(
  request: NextRequest,
  { params }: { params: { id: string; pw: string } }
) {
  return NextResponse.json({ method: "GET", id: params.id, pw: params.pw });
}

// export async function POST(req: NextRequest) {}
