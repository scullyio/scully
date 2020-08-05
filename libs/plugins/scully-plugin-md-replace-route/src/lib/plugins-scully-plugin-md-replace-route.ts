import { registerPlugin, scullyConfig } from '@scullyio/scully';
import { join } from 'path';

export const mdReplaceRoute = 'mdReplaceRoute';

export const mdReplaceRoutePlugin = registerPlugin('router', mdReplaceRoute, async (route, config: any) => {
  console.log(join(scullyConfig.homeFolder, config.file));
  return [
    {
      route,
      templateFile: join(scullyConfig.homeFolder, config.file),
      postRenderers: ['contentFolder'],
    },
  ];
});
