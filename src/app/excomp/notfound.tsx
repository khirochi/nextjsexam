import Link from "next/link";

// 参考
// https://nextjs.org/docs/app/api-reference/file-conventions/not-found

export default function notfound() {
  return (
    <div id="notfound">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
