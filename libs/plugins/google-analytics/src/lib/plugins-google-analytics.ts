import { registerPlugin, getMyConfig } from '@scullyio/scully';

export const GoogleAnalytics = 'googleAnalytics';

export const googleAnalyticsPlugin = async (html: string): Promise<string> => {
  const googleAnalyticsConfig = getMyConfig(googleAnalyticsPlugin);

  if (!googleAnalyticsConfig) {
    throw new Error('googleAnalytics plugin missing Global Site Tag');
  }
  const siteTag: string = googleAnalyticsConfig['globalSiteTag'];

  const googleAnalyticsScript = `
    <script async src="https://www.googletagmanager.com/gtag/js?id=${siteTag}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${siteTag}');
    </script>`;

  return html.replace(/<\/head/i, `${googleAnalyticsScript}</head`);
};

const validator = async () => [];

registerPlugin('render', GoogleAnalytics, googleAnalyticsPlugin, validator);
