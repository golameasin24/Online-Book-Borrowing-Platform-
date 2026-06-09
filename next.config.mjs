/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // 👈 এটি পৃথিবীর যেকোনো ওয়েবসাইট/ডোমেইনের ইমেজ অ্যালাউ করবে
      },
      {
        protocol: "http", // 👈 লোকালহোস্ট বা আনসিকিউরড লিঙ্কের ইমেজের জন্য
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
