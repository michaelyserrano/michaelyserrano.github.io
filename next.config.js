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
  // Headers are not supported with output: 'export' (e.g. GitHub Pages). Skip when building for static deploy.
  async headers() {
    if (process.env.STATIC_EXPORT) return [];
    return [
      {
        source: "/api/sb-contact",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
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
  },
};

module.exports = nextConfig;
