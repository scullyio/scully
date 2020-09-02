import { expect } from '@jest/globals';
import { exception } from 'console';
import { DH_CHECK_P_NOT_SAFE_PRIME } from 'constants';
import { readdirSync, readFileSync } from 'fs';
import marked from 'marked';
import { join } from 'path';
import { readPage } from '../test-config.helper';

const fm = require('front-matter');

const startPath = join(__dirname, '../../../../docs');
const basePath = join(__dirname, '../../../../');

describe('docsSite', () => {
  const files = getMarkdownFiles(startPath);
  /**
   * check if there is HTML for every markdown
   * and check if all headings are generated
   */
  for (const file of files) {
    /** load and parse FM from MD file */
    const prettyFile = file.replace(basePath, './');
    const mdContent = readFileSync(file, 'utf-8');

    const { attributes } = checkFM(prettyFile, mdContent);
    const { title, lang, slug } = attributes;

    /** load 'index.html' */
    const route = (slug ? encodeURIComponent(slug) : file.slice(0, -3)).replace(basePath, '');
    const index = readPage(route, 'doc-sites');
    document.body.parentElement.innerHTML = index;

    const headers = Array.from(window.document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    const headings = getHeadings(mdContent);
    describe(`Route: "${route}"`, () => {
      /**
       * Check if all headings extracted from markdown are rendered as an Hx in the index.html
       */
      for (const heading of headings) {
        it(`should have heading "${heading.textContent}"`, () => {
          const header = headers.find((head: HTMLHeadingElement) => head.textContent === heading.textContent); //||{textContent:''};
          expect(header.textContent).toMatch(heading.textContent);
        });
      }
    });

    describe(`File "${prettyFile}"`, () => {
      it('should have the title attribute in its front-matter', () => expect(typeof title).toBe('string'));
      it('should have at least a length of 2 on the title attribute', () => expect(title.length).toBeGreaterThan(2));
      it('should have the lang attribute in its front-matter', () => expect(typeof lang).toBe('string'));
      it('should have a length of 2 on the lang attribute', () => expect(lang.length).toStrictEqual(2));
    });
  }
});

function checkFM(prettyFile, mdContent) {
  describe(`File "${prettyFile}"`, () => {
    it('should have a valid Front-Matter', () => {
      const err = jest.fn();
      try {
        const yaml = fm(mdContent);
        expect(yaml.attributes).toBeDefined();
      } catch (e) {
        err(e);
      }
      expect(err).not.toHaveBeenCalled();
    });
  });
  try {
    return fm(mdContent);
  } catch {
    return { attributes: {} };
  }
}

/**
 * Read all headings from markdown file, convert them to a dom node
 * exclude ones that have exception in them
 */
function getHeadings(content: string) {
  const exceptions = ['# angular tutorial', 'my blog post', 'heading 1 ### subheading 1 ## heading 2 ### subheading 2'].map((e) =>
    e.trim().toLowerCase()
  );
  return content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('#') && !exceptions.some((exception) => line.toLowerCase().includes(exception)))
    .map((line) => {
      const outer = document.createElement('div');
      outer.innerHTML = marked(line.trim());
      return outer.firstChild;
    });
}

function getMarkdownFiles(path) {
  const entries = readdirSync(path, { withFileTypes: true });
  const folders = entries.filter((folder) => folder.isDirectory());
  const files = entries.filter((file) => !file.isDirectory() && file.name.endsWith('.md')).map((file) => join(path, file.name));
  for (const folder of folders) {
    const newPath = `${path}/${folder.name}`;
    files.push(...getMarkdownFiles(newPath));
  }
  return files;
}
