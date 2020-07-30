import chalk from 'chalk';
import { appendFile } from 'fs';
import { join } from 'path';
import * as readline from 'readline';

import { scullyConfig } from '../utils/config';
import { noLog } from './cli-options';
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
const logToFile = (string) => new Promise((res, rej) => appendFile(logFilePath, string, (e) => (e ? rej(e) : res())));
let progress = false;
let lastMessage = '';

function* spinTokens() {
  const tokens = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  let current = 0;
  while (true) {
    yield tokens[current];
    current += 1;
    if (current === tokens.length) {
      current = 0;
    }
  }
}

export const spinToken = spinTokens();

function writeProgress(msg, check?: boolean) {
  if (!!check && !progress && !lastMessage) {
    return;
  }
  if (process.stdout.cursorTo) {
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0, null);
  }
  // tslint:disable-next-line: no-unused-expression
  process.stdout.write(`${spinToken.next().value} ${msg}`);
}

export function startProgress() {
  progress = true;
}
export function stopProgress() {
  progress = false;
  lastMessage = '';
  if (process.stdout.cursorTo) {
    readline.clearLine(process.stdout, 0);
  }
}

export const log = (...a) => enhancedLog(white, LogSeverity.normal, ...a);
export const logError = (...a) => enhancedLog(red, LogSeverity.error, ...a);
export const logWrite = (...a) => enhancedLog(white, LogSeverity.error, ...a);
export const logWarn = (...a) => enhancedLog(orange, LogSeverity.warning, ...a);

function enhancedLog(colorFn, severity: LogSeverity, ...args: any[]) {
  const out = [];
  if (noLog && severity === LogSeverity.normal) {
    return;
  }
  for (const item of args) {
    out.push(typeof item === 'string' ? makeRelative(item) : item);
  }
  if (severity >= scullyConfig.logFileSeverity && out.length > 0) {
    logToFile(out.filter((i) => i).join('\r\n'))
      .then(() => logToFile('\r\n'))
      .catch((e) => console.log('error while loggin to file', e));
  }
  // tslint:disable-next-line: no-unused-expression
  process.stdout.cursorTo && process.stdout.cursorTo(0);
  process.stdout.write(colorFn(...out));
  process.stdout.write('\n');
  writeProgress(lastMessage, true);
}

function makeRelative(txt: string) {
  const h = scullyConfig?.homeFolder || process.cwd();
  return txt.replace(h, '.');
}
function isNumber(text: any) {
  return typeof text === 'number';
}
export function printProgress(tasks: number, text = 'Tasks Left:', total?: number): void {
  const number = isNumber(tasks) ? `${yellow(tasks)}` : '';
  const maxNumber = isNumber(total) ? `${yellow('/' + total)}` : '';
  const msg = `${orange(text)} ${number}${maxNumber}`;
  lastMessage = msg;
  writeProgress(msg);
}
