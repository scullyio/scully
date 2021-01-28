/**
 * @returns a string representing the script that parses the page and loads the scullyContent variable.
 *  The string is kept on one line as the focus is to keep it as small as possible.
 */
export function getScript(ngIdentifier: string): string {
  // tslint:disable-next-line:no-unused-expression
  return `try {window['scullyContent'] = {cssId:"${ngIdentifier}",html:document.body.innerHTML.split('<!--scullyContent-begin-->')[1].split('<!--scullyContent-end-->')[0]};} catch(e) {console.error('scully could not parse content');}`;
}
