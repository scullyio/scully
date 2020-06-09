import { readFileSync } from 'fs';
import { join } from 'path';
import { replaceIndexNG } from '../test-config.helper';
import { JSDOM, DOMWindow } from 'jsdom';

describe('Flash Prevention: Test Flash Prevention', () => {
  let index: string;
  let dom, window: DOMWindow;

  beforeEach(() => {
    index = readFileSync(
      join(__dirname, '../../../../dist/static/slow/index.html'),
      'utf-8'
    ).toString();
    dom = new JSDOM(index);
    window = dom.window;
  });

  it(`Make sure both elements appear`, () => {
    const cleanIndex = replaceIndexNG(index);
    const indexOfAppRootStart = cleanIndex.indexOf('<app-root ');
    const indexOfAppRootEnd = cleanIndex.indexOf('</app-root>');
    const indexOfMockAppRootStart = cleanIndex.indexOf('<app-root-scully ');
    const indexOfMockAppRootEnd = cleanIndex.indexOf('</app-root-scully>');
    expect(indexOfAppRootStart).not.toBe(-1);
    expect(indexOfAppRootEnd).not.toBe(-1);
    expect(indexOfMockAppRootStart).not.toBe(-1);
    expect(indexOfMockAppRootEnd).not.toBe(-1);
  });

  it(`Make sure blacklisted attributes are removed`, () => {
    let appRoot = window.document.querySelector('app-root');
    let mockRoot = window.document.querySelector('app-root-scully');
    let appRootAttributes = Object.getOwnPropertyNames(appRoot.attributes);
    let mockRootAttributes = Object.getOwnPropertyNames(mockRoot.attributes);

    let appRootHasNgVersion = appRoot.hasAttribute('ng-version');
    let mockRootHasNgVersion = mockRoot.hasAttribute('ng-version');
    expect(appRootHasNgVersion).toBe(false);
    expect(mockRootHasNgVersion).toBe(true);

    let appRootHasNgHost = appRootAttributes.reduce(
      (a, c) => a || c.startsWith('_nghost'),
      false
    );
    let mockRootHasNgHost = mockRootAttributes.reduce(
      (a, c) => a || c.startsWith('_nghost'),
      false
    );
    expect(appRootHasNgHost).toBe(false);
    expect(mockRootHasNgHost).toBe(true);
  });

  it(`Make sure non-blacklisted attributes stay`, () => {
    let appRoot = window.document.querySelector('app-root');
    let mockRoot = window.document.querySelector('app-root-scully');
    let appRootHasClassFoo = appRoot.classList.contains('foo');
    let mockRootHasClassFoo = mockRoot.classList.contains('foo');

    expect(appRootHasClassFoo).toBe(true);
    expect(mockRootHasClassFoo).toBe(true);
  });
});
