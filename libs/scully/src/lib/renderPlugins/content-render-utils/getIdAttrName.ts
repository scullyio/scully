export function getIdAttrName(attrs: string): string {
  try {
    return (
      attrs &&
      attrs
        .split(' ')
        .find((at: string) => at.trim().startsWith('_ngcontent'))
        .split('=')[0]
    );
  } catch {
    return '6';
  }
}
