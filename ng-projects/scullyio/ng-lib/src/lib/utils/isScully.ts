// tslint:disable: no-string-literal
export const isScullyRunning = () => window && window['ScullyIO'] === 'running';
export const isScullyGenerated = () => window && window['ScullyIO'] === 'generated';
