import { readdir, readFileSync } from 'fs';
import { join } from 'path';
import { readPage, replaceIndexNG } from '../test-config.helper';
const fm = require('front-matter');

describe('docsSite', () => {
  const path = join(__dirname, '../../../../docs');

  it('should have content for all markdown files', async () => {
    const files = (
      await new Promise<string[]>((resolve) =>
        readdir(path, (err, data) => resolve(data))
      )
    )
      .filter((file) => file.endsWith('.md'))
      .map((file) => getSlug(file, path));
    for (const file of files) {
      expect(replaceIndexNG(readPage(file, 'doc-sites'))).toMatchSnapshot();
    }
  });
});

function getSlug(file, path) {
  const content = readFileSync(join(path, file), 'utf-8');
  const { attributes } = fm(content);
  const { slug } = attributes;
  return 'docs/' + (slug ? encodeURIComponent(slug) : file.slice(0, -3));
}
