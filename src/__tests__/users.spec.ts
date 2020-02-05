import {readFileSync} from 'fs';
import {join} from 'path';
import {replaceIndexNG} from '../test-config.helper';

describe('JsonPlugin: test user List', () => {
  it('Check clean blog index by scully', () => {
    const index: string = readFileSync(
      join(__dirname, '../../dist/static/user/index.html'),
      'UTF8'
    ).toString();
    const cleanIndex = replaceIndexNG(index);
    expect(cleanIndex).toMatchSnapshot();
  });
});

describe('TransferState: test user', () => {
  it('Check clean blog index by scully', () => {
    const index: string = readFileSync(
      join(__dirname, '../../dist/static/user/1/index.html'),
      'UTF8'
    ).toString();
    const cleanIndex = replaceIndexNG(index);
    expect(cleanIndex).toMatchSnapshot();
  });
});

describe('TransferState: test user post', () => {
  it('Check clean blog index by scully', () => {
    const index: string = readFileSync(
      join(__dirname, '../../dist/static/user/1/post/1/index.html'),
      'UTF8'
    ).toString();
    const cleanIndex = replaceIndexNG(index);
    expect(cleanIndex).toMatchSnapshot();
  });
});
