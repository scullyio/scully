---
title: Preguntas Frecuentes
published: true
lang: es
position: 200
---

# Preguntas Frecuentes

## Ignorando rutas

<details>
<summary>Ignorar rutas sin configurar</summary>

> tengo muchas rutas que no quiero que Scully maneje.
> ¿Cómo puedo lidiar con esto?

Scully usa el complemente `default` para cualquier ruta no especificada. Cuando quieras menejar los valores predeterminados, puedes reemplazar este complemento por otro
Por ejemplo, si queires ignorar todas las rutas indefinidas puedes hacer:

```typescript
registerPlugin('router', 'default', findPlugin('ignored'));
```

En caso de quieras tener mayor control, puedes crear un complemente personalizado:

```typescript
registerPlugin(
  'router',
  'default',
  async (route: string): Promise<HandledRoute[]> => {
    if (route === 'somethingSpecial') {
      return [{ route, type: 'somethingElse' }];
    }
    if (route === 'somethingSpecial/:id') {
      const data = httpGetJson('someEndPoint'); // fetch some json
      const { createPath } = routeSplit(route);
      const routes: HandledRoutes[] = [];
      for (const row of data) {
        routes.push({ route: createPath(row.id), type: 'default' });
      }
      return routes;
    }
    return [];
  },
  undefined,
  { replaceExistingPlugin: true }
);
```

</details>

## Complementos

<details>
<summary>¿Como puede solucionar los errores de compilación en los complementos relacionados con el módulo `express-serve-static-core`?</summary>

> La compilación de un complemento que resulte en un error `Cannot find module 'express-serve-static-core'`, con origen en `node_modules/@scullyio/scully/lib/utils/serverstuff/staticServer.d.ts`

Para corregir esto, agrega las propiedades `skipLibCheck` y `skipDefaultLibCheck` en tu `tsconfig.json` => `compilerOptions` como se muestra a continuación:

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "skipLibCheck": true,
    "skipDefaultLibCheck": true
  }
}
```

</details>

<details>
<summary>Scully no puede encontrar los complementos que acabo de declarar</summary>

> Ejecutar Scully devuelve el error: `Unknown type "myPlugin" in route "/aRoute"`

Esto podria pasar si tienes instalado Scully globalmente, y tu estás tratando de ejecutar con la versión global.
Áseguresé que está ejecutando Scully desde su repositorio local.

```bash
npx scully
```

Esto hará que se utilice la versión local de Scully y devería resolver el error.

</details>

## Parámetros en rutas

<details>
<summary>No se encuentra configuración para la ruta</summary>

Si ejecutas Scully y se despliega la siguiente advertencia, necesitas definirle a Scully cómo usar los parámetros en las rutas

```bash
No configuration for route `/user/:userId` found. Skipping
```

El error anterior es obtenido porque Scully no conoce todos los valores posibles para `:userId`. Debes enseñarle a Scully cómo obtener la lista de `:userId`s para tu aplicación. Scully puede convertir `/user/:userId` en una lista de rutas pre-renderizadas como:

```
/user/1
/user/2
/user/3
...
/user/100
```

Incluso en pequeños proyectos Angular tienen rutas que poseen parámetros. Para evitar que Scully salte esas rutas, configure el [complemento de rutas](/docs/Reference/plugins/types/router). Los complementos de rutas enseñan a Scully cómo obtener datos e incluirlos en las rutas para usarlos como parámetros.

La manera más fácil de entender el complemento de rutas es entender el complemento [`jsonPlugin`](/docs/Reference/plugins/built-in-plugins/json). Una simle consulta de datos a una API que especificas, y que retorne una lista de propiedades que pueden usarse para reemplazar los parámetros de la ruta. Visita la [jsonPlugin documentación](/docs/Reference/plugins/built-in-plugins/json) para ver un ejemplo de cómo configurarlo fácilmente.

</details>

<details>
<summary>Parámetros de idioma en las rutas</summary>

> tengo una estructura de ruteo como esta:
> `/:lang`  
> `/:lang/page1`  
> `/:lang/page2`  
> etc.  
> `:lang` puede tomar algunos valores (`'it'`, `'en'`, etc.)  
> Yo prefiero almacenar `:lang` en la configuración, sin un endpoint dedicado.  
> Cómo puedo resolver esto?

Como el archivo de configuración de Scully es Typescript, puedes post-procesar el objeto de enrutamiento.
A very crude solution would be something like this:

```typescript
import { ScullyConfig } from '@scullyio/scully';

const preLangConfig: ScullyConfig = {
  /** settings */
  routes: {
    ':lang/route1': { type: 'default' },
    ':lang/route2': { type: 'default' },
    ':lang/route3': { type: 'default' },
    ':lang/route4': { type: 'default' }
  }
};
export const config = {
  ...preLangConfig,
  routes: Object.fromEntries(
    // make sure you use a node-version that supports this, or use a reduce.
    Object.entries(preLangConfig.routes).reduce((all, [route, config]) => {
      if (route.includes(':lang')) {
        ['it', 'en', 'nl', 'sp'].forEach(
          (
            lang // <-- language array
          ) => all.push([route.split(':lang').join(lang), config])
        );
      } else {
        all.push([route, config]);
      }
      return all;
    }, [])
  )
};

console.log(config.routes);
```

Esto toma `preLangConfig` y luego itera sobre todas las rutas. Cuando encuentra una ruta con el parámetro `:lang`, crea una entrada para cada valor provisto por el arreglo de idiomas. De esta forma, la configuración final tendrá una ruta para cada idioma disponible.

</details>

## Docker y CI/CD

<details>
<summary>Usando Scully dentro de Docker, GitLab, u otro entorno CI/CD</summary>
> Cuando ejecuto Scully en XXX When I run Scully in XXX se detiene.

En todos los casos que vimos, el problema está con puppeteer corriendo dentro de XXX. En la mayoría de los casos se trata de la dependencia a Chrome.
Hay mucha información sobre esto en la [página de solución de problemas de puppeteet](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md)

Varios usuarios nos comentaron que con la siguiente configuración funciona para ellos.

```docker
FROM node:12-alpine

RUN apk add --no-cache \
      chromium \
      ca-certificates

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
```

Utiliza esta configuración básica de Docker, y luego asegúrese de configurar el entorno correctamente en el contenedor que ejecuta Scully:
Para usar esto, creamos los proyectos Docker con una configuración como esta:

```docker
FROM aboveConfig
ENV SCULLY_PUPPETEER_EXECUTABLE_PATH '/usr/bin/chromium-browser'
... more docker stuff here
... in the end:
RUN npx scully
```

</details>

## Ubicación de archivos

<details>
<summary>Carpetad dist</summary>
> Scully dice que no puedo usar la carpeta `dist`

Como en algunos cosas Angular CLI ubica los archivos para distribuir en la carpeta dist, y la salida resultante de Scully lo hace de forma predeterminada en una sub-carpeta de esta.
Como la mayoría de los sistemas operativos plantean objeciones cuando tu estas tratando de copiar una carpeta en una subcarpeta del de la misma carpeta. Scullt retornará un error.
Para arreglar este error, deberías abrir tu archivo `angular.json` y cambiar la propiedad `outputhPath` de:

```json
  ...,
  "architect": {
    ...,
    "buiild" : {
      ...,
      "outputPath": "dist",
    }
  }

```

a lo siguiente:

```json
  ...,
  "architect": {
    ...,
    "buiild" : {
      ...,
      "outputPath": "dist/someName",
    }
  }

```

</details>
