/**
 * Returns a route in a more usable form, and a
 * @param route to split
 */
export function routeSplit(route: string) {
  if (!route) {
    return { parts: [], params: [], createPath: (..._arg) => '' };
  }
  const parts = route
    .split('/')
    .map((part, position) => ({ part, position } as SplitRoute));
  const params: SplitRoute[] = parts
    .filter(Boolean)
    .filter(p => p.part.startsWith(':'))
    .map(p => ({ ...p, part: p.part.slice(1) }));
  const createPath = (...data: string[]) => {
    const injectData = data.reduce((r, val, pos) => {
      r[params[pos].position] = val;
      return r;
    }, []);
    return parts.reduce(
      (url, part, pos) =>
        `${url}${injectData[pos] !== undefined ? injectData[pos] : part.part}${
          pos !== parts.length - 1 ? '/' : ''
        }`,
      ''
    );
  };
  return { parts, params, createPath };
}

export interface SplitRoute {
  part: string;
  position: number;
}
