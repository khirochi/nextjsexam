// Note: the way you would do data fetching depends on
// the framework that you use together with Suspense.
// Normally, the caching logic would be inside a framework.

let cache = new Map();

export function fetchData(url) {
  console.log("fetchData");
  if (!cache.has(url)) {
    cache.set(url, getAlbums());
  }
  return cache.get(url);
}

async function getAlbums() {
  // Add a fake delay to make waiting noticeable.
  await new Promise((resolve) => {
    setTimeout(resolve, 30000);
  });

  const result = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );

  return result;
}
