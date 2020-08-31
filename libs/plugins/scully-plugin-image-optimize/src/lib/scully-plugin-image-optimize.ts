import { registerPlugin, getPluginConfig } from '@scullyio/scully';
import { ImageOptimizeConfig } from './imageOptimizeConfig.interface';

import * as sharp from 'sharp';
import * as glob from 'glob';
import * as fs from 'fs-extra';

export const ImageOptimize = 'ImageOptimize';

export const scullyPluginImageOptimize = async (route): Promise<any> => {
  const imageOptimizeConfig: ImageOptimizeConfig = getPluginConfig(ImageOptimize);

  const matches = glob.sync(route.route);
  const MAX_WIDTH = imageOptimizeConfig.max_width; // 1800
  const QUALITY = imageOptimizeConfig.quality; // 70

  return Promise.all(
    matches.map(async (match) => {
      const stream = sharp(match);
      const info = await stream.metadata();
      if (info.width < MAX_WIDTH) {
        return;
      }
      const optimizedName = match.replace(
        /(\..+)$/,
        // tslint:disable-next-line:no-shadowed-variable
        (match, ext) => `-optimized${ext}`
      );
      await stream.resize(MAX_WIDTH).jpeg({ quality: QUALITY }).toFile(optimizedName);
      return fs.rename(optimizedName, match);
    })
  );
};

const validator = async () => [];

registerPlugin('router', ImageOptimize, scullyPluginImageOptimize, validator);
