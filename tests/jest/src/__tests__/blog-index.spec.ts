import { readPage, replaceIndexNG } from '../test-config.helper';
import { expect } from '@jest/globals';
import { getMarkdownFiles } from './docsThere.spec';
import { join } from 'path';
import { readFileSync } from 'fs';
const fm = require('front-matter');

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

describe('AsciiDocs plugin: Test blog/page-4', () => {
  it('Check asciidoc render', () => {
    const index: string = readPage('blog/page-4');
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
  //TODO: fix this test
  // it('should have published set to true', () => {
  //   try {
  //     const file = getMarkdownFiles(join(__dirname, '../../../assets')).filter((path) => path.includes('page-6'));
  //     const { attributes } = fm(readFileSync(file[0], 'utf-8').toString());
  //     expect(attributes.published).toBe(true);
  //   } catch (e) {
  //     expect('').toBe('unable to read attributes from page6.md');
  //   }
  // });
});

describe('ContentFolder: Test foreign slug', () => {
  it('Check contentPlugin render', () => {
    const index: string = readPage('blog/Русский-слаг');
    const cleanIndex = replaceIndexNG(index);
    expect(cleanIndex).toMatchSnapshot();
  });
});
