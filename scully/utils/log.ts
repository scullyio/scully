import chalk, {Chalk} from 'chalk';

export const orange: Chalk = chalk.hex('#FFA500');
export const {white, red, yellow, green}: {[x: string]: any} = chalk;

export const log = (...a) => console.log(white(...a));
export const logError = (...a) => console.log(red(...a));
export const logWarn = (...a) => console.log(orange(...a));
