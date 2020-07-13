import { findPlugin } from '@scullyio/scully';

const plugin = findPlugin('extra');

describe('pluginsExtra', () => {
  it('should be a funcion', () => {
    expect(plugin).toEqual('plugins-extra');
  });
});
