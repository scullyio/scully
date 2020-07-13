import { scullyConfig } from '@scullyio/scully';
import { join } from 'path';

export const cacheFolder = join(
  scullyConfig.homeFolder,
  'node_modules/.cache/scully'
);
