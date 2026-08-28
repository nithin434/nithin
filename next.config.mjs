/** @type {import('next').NextConfig} */

// GitHub Pages user site: https://nithin434.github.io/ — served from the domain
// root, so no base path. Set NEXT_PUBLIC_BASE_PATH="/sub" to host under a subpath.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const nextConfig = {
  output: "export",
  basePath: basePath || undefined,
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
