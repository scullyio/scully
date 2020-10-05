/* eslint-disable @typescript-eslint/no-explicit-any */
import chalk from 'chalk';
import { appendFile } from 'fs';
import { join } from 'path';
import * as readline from 'readline';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';
import { scullyConfig } from '../utils/config';
import { captureMessage } from './captureMessage';
import { noLog } from './cli-options';
import { findAngularJsonPath } from './findAngularJsonPath';
import { logSeverity } from './cli-options';

export const orange = chalk.hex('#FFA500');
export const { white, red, yellow, green }: { [x: string]: any } = chalk;

export enum LogSeveritys {
  normal,
  warning,
  error,
  none,
}

export type LogSeverity = 'normal' | 'warning' | 'error' | 'none';

const logFilePath = join(findAngularJsonPath(), 'scully.log');
/** Chalk adds ANSI escape codes for terminal string styling that shouldn't be included in logs  */
const stripANSICodes = (string) => string.replace(/\x1b\[\d+m/g, '');
const logToFile = (string) =>
  new Promise((res, rej) => appendFile(logFilePath, stripANSICodes(string), (e) => (e ? rej(e) : res())));

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

const state = {
  interval: 250,
  startTime: Date.now(),
  lastMessage: '',
  intervalSub: undefined,
  lastSpin: spinToken.next().value,
};

function writeProgress(msg = state.lastMessage) {
  /** cursorTo isn't there in CI, don't write progress in CI at all. */
  if (process.stdout.cursorTo) {
    if (Date.now() - state.startTime > state.interval) {
      // tslint:disable-next-line: no-unused-expression
      state.lastSpin = spinToken.next().value;
      state.startTime = Date.now();
    }
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0, null);
    process.stdout.write(`${state.lastSpin} ${msg}`);
    state.lastMessage = msg;
  }
}

export function startProgress(): void {
  /** cursorTo isn't there in CI, don't write progress in CI at all. */
  if (process.stdout.cursorTo) {
    state.intervalSub = interval(state.interval)
      .pipe(tap(() => writeProgress()))
      .subscribe();
  }
}
export function stopProgress(): void {
  state.lastMessage = '';
  if (state.intervalSub) {
    state.intervalSub.unsubscribe();
  }
  if (process.stdout.cursorTo) {
    readline.clearLine(process.stdout, 0);
  }
}

export const log = (...a: any[]): void => enhancedLog(white, LogSeveritys.normal, ...a);
export const logError = (...a: any[]): void => enhancedLog(red, LogSeveritys.error, ...a);
export const logWrite = (...a: any[]): void => enhancedLog(white, LogSeveritys.error, ...a);
export const logWarn = (...a: any[]): void => enhancedLog(orange, LogSeveritys.warning, ...a);

function enhancedLog(colorFn, severity: LogSeveritys, ...args: any[]) {
  const pickedSeverity: LogSeverity = logSeverity || (scullyConfig.logFileSeverity as LogSeverity);
  const out = [];
  if (noLog && severity === LogSeveritys.normal) {
    return;
  }
  for (const item of args) {
    out.push(typeof item === 'string' ? makeRelative(item) : item);
  }
  if (severity >= LogSeveritys[pickedSeverity] && out.length > 0) {
    logToFile(out.filter((i) => i).join('\r\n'))
      .then(() => logToFile('\r\n'))
      .catch((e) => console.log('error while logging to file', e));
  }
  if (severity === LogSeveritys.error) {
    captureMessage(out.filter((i) => i).join('\r\n'));
  }
  // tslint:disable-next-line: no-unused-expression
  process.stdout.cursorTo && process.stdout.cursorTo(0);
  process.stdout.write(colorFn(...out));
  process.stdout.write('\n');
  writeProgress();
}

function makeRelative(txt: string) {
  const h = scullyConfig?.homeFolder || process.cwd();
  return txt.replace(h, '.');
}
function isNumber(text: any) {
  return typeof text === 'number';
}
export function printProgress(tasks: number | boolean, text = 'Tasks Left:', total?: number): void {
  const number = isNumber(tasks) ? `${yellow(tasks)}` : '';
  const maxNumber = isNumber(total) ? `${yellow('/' + total)}` : '';
  const msg = `${orange(text)} ${number}${maxNumber}`;
  writeProgress(msg);
}
