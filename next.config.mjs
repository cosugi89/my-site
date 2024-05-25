/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export", // アプリではなく静的なサイトとして出力される
  images: {
    unoptimized: true, // imageタグで画像が使われた際に、特別な最適化処理を行わなくなる
  }
};

export default nextConfig;
