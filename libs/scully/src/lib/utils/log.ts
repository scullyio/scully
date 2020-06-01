import chalk from 'chalk';
import { scullyConfig } from '../utils/config';

export const orange = chalk.hex('#FFA500');
export const { white, red, yellow, green }: { [x: string]: any } = chalk;

export const log = (...a) => myLog(white(...a));
export const logError = (...a) => console.log(red(...a));
export const logWarn = (...a) => console.log(orange(...a));

function myLog(...args: any[]) {
  const out = [];
  for (const item of args) {
    out.push(typeof item === 'string' ? makeRelative(item) : item);
  }
  console.log(...out);
}

function makeRelative(txt: string) {
  const h = scullyConfig?.homeFolder || process.cwd();
  return txt.replace(h, '.');
}
