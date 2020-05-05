'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const scully_1 = require('@scullyio/scully');
const utils_1 = require('./utils');
let AppRootSelector = 'app-root';
let LoadedClass = 'loaded';
const FlashPrevention = 'ScullyPluginFlashPrevention';
const AppRootAttrsBlacklist = ['_nghost', 'ng-version'];
const MockRootAttrsBlacklist = [];
scully_1.registerPlugin('render', FlashPrevention, flashPreventionPlugin);
scully_1.registerPlugin('router', FlashPrevention, async ur => [{route: ur}]);
function getFlashPreventionPlugin({
  appRootSelector,
  appLoadedClass,
  appRootAttributesBlacklist,
  mockAttributesBlacklist,
} = {}) {
  if (appRootSelector) {
    AppRootSelector = appRootSelector;
  }
  if (appLoadedClass) {
    LoadedClass = appLoadedClass;
  }
  pushItemsToArray(appRootAttributesBlacklist, AppRootAttrsBlacklist);
  pushItemsToArray(mockAttributesBlacklist, MockRootAttrsBlacklist);
  return FlashPrevention;
}
exports.getFlashPreventionPlugin = getFlashPreventionPlugin;
async function flashPreventionPlugin(html, handledRoute) {
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
  let cleanedAppRootOpenTag = fetchCleanedOpenTag(openTagMatch, AppRootAttrsBlacklist);
  let cleanedMockOpenTag = fetchCleanedOpenTag(openTagMatch, MockRootAttrsBlacklist).replace(
    appRootSelector,
    `${appRootSelector}-scully`
  );
  let newHtml = html
    // replace the closing tag with replacement scully closing tag
    .replace(closeTagMatch, `${closeTagMatch.replace(appRootSelector, `${appRootSelector}-scully`)}`)
    // replace opening tag with cleaned app root tag AND replacement scully app root tag
    .replace(openTagMatch, `${cleanedAppRootOpenTag}${closeTagMatch}${cleanedMockOpenTag}`);
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
  return utils_1.appendToHead(html, contentScript);
}
function pushItemsToArray(src, dest) {
  if (src) {
    if (src.length && !Array.isArray(src)) {
      src = [src];
    }
    src.forEach(item => dest.push(item));
  }
}
function fetchCleanedOpenTag(str, arr) {
  return str
    .replace('>', ' >')
    .split(' ')
    .reduce((acc, attr) => {
      // Does the html attr exist in the blacklisted attrs
      const attrIsBlacklisted = arr.reduce((acc, cur) => {
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
}
//# sourceMappingURL=flash-prevention.plugin.js.map
