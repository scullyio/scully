import { pluginsBaseHrefRewrite } from './plugins-base-href-rewrite';

describe('pluginsBaseHrefRewrite', () => {
  it('should work', () => {
    expect(pluginsBaseHrefRewrite()).toEqual('plugins-base-href-rewrite');
  });
});
