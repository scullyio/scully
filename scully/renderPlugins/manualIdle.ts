import {registerPlugin} from '..';

registerPlugin('render', 'manualIdleDetect', manualIdlePlugin);

async function manualIdlePlugin(html: string, config: any) {
  return appendToHead(html, `<script>window['ScullyIO-ManualIdle']=true</script>`);
}

export function appendToHead(html: string, str: string): string {
  const indexOfFirstHeadClose = html.toLowerCase().indexOf('</head');
  const start = html.slice(0, indexOfFirstHeadClose);
  const end = html.slice(indexOfFirstHeadClose);
  return `${start}${str}${end}`;
}
