import {readFileSync} from 'fs';
import {join} from 'path';
import {extractTransferState} from '../test-config.helper';

describe('TransferState', () => {
  it('should add state to page 1', () => {
    const index: string = readFileSync(
      join(__dirname, '../../../../dist/static/user/1/index.html'),
      'UTF8'
    ).toString();
    const pageTransferState = extractTransferState(index);
    expect(pageTransferState.user).toMatchSnapshot();
    expect(pageTransferState.posts).toMatchSnapshot();
  });

  it('should add state to page 2', () => {
    const index: string = readFileSync(
      join(__dirname, '../../../../dist/static/user/1/post/1/index.html'),
      'UTF8'
    ).toString();
    const pageTransferState = extractTransferState(index);
    // expect(cleanIndex).toMatchSnapshot();
    expect(pageTransferState.posts).toMatchSnapshot();
    expect(pageTransferState.user).toMatchSnapshot();
  });
});
