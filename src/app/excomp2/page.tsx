/* eslint-disable react-hooks/rules-of-hooks */
// CSRしたい場合、設定する。
"use client";

import { Suspense, useState, useEffect } from "react";

export default function page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [time, setTime] = useState<string | null>(null);
  const date = new Date();

  // useEffect内はCSRされる。
  // https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering
  useEffect(() => {
    setTime(date.toLocaleString());
  }, []);

  return (
    <Suspense fallback={"loading"}>
      <div>{time}</div>
      <div id="page">Page2 Module</div>
      <div>id={searchParams?.id}</div>
      <a href={"/"}>back</a>
    </Suspense>
  );
}
