import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// 【Next.js】Next.js13でフォームの値をAPI経由で送受信をやってみる
// https://zenn.dev/kiriyama/articles/87b8911973444d
export async function GET(request: NextRequest) {
  console.log("<><><> sam get req", request);

  const url = new URL("http://localhost:3000/sub");
  url.searchParams.set("id", "abc");
  url.searchParams.set("dummy", "123");

  return NextResponse.json({ method: "GET" });
}
