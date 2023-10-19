/* eslint-disable react-hooks/rules-of-hooks */
// CSRしたい場合、設定する。
"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [time, setTime] = useState<string | null>(null);
  const date = new Date();

  // CSRのためブラウザに表示される
  console.log(date.toLocaleString());

  const searchParamsF = useSearchParams();
  const id = searchParamsF?.get("id");

  // useEffect内はCSRされる。
  // https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering
  useEffect(() => {
    setTime(date.toLocaleString());
  }, []);

  return (
    <Suspense fallback={"loading"}>
      <div>{time}</div>
      <div id="page">Page2 Module</div>
      <div>id={id}</div>
      <a href={"/"}>back</a>
    </Suspense>
  );
}
