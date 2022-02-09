/**
 * Returns an array of nodes coninting all the html comments in the element.
 * When a searchText is given this is narrowed down to only comments that contian this text
 * @param rootElem Element to search nto
 * @param searchText optional string that needs to be in a HTML comment
 */
export function findComments(rootElem: HTMLElement, searchText?: string) {
  const comments = [];
  // Fourth argument, which is actually obsolete according to the DOM4 standard, seems required in IE 11
  const iterator = document.createNodeIterator(
    rootElem,
    NodeFilter.SHOW_COMMENT,
    {
      acceptNode: node => {
        // Logic to determine whether to accept, reject or skip node
        // In this case, only accept nodes that have content
        // that is containing our searchText, by rejecting any other nodes.
        if (searchText && node.nodeValue && !node.nodeValue.includes(searchText)) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
    // , false // IE-11 support requires this parameter.
  );
  let curNode;
  // tslint:disable-next-line: no-conditional-assignment
  while ((curNode = iterator.nextNode())) {
    comments.push(curNode);
  }
  return comments;
}
