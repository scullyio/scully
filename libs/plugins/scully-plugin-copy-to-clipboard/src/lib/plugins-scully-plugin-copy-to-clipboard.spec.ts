import { copyToClipboard } from './plugins-scully-plugin-copy-to-clipboard';

describe('ScullyPluginCopyToClipboard', () => {
  it('should work', () => {
    expect(copyToClipboard).toEqual('copyToClipboard');
  });
});
