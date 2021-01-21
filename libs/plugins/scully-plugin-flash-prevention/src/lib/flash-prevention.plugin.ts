/* eslint-disable @typescript-eslint/no-use-before-define */
import { registerPlugin } from '@scullyio/scully';
import { appendToHead } from './utils';

let AppRootSelector = 'app-root';
let LoadedClass = 'loaded';
let DisplayType = 'inherit';
const FlashPrevention = 'ScullyPluginFlashPrevention';
const AppRootAttrsBlacklist = ['_nghost', 'ng-version'];
const MockRootAttrsBlacklist = [];

registerPlugin('render', FlashPrevention, flashPreventionPlugin);
registerPlugin('router', FlashPrevention, async (ur) => [{ route: ur }]);

interface FlashPreventionPluginOptions {
  appRootSelector?: string;
  appLoadedClass?: string;
  displayType?: string;
  appRootAttributesBlacklist?: string[];
  mockAttributesBlacklist?: string[];
}

export function getFlashPreventionPlugin({
  appRootSelector,
  appLoadedClass,
  appRootAttributesBlacklist,
  mockAttributesBlacklist,
  displayType,
}: FlashPreventionPluginOptions = {}) {
  if (appRootSelector) {
    AppRootSelector = appRootSelector;
  }
  if (appLoadedClass) {
    LoadedClass = appLoadedClass;
  }
  if (displayType) {
    DisplayType = displayType;
  }

  pushItemsToArray(appRootAttributesBlacklist, AppRootAttrsBlacklist);
  pushItemsToArray(mockAttributesBlacklist, MockRootAttrsBlacklist);

  return FlashPrevention;
}

async function flashPreventionPlugin(html) {
  let newHtml = await createSecondAppRoot(html);
  newHtml = await addBitsToHead(newHtml);
  return newHtml;
}

async function createSecondAppRoot(html) {
  const appRootSelector = AppRootSelector;
  const appRootStartRegExp = new RegExp(`\<${appRootSelector}[^>]*\>`, 'g');
  const appRootEndRegExp = new RegExp(`\<\/${appRootSelector}\>`, 'g');
  const [openTagMatch] = html.match(appRootStartRegExp);
  const [closeTagMatch] = html.match(appRootEndRegExp);

  const cleanedAppRootOpenTag: string = fetchCleanedOpenTag(openTagMatch, AppRootAttrsBlacklist);
  const cleanedMockOpenTag: string = fetchCleanedOpenTag(openTagMatch, MockRootAttrsBlacklist).replace(
    appRootSelector,
    `${appRootSelector}-scully`
  );

  const newHtml = html
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
  function capt (ev) {
	  if (document.documentElement.scrollTop === 0) {
	  	document.documentElement.scrollTop = window['ScullyIO-scrollPosition'];
	  }
	  window['ScullyIO-scrollPosition'] = document.documentElement.scrollTop;
	  document.addEventListener("AngularReady", detach);
	};

  function detach() {
		window.removeEventListener('scroll', capt);
		document.removeEventListener("AngularReady", detach);
  };

	window.addEventListener('scroll', capt);

	window.addEventListener('AngularReady', scullyDiscountFlashPreventionContentScript);
	function scullyDiscountFlashPreventionContentScript(){
	  document.documentElement.scrollTop = window['ScullyIO-scrollPosition'];
	  window.removeEventListener('scroll', capt);
		document.body.classList.add('${LoadedClass}');
		const tempAppRoot = document.querySelector('${AppRootSelector}-scully');
    tempAppRoot.parentNode.removeChild(tempAppRoot);
    window.removeEventListener('AngularReady', scullyDiscountFlashPreventionContentScript);
    window.dispatchEvent(new Event('FlashPreventionSwitchDone', {
      bubbles: true,
      cancelable: false
    }))
	}
</script>
<style type="text/css">
	body:not(.${LoadedClass}) ${AppRootSelector} { position: absolute; }
	body:not(.${LoadedClass}) ${AppRootSelector}-scully { display:${DisplayType}; }
	body.${LoadedClass} ${AppRootSelector} { display:${DisplayType}; }
  body.${LoadedClass} ${AppRootSelector}-scully { display:none; }
</style>
`;

  return appendToHead(html, contentScript);
}

function pushItemsToArray(src, dest) {
  if (src) {
    if (src.length && !Array.isArray(src)) {
      src = [src];
    }
    src.forEach((item) => dest.push(item));
  }
}

function fetchCleanedOpenTag(str: string, arr: string[]): string {
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
