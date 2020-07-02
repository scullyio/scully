import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { readPage, replaceIndexNG } from '../test-config.helper';
const fm = require('front-matter');
import { expect } from '@jest/globals';

describe('docsSite', () => {
  const path = join(__dirname, '../../../../docs');
  describe('should have content for all markdown files', () => {
    const files = readdirSync(path)
      .filter((file) => file.endsWith('.md'))
      .map((file) => getSlug(file, path));
    for (const file of files) {
      it(`check html for markdown ${file}`, () => {
        const index = readPage(file, 'doc-sites');
        const replace = replaceIndexNG(index);
        expect(replace).toMatchSnapshot();
      });
    }
  });
});

function getSlug(file, path) {
  const content = readFileSync(join(path, file), 'utf-8');
  const { attributes } = fm(content);
  const { slug } = attributes;
  return 'docs/' + (slug ? encodeURIComponent(slug) : file.slice(0, -3));
}
