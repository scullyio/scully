import {get, RequestOptions} from 'http';
import {get as getHttps} from 'https';
import {HeadersObject} from './interfacesandenums';

export function httpGetJson(
  url: string,
  {suppressErrors, headers}: {suppressErrors?: boolean; headers?: HeadersObject} = {
    suppressErrors: false,
    headers: {},
  }
) {
  const httpGet = url.toLowerCase().includes('https:') ? getHttps : get;
  return new Promise((resolve, reject) => {
    const {pathname, hostname, port, protocol} = new URL(url);
    const opt: RequestOptions = {
      protocol,
      hostname,
      port,
      path: pathname,
      headers,
    };
    httpGet(opt, res => {
      const {statusCode} = res;
      const contentType = res.headers['content-type'];
      let error: Error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error(
          'Invalid content-type.\n' + `Expected application/json but received ${contentType}`
        );
      }
      if (error) {
        console.error(error.message);
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
        console.error(`Got error: ${e.message}`);
        reject(e);
      } else {
        resolve(undefined);
      }
    });
  });
}
