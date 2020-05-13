/**
 * This function replaces the first instance of a route param with the passed value
 * @param route - the route from scullyconfig.routes section
 * @param val - a string that you will be adding into the parameterized route
 *
 * replaceFirstRouteParamWithVal('/foo/:bar', '123')        // '/foo/123'
 * replaceFirstRouteParamWithVal('/foo/:bar/:baz', '123')   // '/foo/123/:baz'
 */
export function replaceFirstRouteParamWithVal(
  route: string,
  val: string
): string {
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
