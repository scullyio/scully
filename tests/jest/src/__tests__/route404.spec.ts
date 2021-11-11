import { readPage, replaceIndexNG } from '../test-config.helper';
// import { title404 } from '../../../../libs/scully/src/lib/utils/serverstuff/title404';
import { expect } from '@jest/globals';

// copied in here, because the import blows up in GA.
const title404 = '404 - URL not provided in the app Scully is serving';

describe('baseroute 404 handling working', () => {
  const index: string = readPage('/test/fake1');
  const cleanIndex = replaceIndexNG(index);

  /** test is disabled because SPS and browser-based rendering will have different results by design. */
  // it('should match the snapshot', () => {
  //   expect(cleanIndex).toMatchSnapshot();
  // });

  it(`Should have the text "${title404}"`, () => {
    /** the SPS will _always_ render the 404 page from inside the app */
    const isOk = cleanIndex.includes(title404) || cleanIndex.includes('<app-pagenotfound');
    expect(isOk).toBe(true);
  });
});
