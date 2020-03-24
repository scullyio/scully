export const customMarkdownOptions = (html: string) => {
  return html.replace(/\<a[^>]*\>[^<]*\<\/a\>\{[^}]*\}/g, (val, pos) => {
    const [start, rest] = val.split('{:');
    const injectStr = rest.slice(0, -1);
    const [initial, end] = start.split('href=');
    return `${initial} ${injectStr} href=${end}`;
  });
};

// const test = `
// sdfoasjdfkl sakdfjas lkdf;askdjf as;djf asldkjf
// <a href="url">link</a>{:target="_blank" class="pepe"}
// SOME BULLSHIT STARTING TEXT
// <a href="bar">foo</a>{:target="_blank"}
// BS MIDDLE TEXT
// <a href="bar">foo</a>{:target="_blank"}
// END TEXT

// SOME BULLSHIT STARTING TEXT
// <a href="bar">foo</a>{:target="_blank"}
// BS MIDDLE TEXT
// <a href="bar">foo</a>{:target="_blank"}
// END TEXT
// `

// customMarkdownOptions(test); //?

// registerPlugin('render','customMarkdownOptions', customMarkdownOptions)
