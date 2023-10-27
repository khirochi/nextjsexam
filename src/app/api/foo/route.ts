import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  console.log("GET request", searchParams.get("name"));

  // const res = await fetch(
  //   "https://p903-functions-nodetest-2.azurewebsites.net/api/HttpTrigger1?code=3sMQNrPK5XW-G7Q_o_xkGCPw0wMIyKEGYaEFeHGG7yhYAzFuO5irCQ==",
  //   { next: { revalidate: 300 } }
  // );
  // const message = await res?.text();

  return NextResponse.json({ method: "GET" });
  // return NextResponse.json({ method: "GET", message });
  // return new Response(JSON.stringify({ message: "Hello World" }));
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  console.log("POST request", body.name);
  return NextResponse.json({ method: "POST" });
  // return new Response(JSON.stringify({ message: "Hello World" }));
}
