export const customMarkdownOptions = (html: string) => {
  return html.replace(/\<a[^>]*\>[^<]*\<\/a\>\{[^}]*\}/g, (val, pos) => {
    const [start, rest] = val.split('{:');
    const injectStr = rest.slice(0, -1);
    const [initial, end] = start.split('href=');
    return `${initial} ${injectStr} href=${end}`;
  });
};
