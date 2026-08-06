/** Ensures BASE_URL has a trailing slash for safe path concatenation. */
export function getBaseUrl(): string {
  const raw = import.meta.env.BASE_URL;
  return raw.endsWith('/') ? raw : `${raw}/`;
}

/** Resolve a site path under the configured base (e.g. research → /freeman-portfolio/research). */
export function withBase(path: string): string {
  const base = getBaseUrl();
  const segment = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${segment}`;
}