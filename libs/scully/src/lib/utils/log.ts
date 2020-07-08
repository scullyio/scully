import chalk from 'chalk';
import { appendFile } from 'fs';
import { join } from 'path';
import { scullyConfig } from '../utils/config';
import { findAngularJsonPath } from './findAngularJsonPath';

export const orange = chalk.hex('#FFA500');
export const { white, red, yellow, green }: { [x: string]: any } = chalk;

export const enum LogSeverity {
  normal,
  warning,
  error,
  none,
}
const logFilePath = join(findAngularJsonPath(), 'scully.log');
const logToFile = (string) =>
  new Promise((res, rej) =>
    appendFile(logFilePath, string, (e) => (e ? rej(e) : res()))
  );

export const log = (...a) => enhancedLog(white, LogSeverity.normal, ...a);
export const logError = (...a) => enhancedLog(red, LogSeverity.error, ...a);
export const logWarn = (...a) => enhancedLog(orange, LogSeverity.warning, ...a);

function enhancedLog(colorFn, severity: LogSeverity, ...args: any[]) {
  const out = [];
  for (const item of args) {
    out.push(typeof item === 'string' ? makeRelative(item) : item);
  }
  if (severity >= scullyConfig.logFileSeverity && out.length > 0) {
    logToFile(out.join('\n'))
      .then(() => logToFile('\n'))
      .catch((e) => console.log('error while loggin to file', e));
  }
  console.log(colorFn(...out));
}

function makeRelative(txt: string) {
  const h = scullyConfig?.homeFolder || process.cwd();
  return txt.replace(h, '.');
}
