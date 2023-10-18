/** @type {import('next').NextConfig} */
const nextConfig = {
  // スタンドアロン機能を有効にする。
  // https://learn.microsoft.com/ja-jp/azure/static-web-apps/deploy-nextjs-hybrid#enable-standalone-feature
  output: "standalone",
};

module.exports = nextConfig;
