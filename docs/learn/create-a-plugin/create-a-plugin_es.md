---
title: Crear un Scully Plugin Personalizado
lang: en
position: 20
---

## [Información general](#informacion-general)

Scully tiene un robusto sistema de complementos que le permite modificar los datos antes, durante y después de que se genere la aplicación. Por ejemplo, una vez creadas las rutas, puede crear un mapa del sitio o un feed RSS. El sistema del plugin brinda fácil acceso a todas las rutas una vez que se han encontrado y generado. En esta guía, aprenderá sobre los distintos tipos de plugins y cómo puede crear su propio plugin personalizado.

## [Tipos de Plugin](#tipos-de-plugin)

Hay varios tipos de plugins que puede crear para su aplicación Scully, dependiendo de cuándo en el proceso de compilación necesite usarlo. Estos son los diferentes tipos de plugins que puede crear y una breve explicación de cada uno, [obtenidos desde la documentacion de Scully](https://scully.io/docs/Reference/plugins/overview/):

- `router` plugins para enseñar a Scully como obtener los datos necesarios para pre-renderizar páginas desde route-params.
- `postProcessByHtml` plugins usados para transformar el HTML renderizado. Después de que la app de Angular renderice, el contenido HTML pasado al plugin `postProcessByHtml` donde se puede modificar más.
- `postProcessByDom` plugins usados para transformar el HTML renderizado. Después de que la app de Angular renderice, el contenido HTML pasado al plugin `postProcessByDom` donde se puede modificar más.
- `routeProcess` plugins son plugins que pueden modificar la ruta array manejada, antes de que empiece el renderizado de las rutas
- `fileHandler` plugins usados por el plugin `contentFolder` durante el proceso de renderizado. El plugin `contentFolder` procesa las carpetas para los archivos markdown o otro tipo de archivos que la carpeta contenga. El proceso de render procesa cualquier plugin `fileHandler` existente para cualquier tipo de extensión de archivo.
- `routeDiscoveryDone` plugins son llamados automáticamente después de que se hayan recopilado todas las rutas y los plugins `router` han terminado.
- `allDone` plugins son como los plugins `routeDiscoveryDone`, excepto que son llamados después de que Scully termina de ejecutar todos sus procesos.
- Scully tiene una categoría de plugins del sistema. A diferencia de las otras categorías de plugins, estos no tienen una interfaz establecida y usan un símbolo para su nombre.

Con estos siete tipos de plugins, puede crear una gran cantidad de funciones adicionales en su aplicación Scully. Por ejemplo, hace poco quería que el título de las publicaciones de mi blog (escrito en Markdown) se añadiera como el título del documento HTML.
Hay diferentes maneras de hacer esto, pero una forma es escribir un plugin personalizado `postProcessByHtml`. Este plugin te proporciona acceso al HTML renderizado de la página, así como algunos datos sobre la ruta, y le permite alterarla de alguna manera. En mi caso, busqué el atributo `title` en los datos de la ruta y lo agregué al HTML renderizado.

Otro tipo de plugin que es útil es el plugin `routeDiscoveryDone`. Este tipo de plugin se llama después de que Scully encuentre todas las rutas en la aplicación y los plugins de `router` terminen de ejecutarse. Un caso de uso para este plugin es creando un feed RSS a partir de las rutas en su aplicación Scully. Puede ver [un ejemplo aquí](https://github.com/notiz-dev/scully-plugins).

Ahora que hemos cubierto los tipos de plugins que puede crear y un par de ejemplos de casos de uso, veamos cómo puede crear un complemento personalizado.

## [Valores de Retorno del Plugin](#valores-de-retorno-del-plugin)

Todos los plugin Scully devuelven una `Promise<unknown>`, como se ilustra en la interfaz:

```ts
interface plugin {
  (...parameters:any) => Promise<unknown>
}
```

Por ejemplo, un plugin `render` devuelve una Promise<string>. Un plugin `router` devuelve un array de `HandledRoute` envuelto en una `Promise`, o en otras palabras `Promise<HandledRoute[]>`. Algunos plugins en realidad no devuelven nada, pero el valor devuelto se sigue envolviendo en una `Promise`, entonces su valor de retorno es `Promise<void>`.

Es importante saber que todos los plugins devuelven una `Promise` de modo que si necesita invocar la función recuerde `await` el resultado, o encadenar un `.then` a la llamada de la función.

## [Creando un Plugin Scully Personalizado](#creando-un-plugin-scully-personalizado)

Cuando inicializa su aplicación Angular con el esquema de Scully, se crea una carpeta llamada `scully`. Dentro de esa carpeta hay otra carpeta, `plugins`. El esqueleto del código de un plugin se crea para usted, o puede crear su propio archivo de plugin. Hay dos partes principales del plugin: la función del plugin y el registro del plugin. A continuación, se muestra un ejemplo de la función de plugin para un plugin `postProcessByHtml`:

```ts
// ./scully/plugins/custom-plugin.ts

export const customPlugin = Symbol('customPlugin');

const customPluginFunction = async (
  html: string,
  route: HandledRoute
): Promise<string> => {
  // hace algo
  return Promise.resolve(html);
};
```

> Apunte rápido: puede identificar un plugin utilizando un `string` o un `Symbol`. De cualquier manera funciona bien, pero la ventaja de usar un `Symbol` es que no habrá colisiones de nombres. Si necesita más información sobre `Symbol`, [puede leer este blog post](https://www.prestonlamb.com/blog/javascript-primitive-types). En resumen, los valores `Symbol` son únicos, incluso si se pasa la misma cadena al constructor de `Symbol` para dos variables separadas. Entonces, para los plugins, esto significa que no hay colisiones de nombres.

Esta función tiene dos parámetros, el html renderizado y la ruta. Este último contiene los datos de ruta de Scully. Al final del plugin, se debe devolver el HTML. Antes de devolverlo, puede modificarlo de la forma que necesite. A continuación se muestra un ejemplo de un plugin `routeDiscoveryDone`:

```ts
// ./scully/plugins/custom-plugin.ts

export const customPlugin = Symbol('customPlugin');

function customPluginFunction(routes: HandledRoute[]) {
  const blogPosts = routes.filter((r: HandledRoute) =>
    r.route.includes('/blog')
  );
  // Hace algo con los blog posts
}
```

Este tipo de plugins recibe un array de `routes`, permitiéndole hacer lo que necesite con ellas. Como nota al margen, este es el tipo de plugin RSS mencionado anteriormente por el equipo de Notiz.dev.

Después de que la función se haya creado, necesita registrar el plugin. Puede hacerlo importando el método `registerPlugin` desde `@scullyio/scully`. El método toma un tipo de plugin, un nombre de plugin y una función de plugin como parámetros. A continuación, se muestra un ejemplo de cómo registrar un plugin:

```ts
// ./scully/plugins/custom-plugin.ts

const { registerPlugin } = require('@scullyio/scully');

registerPlugin('postProcessByHtml', customPlugin, customPluginFunction);
```

Ahora que el plugin está registrado, está listo para usarlo. Para plugins `postProcessByHtml`, es necesario que añada el nombre del plugin a el array `defaultPostRenderers` en el nivel superior de la configuración del sitio Scully o del array `postRenderers` para un conjunto específico de rutas en la configuración de Scully:

```ts
// scully.your-site.config.ts

import { customPlugin } from './scully/plugins/custom-plugin';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'personal-site',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog',
      },
      postRenderers: [customPlugin],
    },
  },
  defaultPostRenderers: [customPlugin],
};
```

Para los plugins `routeDiscoveryDone`, solo necesitan estar registrados con Scully desde el archivo `scully.my-site.config.ts` para ser ejecutados. No es necesario añadirlos al array `postRenderers` o `defaultPostRenderers` como el plugin `postProcessByHtml`.

## [Ejemplos de Plugins](#ejemplos-de-plugins)

El repositorio en GitHub de Scully tiene [algunos ejemplos de plugins](https://github.com/scullyio/scully/tree/main/demos/plugins) que se pueden usar como plantilla para que usted cree la suya propia. Además, debería poder explorar los repositorios de plugins de la comunidad para ver cómo se crean los plugins. Aquí hay una lista de algunos plugins de la comunidad que son buenos ejemplos: 

- [scully-plugin-amp-css](https://github.com/pjlamb12/scully-plugin-amp-css)
- [@notiz-dev/scully-plugin-rss](https://github.com/notiz-dev/scully-plugins/tree/master/plugins/rss#readme)
- [@notiz-dev/scully-plugin-fouc](https://github.com/notiz-dev/scully-plugins/tree/master/plugins/fouc#readme)
- [scully-plugin-disable-angular](https://github.com/samvloeberghs/kwerri-oss/tree/master/projects/scully-plugin-disable-angular)
- [scully-plugin-sitemap](https://github.com/gammastream/scully-plugins/tree/master/projects/scully-plugin-sitemap)

## [Método `findPlugin`](#metodo-findplugin)

El equipo de Scully no recomienda que exporte la función del plugin desde el archivo donde está definido el plugin. Esto asegura que la función del plugin no se propague a otras partes del sistema. Sin embargo, hay ocasiones en las que es necesario invocar la función del plugin manualmente. Si necesita hacer esto, puede obtener acceso al plugin con el método `findPlugin` proporcionado por Scully. El método toma de uno a tres parámetros. Son:

- El tipo, nombre o símbolo del plugin
- El nombre o símbolo del plugin 
- Un booleano `throwOnNotFound` 

Si pasa el tipo del plugin (e.j. `RenderPlugin` o `RouterPlugin`) como primer parámetro, el segundo parámetro también debe pasarse y debe ser el nombre o `Symbol` del plugin. Si el primer parámetro es el nombre o `Symbol`, no necesita ningún otro parámetro.

El booleano `throwOnNotFound` está predeterminado en true y, por lo general, los programas externos no lo necesitarán. Sin embargo, si está utilizando plugins opcionales, puede cambiar este valor a `false`. Si no se encuentra el plugin, la función devolverá `undefined`.

```ts
// ./scully/plugins/custom-plugin.spec.ts
const pluginName = Symbol('customPlugin');
const customPlugin = findPlugin(pluginName);
```

Ahora que tiene acceso al plugin, puede invocarlo pasándole los parámetros necesarios. Por ejemplo, un plugin  `postProcessByHtml` generalmente necesita un string `html` y un `HandledRoute`. Un plugin `router` generalmente necesita un string `route` y un parámetro `config`.

```ts
// ./scully/plugins/custom-plugin.spec.ts

const pluginResult = await customPlugin(htmlString, handledRouteData);
```

Otra razón por la que podría necesitar el método `findPlugin` es para crear un nuevo plugin componiendo otros plugins. Por ejemplo, digamos que usted tiene dos plugins `postProcessByHtml`, `pageTitle` y `canonicalLink`. A continuación, desea crear un nuevo plugin llamado `seo`. Este plugin ejecutará los dos primeros plugins y luego hará más trabajo. Este nuevo plugin puede verse parecido a:

```ts
registerPlugin('postProcessByHtml', 'seo', async (html, route) => {
  const pageTitle = findPlugin('pageTitle');
  const canonicalLink = findPlugin('canonicalLink');

  html = await pageTitle.then(canonicalLink);

  // Hará más trabajo de SEO 

  return Promise.resolve(html);
});
```

Ahora tiene un nuevo plugin `postProcessByHtml` llamado `seo` que hace todo su trabajo de SEO por usted, con la ayuda de un par de plugins más.

## [Conclusión](#conclusion)

El sistema de plugins de Scully es increíblemente poderoso y le brinda la posibilidad de agregar cualquier característica adicional que pueda necesitar. Existe un catálogo creciente de plugins comunitarios, todos los cuales son relativamente simples de agregar a su sitio y le añaden un gran valor. La mayoría, si no todos, están [en NPM y empiezan con `scully-plugin`](https://www.npmjs.com/search?q=scully-plugin). Si no puede encontrar lo que necesita, ¡cree el suyo propio!
