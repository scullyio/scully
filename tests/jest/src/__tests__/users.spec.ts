import { readFileSync } from 'fs';
import { join } from 'path';
import { replaceIndexNG } from '../test-config.helper';

describe('JsonPlugin: test user List', () => {
  it('Check clean blog index by scully', () => {
    const index: string = readFileSync(
      join(__dirname, '../../../../dist/static/user/index.html'),
      'utf-8'
    ).toString();
    const cleanIndex = replaceIndexNG(index);
    expect(cleanIndex).toMatchSnapshot();
  });
});
