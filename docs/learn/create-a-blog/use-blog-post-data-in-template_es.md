---
title: Usando datos del blog en la plantilla de Angular
published: true
lang: es
position: 100
---

# Usando datos del blog en la plantilla de Angular

## Injectando el [Servicio de rutas Scully](docs/Reference/ngLib/scully-routes-service)

Scully provee un servicio para acceder a las rutas generatas fácilmente. Para usarlo abre el archivo `home.component.ts` que creamos anteriormente y agrega el siguiente código:

```typescript
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component()
//...
export class HomeComponent implements OnInit {
  links$: Observable<ScullyRoute[]> = this.scully.available$;

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit() {
    // debug current pages
    this.links$.subscribe((links) => {
      console.log(links);
    });
  }
}
```

Podemos ver que `ScullyRoutesService.available$` devuelve un Observable con un arreglo de [`ScullyRoute`](https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/route-service/scully-routes.service.ts)s, que tiene la siguiente interfaz:

```typescript
export interface ScullyRoute {
  route: string;
  title?: string;
  slugs?: string[];
  published?: boolean;
  slug?: string;
  sourceFile?: string;
  [prop: string]: any;
}
```

Para extrar los datos disponibles de `links$` que Scully ha creado, podemos recorrer el arreglo dentro de la plantilla en el archivo `home.component.html` y agregar un código como el siguiente:

```html
<p>home works!</p>

<ul>
  <li *ngFor="let page of links$ | async">{{ page.route }}</li>
</ul>
```

**NOTA:** Si no agregas ninguna ruta, Scully va a prerenderizar 0 páginas.

## Agregando metadatos a ScullyRoutes

Al inicio de cada archivo `.md` de un artículo del blog, entre los indicadores `---`, cada línea corresponde a una propiedad que podemos obtener de `ScullyRoutesService.available$`.

Por ejemplo, un archivo `.md` que comienza con:

```
---
title: blog title
description: blog description
published: true
arbitraryValue: single value
arbitraryArray: [first item, second item]
---
```

... usemos esos valores en nuestra plantilla:

```html
<ul>
  <li *ngFor="let page of links$ | async">
    {{ page.route }} {{ page.arbitraryValue }}
    <span *ngFor="let arrayItem of page.arbitraryArray">
      {{ arrayItem }}
    </span>
  </li>
</ul>
```
