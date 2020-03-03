const {registerPlugin} = require('../../../../dist/scully');
const {appendToHead} = require('./utils');

let AppRootSelector = 'app-root';
let LoadedClass = 'loaded';
const DiscountFlashPrevention = 'discountFlashPrevention';
const validator = async () => {};
registerPlugin('render', DiscountFlashPrevention, discountFlashPreventionPlugin, validator);
registerPlugin('router', DiscountFlashPrevention, async ur => [{route: ur}], validator);

module.exports = {
  getDiscountFlashPreventionPlugin,
};

function getDiscountFlashPreventionPlugin({appRootSelector, appLoadedClass} = {}) {
  if (appRootSelector) {
    AppRootSelector = appRootSelector;
  }
  if (appLoadedClass) {
    LoadedClass = appLoadedClass;
  }

  return DiscountFlashPrevention;
}

async function discountFlashPreventionPlugin(html, handledRoute) {
  let newHtml = await createSecondAppRoot(html);
  newHtml = await addBitsToHead(newHtml);
  return newHtml;
}

async function createSecondAppRoot(html) {
  const appRootSelector = AppRootSelector;
  const appRootStartRegExp = new RegExp(`\<${appRootSelector}[^>]*\>`, 'g');
  const appRootEndRegExp = new RegExp(`\<\/${appRootSelector}\>`, 'g');
  let [openTagMatch] = html.match(appRootStartRegExp);
  const [closeTagMatch] = html.match(appRootEndRegExp);
  const blackListAttrs = ['_nghost', 'ng-version'];
  let cleanedOpenTag = openTagMatch
    .replace('>', ' >')
    .split(' ')
    .reduce((acc, attr) => {
      // Does the html attr exist in the blacklisted attrs
      const attrIsBlacklisted = blackListAttrs.reduce((acc, cur) => {
        if (acc === true) return acc;

        return attr.startsWith(cur);
      }, false);

      if (!attrIsBlacklisted) {
        acc.push(attr);
      }
      return acc;
    }, [])
    .join(' ')
    .replace(' >', '>');
  let newHtml = html
    // replace the closing tag with replacement scully closing tag
    .replace(closeTagMatch, `${closeTagMatch.replace(appRootSelector, `${appRootSelector}-scully`)}`)
    // replace opening tag with cleaned app root tag AND replacement scully app root tag
    .replace(
      openTagMatch,
      `${cleanedOpenTag}${closeTagMatch}${openTagMatch.replace(appRootSelector, `${appRootSelector}-scully`)}`
    );
  ``;
  return newHtml;
}

async function addBitsToHead(html) {
  const contentScript = `
<script type="text/javascript" id="scully-plugin-discount-flash-prevention">
	window.addEventListener('AngularReady', scullyDiscountFlashPreventionContentScript);
	function scullyDiscountFlashPreventionContentScript(){
		document.body.classList.add('${LoadedClass}');
		const tempAppRoot = document.querySelector('${AppRootSelector}-scully');
    tempAppRoot.parentNode.removeChild(tempAppRoot);
		window.removeEventListener('AngularReady', scullyDiscountFlashPreventionContentScript);
	}
</script>
<style type="text/css">
	body:not(.${LoadedClass}) ${AppRootSelector} { display:none; }
	body:not(.${LoadedClass}) ${AppRootSelector}-scully { display:inherit; }
	body.${LoadedClass} ${AppRootSelector} { display:inherit; }
  body.${LoadedClass} ${AppRootSelector}-scully { display:none; }
</style>
`;

  return appendToHead(html, contentScript);
}
