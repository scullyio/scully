import { randomBytes } from 'crypto';
import { writeFileSync } from 'fs';
import { existsSync, readFileSync } from 'fs-extra';
import { safeDump, safeLoad } from 'js-yaml';
import { join } from 'path';
import { createInterface } from 'readline';
import { createFolderFor } from './createFolderFor';
import { noPrompt } from './cli-options';
import { log, white } from './log';

export const dotFolder = join(__dirname, '../../../../../', '.scully/');
interface DotProps {
  identifier: string;
  allowErrorCollect: boolean;
  pluginFolder: string;
}
export type DotPropTypes = keyof DotProps;

interface State {
  dotProps: DotProps | undefined;
}
const state: State = {
  dotProps: undefined,
};

/**
 * Read a property from the scully dotfile/settings
 * @param propName
 */
export const readDotProperty = <K extends DotPropTypes>(propName: K): DotProps[K] => {
  if (!state.dotProps) {
    const file = join(dotFolder, 'settings.yml'); //?
    if (!existsSync(file)) {
      return undefined;
    }
    state.dotProps = safeLoad(readFileSync(file).toString('utf-8')) as DotProps;
  }
  return state.dotProps[propName];
};

/**
 * write a property to the scully dotfile/settings
 * @param propName
 * @param value
 */
export const writeDotProperty = <K extends DotPropTypes>(propName: K, value: DotProps[K]): void => {
  if (!state.dotProps) {
    state.dotProps = {} as DotProps;
  }
  state.dotProps[propName] = value;
  const file = join(dotFolder, 'settings.yml'); //?
  createFolderFor(file);
  writeFileSync(file, safeDump(state.dotProps));
};

export const getFingerPrint = (): string => {
  if (state?.dotProps?.identifier) {
    return state.dotProps.identifier;
  }
  const identifier = readDotProperty('identifier');
  if (!identifier) {
    writeDotProperty('identifier', createIndefier());
  }
  return state.dotProps.identifier;
};

getFingerPrint(); //?

function createIndefier() {
  const st = randomBytes(4).toString('hex');
  /** merge the exact time with random chars to create an unique identifier */
  return Date.now()
    .toString(36)
    .split('')
    .map((token, i) => token + st[i])
    .join('');
}

/**
 * Utility function to ask for user input, takes a string that will be displayed as prompt.
 * returns a promise with tha answer of the user, or undefined if its in CI/ --noPrompt option
 * @param question
 */
export const askUser = (question: string): Promise<string | undefined> => {
  return new Promise((resolve, reject) => {
    if (noPrompt || process.stdout?.cursorTo === undefined) {
      return resolve(undefined);
    }
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    log(white(`(You can skip this, or any future question by using the --noPrompt flag)`));
    rl.question(question, (a) => {
      resolve(a);
      rl.close();
    });
  });
};
