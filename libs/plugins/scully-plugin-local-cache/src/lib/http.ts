import { logError } from '@scullyio/scully';
import { request as httpRequest } from 'http';
import { request as httpsRequest, RequestOptions } from 'https';

let needWarn = true;
export const logWarnOnce = (...args) => {
  if (needWarn) {
    logError(...args);
    needWarn = false;
  }
};

export function httpJson<T>(
  method: 'GET' | 'POST' = 'GET',
  url: string,
  { suppressErrors, headers, data }: { suppressErrors?: boolean; headers?: { [name: string]: string }; data?: any } = {
    suppressErrors: false,
    headers: {}
  }
): Promise<T> {
  const isSSL = url.toLowerCase().includes('https:');
  //   if (isSSL) {
  //     logWarnOnce(`****************************************************************************************
  // This is a development tool for Scully applications.
  // You can ignore the warning (TLS) or run scully with --no-warning
  // ****************************************************************************************`);
  //   }
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  const request = isSSL ? httpsRequest : httpRequest;
  return new Promise((resolve, reject) => {
    const { pathname, hostname, port, protocol, search, hash } = new URL(url);
    const hasData = data !== undefined;
    const opt: RequestOptions = {
      protocol,
      hostname,
      port,
      method,
      path: pathname + search + hash,
      headers
    };
    if (hasData) {
      if (typeof data !== 'string') {
        data = JSON.stringify(data);
      }
      opt.headers = opt.headers || {};
      opt.headers['Content-Length'] = data.length;
      opt.headers['Content-Type'] = 'application/json';
    }
    const req = request(opt, res => {
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
    if (hasData) {
      req.write(data);
    }
    req.end();
  });
}
