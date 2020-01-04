import request = require('request');
import {HeadersObject} from './interfacesandenums';

export function httpGetJson(
  url: string,
  {suppressErrors, headers}: {suppressErrors?: boolean; headers?: HeadersObject} = {
    suppressErrors: false,
    headers: {},
  }
) {
  return new Promise((resolve, reject) => {
    request(url, {headers}, (err, res, body) => {
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
