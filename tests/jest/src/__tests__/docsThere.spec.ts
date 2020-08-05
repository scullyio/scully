import { readdirSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { readPage, replaceIndexNG } from '../test-config.helper';
const fm = require('front-matter');
import { expect } from '@jest/globals';

describe('docsSite', () => {
  const startPath = join(__dirname, '../../../../docs');
  const basePath = join(__dirname, '../../../../');
  describe('should have content for all markdown files', () => {
    const files = getFiles(startPath)
      .map((file) => file.p.split(basePath).join(''))
      .map(getSlug);
    for (const file of files) {
      it(`check html for markdown ${file}`, () => {
        const index = readPage(file, 'doc-sites');
        const replace = replaceIndexNG(index);
        expect(replace).toMatchSnapshot();
      });
    }
  });
});

function getSlug(file) {
  const content = readFileSync(file, 'utf-8');
  const { attributes } = fm(content);
  const { slug } = attributes;
  return '' + (slug ? encodeURIComponent(slug) : file.slice(0, -3));
}

function getFiles(path) {
  const entries = readdirSync(path, { withFileTypes: true });
  const folders = entries.filter((folder) => folder.isDirectory());
  const files = entries
    .filter((file) => !file.isDirectory() && file.name.endsWith('.md'))
    .map((file) => ({ ...file, p: join(path, file.name) }));
  for (const folder of folders) {
    const newPath = `${path}/${folder.name}`; //?
    files.push(...getFiles(newPath));
  }
  return files; //?
}
