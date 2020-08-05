import { readPage } from '../test-config.helper';

describe('extra-users', () => {
  it('should generate user-page 1 and 2', () => {
    let fileExists = true;
    // Trying to read the missing file should throw an error. If error doesn't happen, test fails. Meaning...
    // if the files exists (which it shouldn't, the test fails.
    try {
      readPage('/user/1');
      readPage('/user/2');
    } catch ({ message }) {
      if (message.includes('" not found at location "')) {
        fileExists = false;
      }
    }
    expect(fileExists).toBe(true);
  });
});
