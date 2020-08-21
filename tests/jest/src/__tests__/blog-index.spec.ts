import { readPage, replaceIndexNG } from '../test-config.helper';
import { expect } from '@jest/globals';

describe('Static: Test blog index', () => {
  it('Check clean blog index by scully', () => {
    const index: string = readPage('blog');
    const cleanIndex = replaceIndexNG(index);
    expect(cleanIndex).toMatchSnapshot();
  });
});

describe('ContentFolder: Test blog/page-1', () => {
  it('Check contentPlugin render', () => {
    const index: string = readPage('blog/page-1');
    const cleanIndex = replaceIndexNG(index);
    expect(cleanIndex).toMatchSnapshot();
  });
});

describe('ContentFolder: Test blog/page-6 expired publishDate', () => {
  it('Check contentPlugin render', () => {
    const index: string = readPage('blog/page-6');
    const cleanIndex = replaceIndexNG(index);
    expect(cleanIndex).toMatchSnapshot();
  });
});

describe('ContentFolder: Test foreign slug', () => {
  it('Check contentPlugin render', () => {
    const index: string = readPage('blog/Русский-слаг');
    const cleanIndex = replaceIndexNG(index);
    expect(cleanIndex).toMatchSnapshot();
  });
});
