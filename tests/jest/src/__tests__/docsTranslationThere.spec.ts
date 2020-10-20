import { expect } from '@jest/globals';
import { readdirSync } from 'fs';
import { join } from 'path';

const startPath = join(__dirname, '../../../../docs');

describe('docTranslationThere', () => {
  const files = getMarkdownFiles(startPath);

  const spanish = files.filter((f) => f.endsWith('_es.md'));
  const english = files.filter((f) => !spanish.includes(f));

  it('should hava a spanish translation', () => {
    expect(english.length).toEqual(spanish.length);
    /**
     * check if there is a espanish traslation for every markdown
     */
    for (const file of files) {
      expect(file).toContain(file.replace('.md', '_es.md'));
    }
  });
});

export function getMarkdownFiles(path) {
  const entries = readdirSync(path, { withFileTypes: true });
  const folders = entries.filter((folder) => folder.isDirectory());
  const files = entries.filter((file) => !file.isDirectory() && file.name.endsWith('.md')).map((file) => join(path, file.name));
  for (const folder of folders) {
    const newPath = `${path}/${folder.name}`;
    files.push(...getMarkdownFiles(newPath));
  }
  return files;
}
