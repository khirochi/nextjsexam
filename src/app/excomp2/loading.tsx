// 参考
// https://nextjs.org/docs/app/api-reference/file-conventions/loading

export default function loading() {
  // SSRのため表示されない
  console.log("loading");
  return <div id="loading">loading...</div>;
}
