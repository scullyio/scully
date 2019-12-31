export function replaceFirstRouteParamWithVal(route: string, val: string): string {
  const pieces: string[] = route.split('/');
  for (let i = 0; i < pieces.length; i++) {
    if (pieces[i].startsWith(':')) {
      pieces[i] = val;
      // Once you replace a param, break the loop.
      // This allows you to use this on routes with multiple params.
      break;
    }
  }
  return pieces.join('/');
}