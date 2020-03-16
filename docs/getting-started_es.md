---
title: Primeros pasos
order: 200
---

# Scully - Primeros pasos

## Requisitos previos

Lo primero que se necesita para comenzar con Scully es una aplicación Angular que utilice **Angular 8.x.x** o **9.x.x** y **Node 12.x.x**

Es posible crear una nueva aplicación Angular 9 con el siguiente comando:

```bash
npx -p @angular/cli ng new my-scully-app
```

Si esto falla, es posible instalar Angular CLI de forma global y crear una nueva aplicación con esa versión.

```
npm install -g @angular/cli
ng new my-scully-app
```

Encuentra más información aquí [👉 angular.io/cli](https://angular.io/cli)

**NOTA:** Scully usará Chromium. Asegúrese de que su Sistema Operativo (y sus restricciones por parte de su administrador) permitan instalar y ejecutar Chromium.

Este documento de introducción cubre los tres pasos para agregar Scully a su proyecto.

1. [Instalación](#instalación)
2. [Compilación](#compilación)
3. [Pruebas](#pruebas)

## Instalación

Para instalar Scully, ejecute el siguiente comando desde el directorio raíz de su proyecto Angular (en la terminal de comandos):

```bash
ng add @scullyio/init
```

El comando anterior instala las dependencias y configura los archivos necesarios para comenzar a compilar con Scully (_profundizaremos en esto en los próximos lanzamientos_).

Si la instalación fue exitosa, se mostrará un mensaje similar a este:

```bash
Installed packages for tooling via yarn.
✔ Added dependency
UPDATE package.json (1447 bytes)
UPDATE src/app/app.module.ts (472 bytes)
UPDATE src/polyfills.ts (3035 bytes)
UPDATE src/app/app.component.ts (325 bytes)
  ✔ Packages installed successfully.
  ✔ Update package.json
CREATE scully.config.js (65 bytes)
UPDATE package.json (1507 bytes)
```

#### IMPORTANTE: _Scully requiere que el router esté presente en su aplicación, no olvide agregarlo._

#### IMPORTANTE: _Scully requiere que los archivos de distribución estén en una subcarpeta de `./dist`_

Si tienes una aplicación Angular, que genera los archivos de distribución directamente en la raíz de `./dist` Scully no puede copiar todos los archivos del dist. Este es un problema del sistema de archivos del sistema operativo. No podemos copiar recursivamente en una subcarpeta de dist. La solución es configurar la opción `architect-> build-> options-> outputPath` en una subcarpeta.

## ng g @scullyio/init:blog

Este comando generará un módulo llamado blog. [más información aquí](https://github.com/scullyio/scully/blob/master/docs/blog.md)

Una vez que se genera, puede abrir el `app.component.html` creado por defector por Angular-CLI y eliminar todo el contenido dejando solo la etiqueta de salida del router `<router-outlet></router-outlet>`

### Página de inicio

Dado que la plantilla predeterminada de Angular-CLI no crea un punto de entrada para las rutas, al principio puede ser confuso trabajar scully

```ts
ng g m home --route=home --module=app-routing
```

Este comando generará el nuevo módulo para la página de inicio más un nuevo componente con una ruta configurada

### Configurar la página de inicio como raíz

Abra `app-routing.module.ts` y deje el atributo path vacío para la ruta de la página de inicio

```ts
const routes: Routes = [
  // ...
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
];
```

### Inyección del servicio de rutas

Scully ofrece un servicio para acceder fácilmente a las rutas generadas. Para listarlas en su template, abra `home.component.ts` agregando el siguiente código

```ts
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {Observable} from 'rxjs';

@Component()
//...
export class HomeComponent implements OnInit {
  links$: Observable<any> = this.scully.available$;

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit() {
    // debug current pages
    this.links$.subscribe(links => {
      console.log(links);
    });
  }
}
```

y luego ciclamos dentro de `home.component.html`

```html
<p>home works!</p>

<ul>
  <li *ngFor="let page of links$ | async">{{ page.route }}</li>
</ul>
```

## Compilación

A estas alturas ya debería tener su proyecto Angular con Scully instalado con éxito, así que déjenos ejecutar una compilación de Scully y convertir su sitio en un aplicación Angular pre-renderizada.

Dado que Scully se ejecuta en función de una compilación de su aplicación, el primer paso es compilar su proyecto Angular (con las rutas adicionales), y luego ejecutar la compilación de Scully.

```bash
ng build
npm run scully
```

Eso es todo, ya terminaste! En el directorio de su proyecto, ahora debería tener una carpeta `/dist/static` que contenga la versión integrada de su aplicación.

**NOTA:** Si tuvo algún error o advertencia durante la fase de compilación, siga las instrucciones en los errores/advertencias
(si corresponde) o [cree un issue](https://github.com/scullyio/scully/issues/new/choose).

**NOTA:** Si no agrega ninguna ruta, Scully pre-renderizará 0 páginas.

## Pruebas

Ahora que su proyecto ha sido pre-renderizado, puede validar la compilación mediante:

#### Sirviendo los contenidos

Al utilizar algo como [http-server](https://www.npmjs.com/package/http-server) puede servir el contenido de su carpeta `dist/static`. Todas las rutas en su aplicación Angular no pre-renderizada aún deberían funcionar. No todas las aplicaciones son capaces de ejecutarse sin ellas.

**Crédito adicional**: Mientras sirve su aplicación, [deshabilite JavaScript](https://developers.google.com/web/tools/chrome-devtools/javascript/disable) y asegúrese de que aún funcione. Este es el objetivo de su aplicación, ejecutar JavaScript deshabilitado. La mayoría de las partes de su aplicación aún deberían funcionar sin JS habilitado.

#### Examinando los contenidos

Examine los contenidos de su directorio `dist/static` y asegúrese de que todas sus páginas fueron pre-renderizadas y guardadas en HTML correctamente.

---

[Documentación completa ➡️](scully.md)
