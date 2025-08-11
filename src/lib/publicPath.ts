/**
 * Resolve a URL for an asset that lives in the `public/` folder.
 * Works whether the app is served from the domain root or a subfolder
 * (e.g., GitHub Pages). Returns an absolute URL string.
 */
export function getPublicAssetUrl(relativePath: string): string {
  const cleanedRelativePath = relativePath.replace(/^\/+/, '')

  // Derive a base like https://host/subdir/ (no hash, ends with slash)
  const pathname = window.location.pathname
  const basePath = pathname.endsWith('/')
    ? pathname
    : pathname.substring(0, pathname.lastIndexOf('/') + 1)

  const base = window.location.origin + basePath
  const url = new URL(cleanedRelativePath, base)
  return url.toString()
}


