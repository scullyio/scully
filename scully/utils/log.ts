import chalk from 'chalk';

export const {white, red, yellow, green, orange}: {[x: string]: any} = chalk;

export const log = (...a) => console.log(white(...a));
export const logError = (...a) => console.log(red(...a));
export const logWarn = (...a) => console.log(orange(...a));
