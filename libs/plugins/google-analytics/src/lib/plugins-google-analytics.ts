import { getMyConfig, registerPlugin } from '@scullyio/scully';

export const GoogleAnalytics = 'googleAnalytics';

export const googleAnalyticsPlugin = async (html: string): Promise<string> => {
  const googleAnalyticsConfig = getMyConfig(googleAnalyticsPlugin);

  if (!googleAnalyticsConfig) {
    throw new Error('googleAnalytics plugin missing Global Site Tag');
  }

  const googleAnalyticsScript = getSnippet(googleAnalyticsConfig['globalSiteTag']);

  return html.replace(/<\/head/i, `${googleAnalyticsScript}</head`);
};

const validator = async () => [];

registerPlugin('postProcessByHtml', GoogleAnalytics, googleAnalyticsPlugin, validator);

function getSnippet(siteTag: string) {
  if (siteTag.startsWith('G-')) {
    return `
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${siteTag}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${siteTag}');
</script>
`;
  }

  return `
<!-- Google Analytics -->
  <script sk>
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
  ga('create', '${siteTag}', 'auto');
  ga('send', 'pageview');
  </script>
  <script sk async src='https://www.google-analytics.com/analytics.js'></script>
<!-- End Google Analytics -->
`;
}
