import { registerPlugin, getMyConfig } from '@scullyio/scully';

export const GoogleAnalytics = 'googleAnalytics';

export const googleAnalyticsPlugin = async (html: string): Promise<string> => {
  const googleAnalyticsConfig = getMyConfig(googleAnalyticsPlugin);

  if (!googleAnalyticsConfig) {
    throw new Error('googleAnalytics plugin missing Global Site Tag');
  }
  const siteTag: string = googleAnalyticsConfig['globalSiteTag'];

  const googleAnalyticsScript = `
<!-- Google Analytics -->
  <script sk>
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
  ga('create', '${siteTag}', 'auto');
  ga('send', 'pageview');
  </script>
  <script sk async src='https://www.google-analytics.com/analytics.js'></script>
  <!-- End Google Analytics -->
`;

  return html.replace(/<\/head/i, `${googleAnalyticsScript}</head`);
};

const validator = async () => [];

registerPlugin('postProcessByHtml', GoogleAnalytics, googleAnalyticsPlugin, validator);
