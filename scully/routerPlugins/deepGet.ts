/**
 * Returns the property if it exists in the object
 * @param p string or array describing the property to get (eg result.friends.list)
 * @param o the object to extract the data out
 */
export const deepGet = (p: string | string[], o: any) => {
  if (typeof p === 'string') {
    p = p.split('.');
  }
  return p.reduce((xs, x) => (xs && xs[x] ? xs[x] : undefined), o);
};
