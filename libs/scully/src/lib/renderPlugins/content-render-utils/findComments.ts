export function findComments(el: Node, data?: string): Node[] | Node | undefined {
  const comments = [] as Node[];
  for (const node of Array.from(el.childNodes)) {
    if (node.nodeType === 8) {
      if (data && node['data'] === data) {
        return node;
      }
      comments.push(node);
    }
  }
  return data ? undefined : comments;
}
