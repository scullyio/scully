const { registerPlugin, configValidator, logWarn, yellow } = require('@scullyio/scully');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const tocPlugin = async (html, options) => {
  try {
    const dom = new JSDOM(html);
    const { window } = dom;
    const h1headers = window.document.querySelectorAll('h1');
    const h2headers = window.document.querySelectorAll('h2');
    const toc = [...h1headers, ...h2headers]
      .map((e) => e.innerHTML)
      .map((c) => `<li>${c}</li>`)
      .join('');
    const insertPoint = window.document.querySelector('main').querySelector('h1');
    const list = window.document.createElement('ul');
    list.innerHTML = toc;
    insertPoint.parentElement.insertBefore(list, insertPoint);
    return dom.serialize();
  } catch (e) {
    logWarn(`error in tocPlugin, didn't parse for route "${yellow(route.route)}"`);
  }
  // in case of failure return unchanged HTML to keep flow going
  return html;
};

const validator = async (config) => [];
registerPlugin('postProcessByHtml', 'toc', tocPlugin, validator);
