// Base path / canonical origin for the deployed site.
// Both are injected at build time by next.config.mjs.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nithin434.github.io/nithin"

/** Prefix a public-folder path with the deployment base path. */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`
}
