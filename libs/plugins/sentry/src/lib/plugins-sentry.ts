import { registerPlugin, getPluginConfig } from '@scullyio/scully';

export const Sentry = 'sentry';

export const sentryPlugin = async (html: string): Promise<string> => {
  const sentryConfig = getPluginConfig(Sentry);

  if (!sentryConfig) {
    throw new Error('sentry plugin missing configuration');
  }

  const key = sentryConfig['key'];
  const org = sentryConfig['org'];
  const project = sentryConfig['project'];

  const src = sentryConfig['src'] || 'https://browser.sentry-cdn.com/5.20.1/bundle.min.js';
  const integrity = sentryConfig['integrity'] || 'sha384-O8HdAJg1h8RARFowXd2J/r5fIWuinSBtjhwQoPesfVILeXzGpJxvyY/77OaPPXUo';
  const crossorigin = sentryConfig['crossorigin'] === false ? '' : 'anonymous';

  if (!key) {
    throw new Error('sentry plugin "key" missing configuration');
  }
  if (!org) {
    throw new Error('sentry plugin "org" missing configuration');
  }
  if (!project) {
    throw new Error('sentry plugin "project" missing configuration');
  }
  if (!src) {
    throw new Error('sentry plugin "src" missing configuration');
  }
  if (!integrity) {
    throw new Error('sentry plugin "integrity" missing configuration');
  }

  const sentryScript = `
    <script src="${src}" integrity="${integrity}" ${crossorigin}></script>
    <script>window.Sentry && window.Sentry.init({ dsn: 'https://${key}@${org}.ingest.sentry.io/${project}>' });</script>`;

  return html.replace(/<\/head/i, `${sentryScript}</head`);
};

const validator = async () => [];

registerPlugin('render', Sentry, sentryPlugin, validator);
