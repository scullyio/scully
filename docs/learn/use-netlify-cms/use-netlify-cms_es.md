---
title: Usar Netlify CMS con Tu Sitio Scully
lang: es
position: 20
---

## Información general

Scully es ideal para crear sitios web rápidos y estáticos. Si tiene experiencia técnica, agregar contenido al sitio es relativamente fácil. Puede editar el HTML directamente o agregar nuevos archivos markdown para nuevos posts de blog. Pero los usuarios menos técnicos se benefician de tener un sistema de gestión de contenido para editar el contenido. Netlify proporciona una opción de CMS que puede usar, y configurarlo con Scully es bastante sencillo. En esta publicación, aprenderá cómo crear un sitio Scully y habilitar Netlify CMS.

## Primeros pasos

Primero, cree una nueva aplicación Angular e inicialice Scully y el blog:

```bash
$ ng new scully-netlify-cms --routing
...
$ ng add @scullyio/init
...
$ ng g @scullyio/init:blog
...
```

No voy a repasar cada uno de estos pasos en detalle; es mejor dejarlo para otra publicación. Solo sepa que esos tres comandos crean una nueva aplicación Angular, inicializan Scully y agregan soporte de blog a Scully. A continuación, necesitamos crear un par de módulos y componentes para usar en el enrutamiento. Puedes hacerlo así:

```bash
$ ng g m admin --routing
$ ng g c admin/home
$ ng g m home --routing
$ ng g c home/home
$ ng g c blog/list
```

Aquí creamos dos módulos, `admin` y `home` asi como un `HomeComponent` que se utilizará como ruta principal para cada uno de esos módulos. Este es solo un ejemplo de los nombres de los componentes, por cierto; puede nombrarlos como quieras. El único necesario para que Netlify CMS funcione es el Admin module.

A continuación, asegúrese de que las rutas estén configuradas en el archivo `app-routing.module.ts`:

```ts
// app-routing.module.ts

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];
```

Esta definición de ruta carga lentamente cada uno de estos módulos al visitar las rutas. Antes de pasar a la siguiente sección, agreguemos al menos una navegación básica al archivo `app.component.html` para que podamos acceder a diferentes partes de la aplicación:

```html
<!-- app.component.html -->

<nav *ngIf="(isAdminPage$ | async) === false">
  <a routerLink="/">Home</a>
  <a routerLink="/admin">Admin</a>
  <a routerLink="/blog">Blog Posts</a>
</nav>

<router-outlet></router-outlet>
```

Ahora está listo para llegar a la aplicación. Notará el `*ngIf` en el elemento `nav`. Es necesario porque cuando vaya a la página de administración de CMS, que configurará a continuación, este navegador eliminará el diseño y dejará algunas partes inutilizables. De esta forma no tienes que preocuparte por eso. La lógica para el observable `isAdminPage$` se decide en el archivo `app.component.ts`:

```ts
// app.component.ts

  isAdminPage$: Observable<boolean>;

  constructor(private _router: Router) {}

  ngOnInit() {
    this.isAdminPage$ = this._router.events.pipe(
      filter((evt: any) => {
        return evt instanceof NavigationEnd;
      }),
      map((evt: NavigationEnd) => {
        return evt.url.includes('/admin');
      }),
    );
  }
```

Ahora debería tener todo preparado para configurar Netlify CMS en su sitio Scully. Una vez que llegue a este punto, envíe el código a un repositorio de GitHub.

> Al igual que no aprendió lo que hicieron todos los comandos anteriores (porque estaba fuera del alcance de este proyecto), no aprenderá todos los entresijos de Netlify CMS. Puede hacerlo en [su sitio de documentación](https://www.netlifycms.org/docs/intro/). Los fragmentos de código relacionados con Netlify que se mencionan en esta publicación provienen de la sección de documentos de CMS que le muestran cómo [agregar el CMS a su propio sitio](https://www.netlifycms.org/docs/add-to-your-site/). Repetiré partes de esa parte de los documentos en las secciones siguientes, pero no profundizaré. Volveré a consultar los documentos de CMS cuando sea necesario.

## Pasos necesarios en la aplicación web Netlify

Hay algunos pasos que debe seguir en Netlify para que todo funcione. Lo primero es crear un nuevo sitio desde Git. Seleccione el repositorio que creó al final del último paso y complete los campos que solicita Netlify. Esto hará que el sitio se implemente en Netlify cuando ingrese a su rama `main`. Después de crear el sitio, puede seguir los [pasos de autenticación Netlify CMS](https://www.netlifycms.org/docs/add-to-your-site/#authentication). Esto le permitirá iniciar sesión en el CMS una vez que esté en funcionamiento. Puede leer la documentación de Netlify para configurar Netlify Identity.

## Añadiendo Netlify CMS a su Aplicación Angular

Ok, ahora entrarás en los complementos a la aplicación Angular. En primer lugar, debe agregar un par de etiquetas `script` al archivo `index.html` de la aplicación. El primero debe colocarse dentro de la etiqueta `head`, el segundo en la etiqueta `body`:

```html
<!-- src/index.html -->
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on('init', user => {
      if (!user) {
        window.netlifyIdentity.on('login', () => {
          document.location.href = '/admin/';
        });
      }
    });
  }
</script>
```

Estos dos scripts son necesarios para autenticarse con Netlify Identity para obtener acceso a la sección de administración de CMS. A continuación, debemos agregar un script más a la aplicación, pero debe agregarse al componente que se inyectará en la página cuando vaya a la ruta `/admin`. Si siguió los pasos anteriores, es el componente `/admin/home/home.component`. Dentro de los componentes del archivo TypeScript, usaremos `RendererFactory2` para inyectar el script. Esta es la forma convencional de agregar scripts de terceros como este en aplicaciones Angular. El componente se verá así:

```ts
// admin/home/home.component.ts

export class HomeComponent implements OnInit {
  private renderer2;

  constructor(private rendererFactory2: RendererFactory2, @Inject(DOCUMENT) private _document: Document) {
    this.renderer2 = this.rendererFactory2.createRenderer(null, null);
  }

  ngOnInit(): void {
    const script: HTMLScriptElement = this.renderer2.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js`;
    script.text = '';
    this.renderer2.appendChild(this._document.body, script);
  }
}
```

En este componente, el servicio `RendererFactory2` crea una instancia de `renderer`. Luego en el método `OnInit`, se crea el script y el script `netlify-cms.js` se añade al documento. Ahora, cuando navegue a la ruta `/admin`, el CMS se puede cargar.

La última parte que debe hacer es preparar el archivo `config.yml` que necesita Netlify CMS. Puede leer sobre [la configuración en los docs](https://www.netlifycms.org/docs/add-to-your-site/#configuration), pero aquí hay un archivo de configuración básico. Configura a qué rama hacer un commit, qué tipo de autenticación está usando, dónde almacenar los archivos cargados y define una colección. La colección de este ejemplo son las publicaciones de blog que se escribirán con el CMS.

```yml
backend:
  name: git-gateway
  branch: main # Rama para actualizar (opcional; por defecto es la main)
collections:
  - name: 'blog' # Usado en rutas, e.j., /admin/collections/blog
    label: 'Blog' # Usado en la UI
    folder: 'blog' # La ruta a la carpeta donde se almacenan los documentos.
    create: true # Permite a los usuarios crear nuevos documentos en esta colección
    slug: '{{year}}-{{month}}-{{day}}-{{slug}}' # Nombre del archivo plantilla, e.j., YYYY-MM-DD-title.md
    fields: # Los campos de cada documento, normalmente al principio.
      - { label: 'Layout', name: 'layout', widget: 'hidden', default: 'blog' }
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Description', name: 'description', widget: 'string' }
      - { label: 'Slug', name: 'slug', widget: 'string' }
      - { label: 'Publish Date', name: 'publishDate', widget: 'datetime' }
      - { label: 'Body', name: 'body', widget: 'markdown' }
      - { label: 'Published', name: 'published', widget: 'boolean', default: true }
media_folder: 'static/img' # Carpeta donde deben ir los archivos cargados por el usuario
```

Puede colocar este archivo en cualquier lugar que desee, siempre que esté incluido en la salida después de que el sitio se haya generado con Scully. Una posibilidad sería agregarlo a la carpeta `src`, y luego incluirlo en el array `assets` para el proyecto. Esto manejaría `config.yml` tal como se maneja el favicon.

```json
<!-- angular.json -->
...
  "assets": ["src/favicon.ico", "src/config.yml", "src/assets"],
...
```

Cuando se crea la aplicación, el archivo de configuración se copia en la carpeta `dist/static`. Una vez que tenga este archivo `config.yml` en el lugar correcto después de compilar la aplicación, puede pasar al siguiente paso. Confirme todos sus cambios y envíelos a la rama `main` de su repositorio, lo que activará una nueva compilación e implementación.

## Acceder al CMS desde el navegador

Una vez que Netlify haya creado e implementado su aplicación, puede visitar el sitio e ir a la ruta /admin. Cuando se inyecta el script, Netlify debería hacerse cargo y pedirle que se autentique con Netlify Identity. Después de autenticarse, debería ser llevado a una página de inicio de CMS. Se verá algo como esto:

![Netlify CMS Landing Page](/assets/images/blog-posts/scully-netlify-cms/netlify-cms-landing-page.png)

Desde aquí, podrá agregar y editar nuevas publicaciones de blog en un editor de texto enriquecido o markdown fácil de usar. Ya no tendrá que editar los archivos post de blog markdown directamente.

## Conclusión

Netlify CMS es una gran herramienta para colocar un CMS ligero encima de su aplicación Scully. Todo el código puede vivir en una base de código, y todo está respaldado directamente por archivos markdown. No se necesita mucho para agregarlo a su sitio, y además es rentable.
