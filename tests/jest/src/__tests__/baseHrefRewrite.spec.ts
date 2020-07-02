import { readPage } from '../test-config.helper';

describe('Check if base-ref rewite ', () => {
  it('should be rewritten for unchanged pages', () => {
    const index: string = readPage('basehref');

    /** you cant seem to se innerHTML on document directly in here. */
    document.body.parentElement.innerHTML = index;
    const bases = Array.from(window.document.querySelectorAll('base'));
    const hr = bases.find((b) => b.href !== undefined);
    expect(hr.getAttribute('href')).toMatch('/basehref/');
  });
  it('should be rewritten for changed pages', () => {
    const index: string = readPage('basehref/rewritten');
    /** you cant seem to se innerHTML on document directly in here. */
    document.body.parentElement.innerHTML = index;
    const bases = Array.from(window.document.querySelectorAll('base'));
    const hr = bases.find((b) => b.href !== undefined);
    expect(hr.getAttribute('href')).toMatch('/basehref/rewritten/');
  });

  it('should be added for pages that had none', () => {
    const index = readPage('basehref/removed');
    /** you cant seem to se innerHTML on document directly in here. */
    document.body.parentElement.innerHTML = index;
    const bases = Array.from(window.document.querySelectorAll('base'));
    const hr = bases.find((b) => b.href !== undefined);
    expect(hr.getAttribute('href')).toMatch('/basehref/removed/');
  });
});
