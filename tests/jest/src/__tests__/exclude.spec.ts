import { readPage } from '../test-config.helper';

describe('guessParserOptions', () => {
  it("should remove files from route discovery so that routes aren't present", () => {
    let fileExists = true;
    // Trying to read the missing file should throw an error. If error doesn't happen, test fails. Meaning...
    // if the files exists (which it shouldn't, the test fails.
    try {
      readPage('/exclude/notpresent');
    } catch ({ message }) {
      if (message.includes('" not found at location "')) {
        fileExists = false;
      }
    }
    expect(fileExists).toBe(false);
  });
});
