import { readFileSync } from 'fs';
import { join } from 'path';
import { replaceIndexNG } from '../test-config.helper';

describe('Check list of all', () => {
  it('Check clean all list from scully', () => {
    const index: string = readFileSync(
      join(__dirname, '../../../../dist/static/home/all/index.html'),
      'utf-8'
    ).toString();
    const cleanIndex = replaceIndexNG(index);
    expect(cleanIndex).toMatchSnapshot();
  });
});
