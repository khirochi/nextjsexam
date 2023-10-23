import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  console.log("<><><> login get req", request);

  const url = new URL("http://localhost:3000/sub");
  url.searchParams.set("id", "abc");
  url.searchParams.set("dummy", "123");

  // return NextResponse.redirect(url);
  redirect("http://localhost:3000/sub?id=abc");
}
