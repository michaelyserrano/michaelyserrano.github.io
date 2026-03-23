/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  // GitHub Pages: uncomment and set to your repo name if this is a project site (e.g. "my-repo")
  // basePath: "",
  // assetPrefix: "/",
  // Next.js 16 uses Turbopack by default; empty config acknowledges we don't need custom Turbopack settings
  turbopack: {
    root: path.resolve(__dirname),
  },
  webpack: (config, { dev }) => {
    // Avoid PackFileCacheStrategy "Unable to snapshot resolve dependencies" warning in dev (when using --webpack)
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

// Headers are not supported with output: 'export'. Only add when building for a server (e.g. Vercel).
if (process.env.STATIC_EXPORT !== "1") {
  nextConfig.headers = async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
      ],
    },
    {
      source: "/api/contact",
      headers: [
        { key: "Access-Control-Allow-Methods", value: "POST" },
        { key: "Access-Control-Allow-Headers", value: "Content-Type" },
      ],
    },
  ];
}

module.exports = nextConfig;
