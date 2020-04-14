import {logWarn, yellow} from '../../utils/log';
export function insertContent(startTag: string, endTag: string, html: string, insertText: string, ...extras) {
  try {
    const [openingText, rest] = html.split(startTag);
    const [takeout, endText] = rest.split(endTag);
    return [openingText, startTag, insertText, endTag, ...extras, endText].join('');
  } catch (e) {}
  /** warning is already handled, only put in stub content. */
  // logWarn(`missing "${yellow('<scully-content>')}"`);
  return `<h1>Scully could not find the &lt.scully-content&gt. tag in this page.</h1>
  <p>This error can happen when you forgot to put the  mandatory "scully-content" in the component that is rendering this page?</p>
  <p>Or when the tag is not shown on page load. Did you put it inside an \`*ngIf\`?</p>
  `;
}
