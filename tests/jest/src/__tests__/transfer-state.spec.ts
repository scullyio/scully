import { extractTransferState, readPage } from '../test-config.helper';
import { expect } from '@jest/globals';

describe('TransferState', () => {
  it('should add state to page 1', () => {
    const index: string = readPage('user/1');
    const pageTransferState = extractTransferState(index);
    expect(pageTransferState.user).toMatchSnapshot();
    expect(pageTransferState.posts).toMatchSnapshot();
  });

  it('should add state to page 1/post/1', () => {
    const index: string = readPage('user/1/post/1');
    const pageTransferState = extractTransferState(index);
    // expect(cleanIndex).toMatchSnapshot();
    expect(pageTransferState.posts).toMatchSnapshot();
    expect(pageTransferState.user).toMatchSnapshot();
  });

  it('should have properly decoded catchphrase data', () => {
    const index: string = readPage('user/1');
    const pageTransferState = extractTransferState(index);
    const catchPhrase = `Multi-layered </script> 'client-server' SQL DROP USERS\r\n neural-net`;
    expect(pageTransferState.user.company.catchPhrase).toMatch(catchPhrase);
  });
});
