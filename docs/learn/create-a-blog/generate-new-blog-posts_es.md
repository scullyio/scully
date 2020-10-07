---
title: Generando nuevos artículos para el blog
published: true
lang: es
position: 200
---

# Generando nuevos artículos para el blog

## Visión general

Para crear un nuevo artículo del blog, ejecutar el siguiente comando:

```bash
ng generate @scullyio/init:post --name="This is my post"
```

## Opciones Disponibles

| option         | description                                                    | default   |
| -------------- | -------------------------------------------------------------- | --------- |
| `name`         | Define el nombre del artículo creado                           | 'blog-X'  |
| `target`       | Define la carpeta destino para el archivo del nuevo artículo   | 'blog'    |
| `metaDataFile` | Usar archivo yaml de metadatos como plantilla para el artículo | undefined |

## Uso

Veamos un ejemplo. Si queremos crear un nuevo artículo para el blog entonces escribimos el siguiente comando en la consola `ng generate @scullyio/init:post --name="Angular tutorial"`. Esto mostrará el siguiente mensaje:

```output
ng generate @scullyio/init:post --name="Angular tutorial"
? What's the target folder for this post? blog
    ✅️ Blog ./blog/angular-tutorial.md file created
CREATE blog/angular-tutorial.md (99 bytes)
```

El comando de arriba preguntará dónde quieres colocar el artículo. Seleccionamos el valor por defecto, que es en la carpeta `blog/`. Podemos ver a continuación como el archivo `angular-tutorial.md` es creado y muestra el siguiente mensaje:

```output
CREATE blog/angular-tutorial.md
```

Veamos cómo es el archivo generado `angular-tutorial.md` generado:

```markdown
---
title: Angular tutorial
description: blog description
published: false
---

# Angular tutorial
```

Al inicio del archivo hay un encabezado con un conjunto de instrucciones que utiliza Scully. Ellos son:

- `title`, Este es el título del artículo del blog
- `description`, Esta es la descripción
- `published`, Esta es una propiedad que representa si un artículo del blog es publicado o no. Valores posibles son: `true` o `false`.

## Generando la ruta del artículo

Lo próximo que queremos hacer es compilar Scully para generar la ruta. Escribe en la consola:

```bash
npm run scully
```

Esto comenzará el proceso que genera las páginas. Veamos nuevamente el encabezado de tu archivo `angular-tutorial.md`, ha cambiado. Ahora el archivo contiene lo siguiente:

```markdown
---
title: 'Angular tutorial'
description: 'blog description'
published: false
slugs:
  - ___UNPUBLISHED___kao8mvda_pmldPr7aN7owPpStZiuDXFZ1ILfpcv5Z
---

# Angular tutorial
```

La propiedad `slugs` ha sido incluida en el encabezado del archivo. `slugs` contiene una URL anónima siempre que la propiedad `published` tenga el valor `false`. Esta es una URl que puedes compartir con otras personas como ejemplo para obtener un comentario de ellos de tu artículo antes de publicarlo.

> NOTA, cuando ejecutamos el comando para compilar Scully, el artículo del blog que acabamos de crear con Markdown será convertido a HTML y guardado en la carpeta `dist/static/blog/<anonymous slug value>/index.html`.

## El sitio web

Ahora que la página y la ruta han sido generadas, ejecutemos el servidor de la aplicación y aseguremos que funciona. Ejecuta el siguiente comando para ejecutar el servidor con el sitio estático creado por Scully:

```bash
npm run scully:serve
```

El comando dará una salida como esta:

```output
Angular distribution server started on "http://localhost:1864/"
Scully static server started on "http://localhost:1668/"
```

Abre una ventana del navegador y escribe la URL `http://localhost:1668/`:

Tu primer artículo de blog se puede encontrar en la URL `http://localhost:1668/blog/<anonymous slug>`, que si compruebas el encabezado del archivo, este será `http://localhost:1668/blog/___UNPUBLISHED___kao8mvda_pmldPr7aN7owPpStZiuDXFZ1ILfpcv5Z`.

Deberías ver lo siguiente en el navegador:

```
ScullyIo content
Angular tutorial
End of content
```

## Publicando

En algún momento, cuando te autoricen el artículo, podrás publicarlo. Para eso debes abrir el archivo `angular-tutorial.md` y cambiar la propiedad `published` a `true` para publicarlo. También vaciar la propiedad `slugs` para que no esté más disponible con el link anónimo. El archivo debería verse de esta manera:

```markdown
---
title: 'Angular tutorial'
description: 'blog description'
published: true
---

# Angular tutorial
```

Ejecuta el siguiente comando:

```bash
npm run scully
```

En este momento será creada una nueva ruta diferente. Por defecto, Scully creará una ruta con el mismo nombre del archivo markdown (sin la extensión). Veamos `dist/static/blog` y verás que se ve así:

```
--| dist
----| static
------| blog
--------| angular-tutorial
----------| index.html
```

Ejecutemos el servidor de scully de nuevo con el comando:

```bash
npm run scully:serve
```

Abre el navegador y dirigete a la URL `http://localhost:1668/blog/angular-tutorial`.

## Sobreescribiendo el slug

Si **no** estás feliz con la convensión de Scully para crear slug en base al nombre del archivo, tu puedes cambiarlo escribiendo la propiedad `slug` en el encabezado del archivo markdown. Cambia el archivo `angular-tutorial.md` por lo siguiente:

```markdown
---
title: 'Angular tutorial'
description: 'blog description'
published: true
slug: angularjs-still-rocks
---

# Angular tutorial
```

Como se puede ver, la propiedad `slug` ha sido agregada y asignado el valor `angularjs-still-rocks`. Esto le dará instrucciones a Scully para usarlo como una ruta al artículo. Ahora genera las rutas nuevamente con el comando:

```bash
npm run scully
```

Nota ahora que la carpeta `dist/static/blog` ahora tiene un nuevo archivo, ubicado `angular-js-still-rocks/index.html`.

Ejecutemos el servidor de scully nuevamente con el comando:

```bash
npm run scully:serve
```

El artículo del post ahora puede encontrarse en la URL `http://localhost:1668/blog/angularjs-still-rocks`.
