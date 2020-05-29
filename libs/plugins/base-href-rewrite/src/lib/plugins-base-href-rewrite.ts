import {
  HandledRoute,
  registerPlugin,
  setMyConfig,
  getMyConfig
} from '@scullyio/scully';

const baseHrefRewrite = async (
  html: string,
  route: HandledRoute
): Promise<string> => {
  const { href } = getMyConfig(baseHrefRewrite);
  /** if there is a predicate and it returns falsy, don't do anything */
  if (
    route.config?.baseHrefPredicate &&
    !route.config?.baseHrefPredicate(html, route)
  ) {
    return html;
  }

  console.log('heelo000');
  return html;
};

setMyConfig(baseHrefRewrite, {
  href: '/'
});

registerPlugin('render', 'baseHrefRewrite', baseHrefRewrite);
