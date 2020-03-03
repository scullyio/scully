import {registerPlugin} from '..';

registerPlugin('render', 'manualIdleDetect', manualIdlePlugin);

function manualIdlePlugin(html: string, config: any) {
  return appendToHead(html, `<script>window.scullyManualIdle=true</script>`);
}

export function appendToHead(html, str) {
  const indexOfFirstHeadClose = html.indexOf('<head');
  const start = html.slice(0, indexOfFirstHeadClose);
  const end = html.slice(indexOfFirstHeadClose);
  return `${start}${str}${end}`;
}
