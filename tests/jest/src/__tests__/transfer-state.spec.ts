import { extractTransferState, readPage } from '../test-config.helper';
import { expect } from '@jest/globals';

describe('TransferState', () => {
  it('should add state to page 1', () => {
    const index: string = readPage('user/1');
    const pageTransferState = extractTransferState(index);
    expect(pageTransferState.user).toMatchSnapshot();
    expect(pageTransferState.posts).toMatchSnapshot();
  });

  it('should add state to page 2', () => {
    const index: string = readPage('user/1/post/1');
    const pageTransferState = extractTransferState(index);
    // expect(cleanIndex).toMatchSnapshot();
    expect(pageTransferState.posts).toMatchSnapshot();
    expect(pageTransferState.user).toMatchSnapshot();
  });
});
