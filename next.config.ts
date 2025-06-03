import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // Required for static HTML export
  basePath: isProd ? '/portfolio-website' : '',
  assetPrefix: isProd ? '/portfolio-website/' : '',
};

export default nextConfig;
