import { JSDOM } from 'jsdom';
export function addNgIdAttribute(html: string, id: string): string {
  if (!id) {
    return html;
  }
  try {
    const dom = new JSDOM(html, { runScripts: 'outside-only' });
    const { window } = dom;
    const { document } = window;
    const walk = document.createTreeWalker(document.body as any);
    let cur = (walk.currentNode as any) as HTMLElement;
    while (cur) {
      if (cur.nodeType === 1) {
        cur.setAttribute(id, '');
      }
      cur = (walk.nextNode() as any) as HTMLElement;
    }
    return document.body.innerHTML;
  } catch (e) {
    console.error(e);
  }

  return '';
}
