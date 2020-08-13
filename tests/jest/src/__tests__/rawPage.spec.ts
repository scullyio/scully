import { readPage, replaceIndexNG } from '../test-config.helper';
import { expect } from '@jest/globals';

const expectedContent = `The url "/rawData" is not provided in the sampels app, but comes from an external resource`;

describe('Check list of all', () => {
  it('Check clean all list from scully', () => {
    const index: string = readPage('/rawRoute');
    expect(index).toContain(expectedContent);
  });
});
