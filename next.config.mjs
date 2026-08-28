/** @type {import('next').NextConfig} */

// GitHub Pages project site: https://nithin434.github.io/nithin/
// Override with NEXT_PUBLIC_BASE_PATH="" when serving from a domain root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/nithin"

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ?? `https://nithin434.github.io${basePath}`,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
