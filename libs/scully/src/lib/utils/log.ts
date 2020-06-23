import chalk from 'chalk';
import { scullyConfig, loadConfig } from '../utils/config';
import { registerPlugin } from '../pluginManagement/pluginRepository';
import { writeFileSync } from 'fs-extra';
import { join } from 'path';
import { appendFile, createWriteStream } from 'fs';
import { rejects } from 'assert';

export const orange = chalk.hex('#FFA500');
export const { white, red, yellow, green }: { [x: string]: any } = chalk;

export enum LogSeverity {
  normal,
  warning,
  error,
  none,
}

const logToFile = loadConfig
  .then(() => (string) => {
    return new Promise((res, rej) =>
      appendFile(join(scullyConfig.homeFolder, 'scully.log'), string, (e) =>
        e ? rej(e) : res
      )
    );
  })
  .then((file) => {
    /** inject a couple of newlines to indicate new run */
    file('\n\n\n');
    return file;
  });
export const log = (...a) => enhancedLog(white, LogSeverity.normal, ...a);
export const logError = (...a) => enhancedLog(red, LogSeverity.error, ...a);
export const logWarn = (...a) => enhancedLog(orange, LogSeverity.warning, ...a);

function enhancedLog(colorFn, severity: LogSeverity, ...args: any[]) {
  const out = [];
  for (const item of args) {
    out.push(typeof item === 'string' ? makeRelative(item) : item);
  }
  logToFile
    .then((file) => {
      if (severity >= scullyConfig.logFileSeverity) {
        file(out.join('\n'));
        file('\n');
      }
    })
    .catch((e) => {
      /** silently ignore log errors */
      console.log('log error', e);
    });
  console.log(colorFn(...out));
}

function makeRelative(txt: string) {
  const h = scullyConfig?.homeFolder || process.cwd();
  return txt.replace(h, '.');
}
