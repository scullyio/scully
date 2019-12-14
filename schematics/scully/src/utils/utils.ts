interface Data {
  name: string;
  type: string;
  slug: string;
}

export function addRouteToScullyConfig(scullyConfigJs: string, data: Data) {
    const addRoute = `\n    '/${data.name}/:${data.slug}': {
      type: '${data.type}'
    },`;
    let output;
    if (+scullyConfigJs.search(/routes: \{/g)  > 0) {
      const position = +scullyConfigJs.search(/routes: \{/g) + 'routes: {'.length;
      output = [scullyConfigJs.slice(0, position), addRoute, scullyConfigJs.slice(position)].join('');
    } else if (+scullyConfigJs.search(/routes:\{/g) > 0) {
      const position = +scullyConfigJs.search(/routes:\{/g) + 'routes:{'.length;
      output = [scullyConfigJs.slice(0, position), addRoute, scullyConfigJs.slice(position)].join('');
    } else {
      console.log('Scully can\'t found the scully.config.js');
      return scullyConfigJs;
    }
    return output;
}

/*
function needComa(fullText: string, matchs: string[]) {
  let matchers = '';
  matchs.forEach((m, i) => {
    let pipe = '|';
    if (i === 0 || i === match.length) {
      pipe = '';
    }
    matchers += `m${pipe}`;
  });
  const match = `\(([^()]*(${matchers})[^()]*)\)`;
  // @ts-ignore
  if (fullText.search(match).toString !== '-1') {
    return ',';
  }
  return '';
}
*/
