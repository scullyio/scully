export function fetchHttp<T>(url: string, responseType: XMLHttpRequestResponseType = 'json'): Promise<T> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = responseType;
    xhr.addEventListener('load', ev => {
      if (xhr.status !== 200) {
        return reject(xhr);
      }
      resolve(xhr.response);
    });
    xhr.addEventListener('error', (...err) => reject(err));
    xhr.open('get', url, true);
    xhr.send();
  });
}
