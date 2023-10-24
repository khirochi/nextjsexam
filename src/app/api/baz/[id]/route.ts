import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

// 日本語の参考
// https://nextjs-ja-translation-docs.vercel.app/docs/api-routes/introduction

//export const dynamic = "force-static";

export function GET(request: NextRequest) {
  // const searchParams = request.nextUrl.searchParams;
  // const query = searchParams.get("id");

  // return NextResponse.json({ method: "GET", id: query });
  redirect("http://localhost:3000/sub?id=abc");
}

// export async function POST(req: NextRequest) {}
