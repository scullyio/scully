import chalk from 'chalk';
import { scullyConfig, loadConfig } from '../utils/config';
import { registerPlugin } from '../pluginManagement/pluginRepository';
import { writeFileSync } from 'fs-extra';
import { join } from 'path';

export const orange = chalk.hex('#FFA500');
export const { white, red, yellow, green }: { [x: string]: any } = chalk;

export enum LogSeverity {
  normal,
  warning,
  error,
  none
}

const logCache = [];

export const log = (...a) => enhancedLog(white, LogSeverity.normal, ...a);
export const logError = (...a) => enhancedLog(red, LogSeverity.error, ...a);
export const logWarn = (...a) => enhancedLog(orange, LogSeverity.warning, ...a);

function enhancedLog(colorFn, severity: LogSeverity, ...args: any[]) {
  const out = [];
  for (const item of args) {
    out.push(typeof item === 'string' ? makeRelative(item) : item);
  }
  logCache.push([severity, ...out]);
  console.log(colorFn(...out));
}

function makeRelative(txt: string) {
  const h = scullyConfig?.homeFolder || process.cwd();
  return txt.replace(h, '.');
}

loadConfig.then(() => {
  registerPlugin('allDone', 'writeLogsToFile', writeIt);
});

function writeIt() {
  const logLines = logCache
    .filter(line => line[0] >= scullyConfig.logFileSeverity)
    .map(l => l.slice(1));
  writeFileSync(
    join(scullyConfig.homeFolder, 'scully.log'),
    logLines.join('\n')
  );
}
