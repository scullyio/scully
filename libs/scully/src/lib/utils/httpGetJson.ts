import { get, RequestOptions } from 'http';
import { get as getHttps } from 'https';
import { HeadersObject } from './interfacesandenums';
import { logError } from './log';

let needWarn = true;
export const logWarnOnce = (...args) => {
  if (needWarn) {
    logError(...args);
    needWarn = false;
  }
};

export function httpGetJson(
  url: string,
  {
    suppressErrors,
    headers,
    agent
  }: { suppressErrors?: boolean; headers?: HeadersObject, agent?: any } = {
    suppressErrors: false,
    headers: {},
    agent: undefined
  }
) {
  const isSSL = url.toLowerCase().includes('https:');
  if (isSSL) {
    logWarnOnce(`****************************************************************************************
This is a development tool for Scully applications.
You can ignore the warning (TLS) or run scully with --no-warning
****************************************************************************************`);
  }
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  const httpGet = isSSL ? getHttps : get;
  return new Promise((resolve, reject) => {
    const { pathname, hostname, port, protocol, search, hash } = new URL(url);
    const opt: RequestOptions = {
      protocol,
      hostname,
      port,
      path: pathname + search + hash,
      headers,
      agent
    };
    httpGet(opt, res => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];
      let error: Error;
      if (statusCode !== 200) {
        error = new Error(`Request Failed. Received status code: ${statusCode}
on url: ${url}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error(`Invalid content-type.
Expected application/json but received ${contentType}
on url: ${url}`);
      }
      if (error) {
        // console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return reject(error);
      }
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', chunk => {
        rawData += chunk;
      });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          resolve(parsedData);
        } catch (e) {
          console.error(e.message);
          return reject(error);
        }
      });
    }).on('error', e => {
      if (!suppressErrors) {
        // console.error(`Got error: ${e.message}`);
        reject(e);
      } else {
        resolve(undefined);
      }
    });
  });
}
