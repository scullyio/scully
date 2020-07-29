import { registerPlugin, getPluginConfig } from '@scullyio/scully';

export const Sentry = 'sentry';

export const sentryPlugin = async (html: string): Promise<string> => {
  const sentryConfig = getPluginConfig(Sentry);

  if (!sentryConfig) {
    throw new Error('sentry plugin missing configuration');
  }

  const sentryScript = `
    <script
     src="https://browser.sentry-cdn.com/5.20.1/bundle.min.js"
     integrity="sha384-O8HdAJg1h8RARFowXd2J/r5fIWuinSBtjhwQoPesfVILeXzGpJxvyY/77OaPPXUo"
     crossorigin="anonymous"></script>
    <script>
    window.Sentry && window.Sentry.init({ dsn: 'https://${sentryConfig['key']}@${sentryConfig['org']}.ingest.sentry.io/${sentryConfig['project']}>' });
    </script>`;

  return html.replace(/<\/head/i, `${sentryScript}</head`);
};

const validator = async () => [];

registerPlugin('render', Sentry, sentryPlugin, validator);
