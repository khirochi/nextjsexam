/* eslint-disable react-hooks/rules-of-hooks */
// CSRしたい場合、設定する。
"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

let status = "pending";
let result: any;

function fetchPosts(userId): any {
  let url = `https://jsonplaceholder.typicode.com/posts${
    userId ? "?userId=" + userId : ""
  }`;
  let fetching = fetch(url)
    .then((res) => res.json())
    .then((success) => {
      status = "fulfilled";
      result = success;
    })
    .catch((error) => {
      status = "rejected";
      result = error;
    });

  return () => {
    if (status === "pending") {
      console.log("<><> throw promise");
      throw fetching; // Promise を throw
    } else if (status === "rejected") {
      console.log("<><> reject");
      throw result;
    } else if (status === "fulfilled") {
      console.log("<><> resolve:", result);
      return result; // Promise が解決したら、取得したデータを返す
    }
  };
}

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
  console.log("excomp2/page");
  console.log(date.toLocaleString());

  const searchParamsF = useSearchParams();
  const id = searchParamsF?.get("id");

  // useEffect内はCSRされる。
  // https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering
  // useEffect(() => {
  //   setTime(date.toLocaleString());
  // }, []);

  const posts = fetchPosts(null) as Array<{ id: string; title: string }>;

  console.log("<><><> posts:", posts);

  return (
    <Suspense fallback={"loading"}>
      <div>{time}</div>
      <div id="page">Page2 Module</div>
      <div>id={id}</div>
      <a href={`/${id ? "?id=" + id : ""}`}>back</a>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </Suspense>
  );
}
