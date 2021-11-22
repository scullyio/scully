import { enableSPS, logOk } from '@scullyio/scully';
import yargs from 'yargs';

export const loadRenderer = async () => {
  const { rnd } = await yargs
    .env('SCULLY')
    .choices('rnd', ['ppt', 'pw', 'sps'])
    .default('rnd', 'sps')
    .describe('rnd', 'determine how 404 is handled')
    .argv;
  logOk('Selected', rnd)
  switch (rnd) {
    case 'ppt':
      await import('@scullyio/scully-plugin-puppeteer')
      logOk('Using Puppeteer to render pages')
      break;
    case 'pw':
      /** placeholder */
      throw new Error(`not yet implemented ${rnd}`);
      logOk('Using Puppeteer to render pages')
    case `sps`:
      enableSPS()
      logOk('Using Scully Platform Server to render pages')
      break;
    default:
      throw new Error(`Unknown renderer ${rnd}`);
  }
};
