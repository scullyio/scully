import { registerPlugin, getPluginConfig } from '@scullyio/scully';

export const LogRocket = 'logrocket';

export const logrocketPlugin = async (html: string): Promise<string> => {
  const logrocketConfig = getPluginConfig(LogRocket);

  if (!logrocketConfig) {
    throw new Error('logrocket plugin missing configuration');
  }

  const logrocketScript = `
    <script sk src="https://cdn.logrocket.io/LogRocket.min.js"></script>
    <script sk>window.LogRocket && window.LogRocket.init('${logrocketConfig['app']}/${logrocketConfig['id']}');</script>`;

  return html.replace(/<\/head/i, `${logrocketScript}</head`);
};

const validator = async () => [];

registerPlugin('postProcessByHtml', LogRocket, logrocketPlugin, validator);
