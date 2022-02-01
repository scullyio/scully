export function waitForIt(milliSeconds: number) {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), milliSeconds));
}
