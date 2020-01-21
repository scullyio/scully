/**
 * split an array in multiple chunks
 * @param arr
 * @param chunkSize
 */
export function chunk<T>(arr: T[], chunkSize: number): T[][] {
  return arr.reduce(
    (chunks: any[], elm: any, index: number) => {
      if (index % chunkSize === 0) {
        /** create new chunk */
        chunks.push([]);
      }
      const currentChunk = chunks[chunks.length - 1];
      currentChunk.push(elm);
      return chunks;
    },
    [[]]
  );
}

