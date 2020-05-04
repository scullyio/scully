/**
 * Take a string, preferably resembling an URL, take out the search params, the anchors, and the ending slash
 * @param str
 */
export const basePathOnly = (str: string): string => {
  if (str.includes('#')) {
    str = str.split('#')[0];
  }
  if (str.includes('?')) {
    str = str.split('?')[0];
  }
  const cleanedUpVersion = str.endsWith('/') ? str.slice(0, -1) : str;
  return cleanedUpVersion;
};
