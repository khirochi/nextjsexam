// 参考
// https://nextjs.org/docs/app/api-reference/file-conventions/template
// 使い分けについて
// https://zenn.dev/cybozu_frontend/articles/8caf1decb1e82c

import { Suspense } from "react";

export default function template({ children }: { children: React.ReactNode }) {
  // SSRのため表示されない
  console.log("template");
  return (
    <div id="template">
      template
      <Suspense fallback={"loading"}>{children}</Suspense>
    </div>
  );
}
