import {pathExists} from 'fs-extra';
import {join} from 'path';
import * as yargs from 'yargs';
import {ScullyConfig} from '..';
import {angularRoot, scullyConfig} from './config';
import { logWarn, yellow } from './log';

export const {configFile: configFileName} = yargs
  .string('cf')
  .alias('cf', 'configFile')
  .default('cf', 'scully.config.js')
  .describe('cf', 'provide name for config file').argv;

export const compileConfig = async (): Promise<ScullyConfig> => {
  try {
    const path = join(angularRoot, configFileName);
    if (!(await pathExists(path))) {
      /** no ts config, nothing to do. */
      logWarn(`Config file "${yellow(path)}" not found, only rendering normal routes`)
      return ({} as unknown) as ScullyConfig;
    }
    const {config} = await import(path);
    return config;
  } catch (e) {
    console.error(e);
    return ({} as unknown) as ScullyConfig;
  }
};

function myReq(path: string): Promise<any> {
  return import(join(scullyConfig.homeFolder, path));
}
