const {registerPlugin, configValidator, logWarn, yellow} = require('../dist/scully');
const {JSDOM} = require('jsdom');

const docsLink = async (html, options) => {
  try {
    const dom = new JSDOM(html);
    const {window} = dom;
    const anchors = [...window.document.querySelectorAll('[href]')];
    anchors.forEach(a => {
      const href = a.getAttribute('href');
      if (href && href.toLowerCase().endsWith('.md')) {
        // console.log(href, newRef);
      }
      if (href && href.startsWith('#')) {
        const newRef = `${options.route}${href}`;
        a.setAttribute('href', newRef);
      }
    });
    return dom.serialize();
  } catch (e) {
    logWarn(`error in docsLink, didn't parse for route "${yellow(route.route)}"`);
  }
  // in case of failure return unchanged HTML to keep flow going
  return html;
};

const validator = async config => [];
registerPlugin('render', 'docsLink', docsLink, validator);
