// 参考
// https://nextjs.org/docs/app/building-your-application/routing
// https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts
// 使い分けについて
// https://zenn.dev/cybozu_frontend/articles/8caf1decb1e82c

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="layout">
      layout
      <main>{children}</main>
    </div>
  );
}
