import {readFileSync} from 'fs';
import {join} from 'path';

describe('guessParserOptions', () => {
  it("should remove files from route discovery so that routes aren't present", () => {
    let fileExists = true;
    // Trying to read the missing file should throw an error. If error doesn't happen, test fails. Meaning...
    // if the files exists (which it shouldn't, the test fails.
    try {
      readFileSync(join(__dirname, '../../dist/static/exclude/notpresent/index.html'), 'UTF8');
    } catch ({message, code, path}) {
      if (code === 'ENOENT' && path && path.endsWith('/notpresent/index.html')) {
        fileExists = false;
      }
    }
    expect(fileExists).toBe(false);
  });
});
