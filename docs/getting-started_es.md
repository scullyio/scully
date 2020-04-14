---
title: Comenzando
order: 200
---

# Comenzando con Scully

¡Bienvenido a Scully!

Antes de comenzar, por favor lee los [requisitos previos](pre-requisites.md).

Esta guía de inicio cubre tres temas:

1. [Instalación](#instalación)
2. [Compilación](#compilación)

**_IMPORTANT:_ Scully requiere que el enrutador esté presente en su aplicación. Para que esto se genere automáticamente, elija la opción para agregar el Ruteo de Angular desde el indicador cuando ejecute los comandos a continuación.**

## Instalación

Primero, abra su aplicación Angular. Dentro del directorio raíz del proyecto ejecute el siguiente comando:

```bash
ng add @scullyio/init
```

Este comando instala dependencias y configura los archivos que necesita Scully.

Una vez que finalice la instalación, se mostrará el siguiente mensaje:

```bash
Installing packages for tooling via npm.
Installed packages for tooling via npm.
    Install ng-lib for Angular v9
    ✅️ Added dependency
UPDATE src/app/app.module.ts (466 bytes)
UPDATE src/polyfills.ts (3031 bytes)
UPDATE package.json (1378 bytes)
√ Packages installed successfully.
    ✅️ Update package.json
    ✅️ Created scully configuration file in scully.{{yourApp}}.config.js
CREATE scully.{{yourApp}}.config.js (109 bytes)
UPDATE package.json (1438 bytes)
```

## ng generate @scullyio/init:blog

Este comando generará un módulo de blog. [Más información aquí](blog.md)

Una vez generado, elimine todo el contenido del archivo `app.component.html` y agregue solo la etiqueta de salida del enrutador `<router-outlet></router-outlet>`.

### Página de inicio

**Es necesario crear una _ruta de punto de entrada_ porque el Angular CLI no crea uno de forma predeterminada.**

Cree un _Home Module_ con un _Home Component_ y sus rutas ya configuradas con el siguiente comando:

```ts
ng generate module home --route=home --module=app-routing
```

### Configurar la página de inicio como raíz

Abra el archivo `app-routing.module.ts` y configure un atributo de ruta vacío para la ruta de inicio como se muestra a continuación:

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

Scully ofrece un servicio para acceder fácilmente a las rutas generadas. Para usarlo, abra el archivo `home.component.ts` y agregue el siguiente código:

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

Ahora, es posible recorrer los enlaces dentro del template abriendo el archivo `home.component.html` y agregando el siguiente código:

```html
<p>home works!</p>

<ul>
  <li *ngFor="let page of links$ | async">{{ page.route }}</li>
</ul>
```

**NOTA:** Si no agrega ninguna ruta, scully pre-renderizará 0 páginas.

## Compilación

En este punto, tienes tu proyecto Angular con Scully instalado con éxito.

#### IMPORTANTE:

_Scully requiere los archivos de distribución en la carpeta `./dist/my-scully-app`._

**NOTA:** Si la aplicación Angular genera los archivos de distribución directamente en la carpeta raíz `./dist`. Scully no puede copiar todos los archivos. Este es un problema del sistema de archivos del sistema operativo.

Cree la aplicación para generar los archivos de distribución:

```bash
ng build
```

Ahora, vamos a construir Scully y convertir tu aplicación Angular en un sitio estático pre-renderizado.

```bash
npm run scully
```

¡Felicitaciones! Has convertido tu aplicación Angular en una aplicación perversamente rápida pre-renderizada gracias a Scully.

La versión buildeada está en la carpeta `./dist/static`. Esta carpeta contiene las páginas del sitio.

**NOTA:** En caso de errores o warnings durante el proceso de compilación, por favor siga las instrucciones en la sección de errores/warnings o [cree un issue](https://github.com/scullyio/scully/issues/new/choose).

#### Sirviendo los contenidos

Utilice `npm run scully serve` para servir su contenido.
Scully serve es una opción para crear dos servidores web, uno para su aplicación Angular y el otro para Scully.

**Crédito adicional**: Mientras sirve la aplicación estática, [deshabilite JavaScript](https://developers.google.com/web/tools/chrome-devtools/javascript/disable) y asegúrese de que la navegación del sitio todavía funcione y que la mayoría de las partes del mismo sigan funcionando sin JS habilitado.
