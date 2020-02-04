import {readFileSync} from 'fs';
import {join} from 'path';
import {replaceIndexNG} from '../test-config.helper';

describe('JsonPlugin: test', () => {
  it('Check clean blog index by scully', () => {
    const index: string = readFileSync(
      join(__dirname, '../../dist/static/blog/index.html'),
      'UTF8'
    ).toString();
    const cleanIndex = replaceIndexNG(index);
    expect(cleanIndex).toMatchSnapshot();
  });
});
