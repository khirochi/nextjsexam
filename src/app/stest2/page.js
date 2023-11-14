"use client";

import useTest from "../_components/stest2";

export default function App() {
  console.log("app");
  const artistId = "the-beatles";
  const [use, getData] = useTest();

  const albums = getData(artistId);

  console.log("app ret");
  return (
    <>
      <h1>{"The Beatles"}</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </>
  );
}
