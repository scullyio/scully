import { findPlugin } from '@scullyio/scully';

const plugin = findPlugin('plugins-remove-scripts');

describe('pluginsRemoveScripts', () => {
  it('should be a funcion', () => {
    expect(plugin).toEqual('plugins-remove-scripts');
  });
});
