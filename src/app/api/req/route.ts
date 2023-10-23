import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // console.log("<><><> req get req", request);
  console.log("<><><> req get req", request.url.search("reserveid"));

  const url = new URL("http://localhost:3000");
  url.searchParams.set("id", "abc");
  url.searchParams.set("dummy", "123");

  return NextResponse.json({
    status: 200,
    message: request.url.search("reserveid"),
  });
}
