import { expect } from '@jest/globals';
import { readdirSync, readFileSync } from 'fs';
import marked from 'marked';
import { join } from 'path';
import { readPage } from '../test-config.helper';

const fm = require('front-matter');

const startPath = join(__dirname, '../../../../docs');
const basePath = join(__dirname, '../../../../');

describe('docsSite', () => {
  const files = getMarkdownFiles(startPath);
  for (const file of files) {
    const route = converToRoute(file);
    const index = readPage(route, 'doc-sites');
    document.body.parentElement.innerHTML = index;
    const headers = Array.from(window.document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    const headings = getHeadings(file);
    describe(`Route: "${route}"`, () => {
      for (const heading of headings) {
        it(`should have heading "${heading.textContent}"`, () => {
          const header = headers.find((head: HTMLHeadingElement) => head.textContent === heading.textContent); //||{textContent:''};
          expect(header.textContent).toMatch(heading.textContent);
        });
      }
    });
  }
});

/**
 * Read all headings from markdown file, convert them to a dom node
 * exclude ones that have exception in them
 */
function getHeadings(file) {
  const exceptions = ['# angular tutorial', 'my blog post', 'heading 1 ### subheading 1 ## heading 2 ### subheading 2'].map((e) =>
    e.trim().toLowerCase()
  );
  return readFileSync(file)
    .toString('utf-8')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('#') && !exceptions.some((exception) => line.toLowerCase().includes(exception)))
    .map((line) => {
      const outer = document.createElement('div');
      outer.innerHTML = marked(line.trim());
      return outer.firstChild;
    });

  // .map((line) => line.slice(line.indexOf(' ')).trim());
}

/** calculate the 'file' name from the markdown file or front-matter */
function converToRoute(file) {
  file = file.split(basePath).join('');
  const content = readFileSync(file, 'utf-8');
  const { attributes } = fm(content);
  const { slug } = attributes;
  return '' + (slug ? encodeURIComponent(slug) : file.slice(0, -3));
}

function getMarkdownFiles(path) {
  const entries = readdirSync(path, { withFileTypes: true });
  const folders = entries.filter((folder) => folder.isDirectory());
  const files = entries.filter((file) => !file.isDirectory() && file.name.endsWith('.md')).map((file) => join(path, file.name));
  for (const folder of folders) {
    const newPath = `${path}/${folder.name}`; //?
    files.push(...getMarkdownFiles(newPath));
  }
  return files; //?
}
