import { readFileSync } from 'fs';
import { join } from 'path';
import { replaceIndexNG } from '../test-config.helper';
// import { JSDOM } from 'jsdom';

describe('check work of SEO-optimize plugin', () => {
  /** use jsDom to extract all links from html */
  const index: string = readFileSync(
    join(__dirname, '../../../../dist/static/about/index.html'),
    'UTF8'
  ).toString();
  /** you cant seem to se innerHTML on document directly in here. */
  document.body.parentElement.innerHTML = index;
  const anchors = Array.from(window.document.querySelectorAll('[href]'));

  it('there should be noRef and noOpen on external links', () => {
    const ext = anchors.find(a => a.getAttribute('target') === '_blank');
    expect(ext.getAttribute('rel')).toMatch('noreferrer noopener');
  });

  it('the home link should end with //', () => {
    const int = anchors.find(a => a.getAttribute('href') === '/home/');
    expect(int.getAttribute('href')).toMatch('/home/');
  });
});
