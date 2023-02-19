import { enableSPS, logOk } from '@scullyio/scully';
import yargs from 'yargs';
export const loadRenderer = async () => {
  const mainTread = !!!process.send;
  const { rnd } = await yargs(process.argv)
    .env('SCULLY')
    .choices('rnd', ['ppt', 'pw', 'sps', 'test'])
    .default('rnd', 'sps')
    .describe('rnd', 'determine how 404 is handled')
    .parse();
  mainTread && logOk('Selected', rnd);
  switch (rnd) {
    case 'ppt':
      await import('@scullyio/scully-plugin-puppeteer');
      mainTread && logOk('Using Puppeteer to render pages');
      break;
    case 'pw':
      await import('@scullyio/scully-plugin-playwright');
      // logOk('Using Playwright to render pages');
      break;
    case `sps`:
      enableSPS();
      mainTread && logOk('Using Scully Platform Server to render pages');
      break;
    case `test`:
      await import('./plugins/testRender.js');
      mainTread && logOk('Using test to render pages');
      break;
    default:
      throw new Error(`Unknown renderer ${rnd}`);
  }
};
//# sourceMappingURL=loadRenderer.js.map
