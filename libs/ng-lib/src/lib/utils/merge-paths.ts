export function mergePaths(base: string, path: string): string {
  base = base ?? '';
  if (base.endsWith('/') && path.startsWith('/')) {
    return `${base}${path.substr(1)}`;
  }
  if (!base.endsWith('/') && !path.startsWith('/')) {
    return `${base}/${path}`;
  }
  return `${base}${path}`;
}
