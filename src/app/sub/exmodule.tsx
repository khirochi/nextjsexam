export default function exmodule() {
  const now = new Date();

  return (
    <>
      {/*
        【注意】
        時刻まで表示しようとするとサーバとクライアントの時刻ずれからレンダリング結果が
        一致せずにエラーになる。
       */}
      <div>{`page view Date:${now.toDateString()}`}</div>
      <div>Ex Module</div>
    </>
  );
}
