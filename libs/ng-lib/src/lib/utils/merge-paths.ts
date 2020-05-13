export function mergePaths(base: string, path: string): string {
  if (base.endsWith('/') && path.startsWith('/')) {
    return `${base}${path.substr(1)}`;
  }
  if (!base.endsWith('/') && !path.startsWith('/')) {
    return `${base}/${path}`;
  }
  return `${base}${path}`;
}
