// CSRしたい場合、設定する。
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// 参考
// https://nextjs.org/docs/app/building-your-application/routing
// https://nextjs.org/docs/app/api-reference/file-conventions/page

export default function page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [time, setTime] = useState(null);

  const date = new Date();

  // useEffect内はCSRされる。
  // https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering
  useEffect(() => {
    setTime(date.toLocaleString());
  }, []);

  return (
    <>
      <div id="page">Page Module</div>
      <div>time:{time}</div>
      <div>params={params.slug}</div>
      {Object.keys(searchParams).map((key) => (
        <div key={key}>
          searchParams=[key:{key} value={searchParams[key]}]
        </div>
      ))}
      <div>
        <Link
          href={{ pathname: "/", query: searchParams }}
          style={{ fontSize: "18px" }}
        >
          Return Home
        </Link>
      </div>
      <Link href={{ pathname: "/", query: searchParams }}>
        <div style={{ fontSize: "18px" }}>Return Home</div>
      </Link>
    </>
  );
}
