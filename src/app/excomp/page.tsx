/* eslint-disable react-hooks/rules-of-hooks */
// CSRしたい場合、設定する。
import Link from "next/link";

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
  console.log(params);
  console.log(searchParams);

  return (
    <>
      <div id="page">Page Module</div>
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
    </>
  );
}
export const dynamic = "force-static";
