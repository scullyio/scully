---
title: Primeros Pasos
order: 200
lang: es
---

# Iniciando con Scully

¡Bienvenido a Scully!

Antes de iniciar, por favor lea los [Prerrequisitos](pre-requisites_es.md).

**_Todo acerca de Scully en un video_** : [Construyendo las Apps de Angular más rápidas](https://thinkster.io/tutorials/scully-webinar-building-the-fastest-angular-aps-possible)

La guia de inicio cubre los siguientes temas:

1. [Instalación](#instalación)
2. [Construcción](#build)

## Instalación

Primero, abra abra la ruta de su aplicación de Angular en una terminal y corra el siguiente comando:

```bash
ng add @scullyio/init
```

Una ves se ha instalado exitosamente se mostrará el siguiente mensaje:

```bash
Installing packages for tooling via npm.
Installed packages for tooling via npm.
    Install ng-lib for Angular v9
    ✅️ Added dependency
UPDATE src/ap/ap.module.ts (466 bytes)
UPDATE src/polyfills.ts (3031 bytes)
UPDATE package.json (1378 bytes)
√ Packages installed successfully.
    ✅️ Update package.json
    ✅️ Created scully configuration file in scully.{{yourApp}}.config.js
CREATE scully.{{yourApp}}.config.js (109 bytes)
UPDATE package.json (1438 bytes)
```

## Generar un Blog

Corra el siguiente comando para generar un módulo de blog.

[más información aquí](blog.md)

```bash
ng generate @scullyio/init:blog
```

Ahora, elimine el contenido del archivo `ap.component.html` y solo deje el tag `<router-outlet></router-outlet>`.

[más información aquí](blog.md)

### Crear el Punto de Entrada de la Aplicación (Página de Inicio)

Crear un _Módule de Inicio_ con las rutas configuradas y con un _Componente de Inicio_; con el siguiente comando:

```bash
ng generate module home --route=home --module=ap-routing
```

**Scully depende del _punto de entrada de las rutas (route entry point)_.**

### Configurar el Módulo de Inicio como la Raíz del Proyecto

Abra el archivo `ap-routing.module.ts` y agregue un atributo de ruta de inicio, como se muestra a continuación:

```typescript
const routes: Routes = [
  // ...
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];
```

### Inyectando el Servicio de Rutas de Scully

Scully proporciona un servicio para acceder a las rutas generadas de una manera sencilla.

Abra el archivo `home.component.ts` y agregue el siguiente código:

```typescript
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

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

Ahora es posibl iterar a travé de los links dentro de la plantilla al abrir el archivo `home.component.html` y agregando el siguiente código:

```html
<p>home works!</p>

<ul>
  <li *ngFor="let page of links$ | async">{{ page.route }}</li>
</ul>
```

**NOTA:** Si no se agrega el servicio de rutas de Scully, las páginas no se procesarán y no se mostrarán.

## Construyendo la Aplicación de Scully

En este punto el proyecto de Angular con Scully está listo.

Primero, construya la aplicación de Angular con el comando:

```bash
ng build
```

Ahora, construya con Scully para convertir la ap de Angular en un citio estático preprocesado.

```bash
npm run scully
```

¡Felicidades! Ha convertido su aplicación de Angular en un sitio estatico extremadamente rápido gracias a Scully.

La versión estática del sitio se localiza en el archivo `./dist/static`. Contiene todas las páginas estáticas.

**NOTA:** En caso de cualquier error o advertencia durante el proceso de construcción, por favor siga las instrucciones en la saección de errores/advertencias o [genere un issue](https://github.com/scullyio/scully/issues/new/choose).

## Servir el Sitio Estático

Sirva el contenido del sitio estático con el comando:

```bash
npm run scully serve
```

Este comando crea dos servidores web, uno para la aplicación de Angular y uno para la ap de Scully.

### Deshabilitando JS

**Extra**: Mientras se está sirviendo la ap de Scully, [deshabilite JavaScript](https://developers.google.com/web/tools/chrome-devtools/javascript/disable)
y la navegación del sitio aun funciona. Pero sobre todo, la mayor parte del sitio aun funciona a pesar de que JS ha sido deshabilitado.

### Debugging de la Aplicación de Scully

**Extra**: Para poder hacer debug en la aplicación de Scully con ngServe, asegúrese de correr:

```bash
npm run scully
```

Ahora, inicie el servidor:

```bash
npm run scully:serve
```

Scully usa el HTML generado para llenar el contenido de la sesión `ng serve`.
