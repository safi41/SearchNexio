/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export: `next build` emits a self-contained `out/` folder
  // that Netlify (or any static host) can serve with no server runtime.
  output: "export",
  // Static export can't use the on-demand image optimizer.
  images: { unoptimized: true },
  // Emit /about/index.html style paths so static hosts route cleanly.
  trailingSlash: true,
};

export default nextConfig;
