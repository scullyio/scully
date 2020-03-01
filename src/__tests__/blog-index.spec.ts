import {readFileSync} from 'fs';
import {join} from 'path';
import {replaceIndexNG} from '../test-config.helper';

describe('Static: Test blog index', () => {
  it('Check clean blog index by scully', () => {
    const index: string = readFileSync(
      join(__dirname, '../../dist/static/blog/index.html'),
      'UTF8'
    ).toString();
    const cleanIndex = replaceIndexNG(index);
    expect(cleanIndex).toMatchSnapshot();
  });
});

describe('ContentFolder: Test blog/page-1', () => {
  it('Check contentPlugin render', () => {
    const index: string = readFileSync(
      join(__dirname, '../../dist/static/blog/page-1/index.html'),
      'UTF8'
    ).toString();
    const cleanIndex = replaceIndexNG(index);
    expect(cleanIndex).toMatchSnapshot();
  });
});
