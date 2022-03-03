---
title: Plugin flash prevention 
published: true
lang: es
position: 100
---

# Plugin `flash-prevention` 

## Información general

El `scully-plugin-flash-prevention` es un postRenderer que te ayuda a ocultar los flashes que tu aplicación pueda estar experimentando una vez que agregas Scully a tu proyecto.

Después de añadir Scully, su aplicación aparecerá instantáneamente porque los pre-renderizados de HTML y CSS están disponibles de inmediato. Después de aparecer instantáneamente, los archivos JavaScript y CSS se descargarán y luego su aplicación Angular arrancará (init). Cuando arranca, la versión pre-renderizada puede desaparecer momentáneamente, y una vez la aplicación esté lista, la vista volverá a aparecer. Esta desaparición para luego volver a aparecer es muy normal para las aplicaciones que se renderizan previamente en un servidor. Este plugin sirve para evitarlo.

Este plugin muestra la copia pre-renderizada de tu aplicación hasta que esté completamente renderizada y el flash termine. Luego mostrará su aplicación y eliminará la copia.

## Cómo funciona

Antes de este plugin, tu aplicación se pre-renderizaría y luego se guardaría en un archivo, como este:

```html
<app-root _nghost-abc="" ng-version="9.0.1" class="my-class">
  // Aquí iría todo el contenido de su aplicación
</app-root>
```

Después de este plugin, verá lo siguiente en su plantilla pre-renderizada:

```html
<app-root class="my-class"></app-root>
<app-root-scully _nghost-abc="" ng-version="9.0.1" class="my-class">
  // Aquí iría todo el contenido de tu aplicación
</app-root-scully>
```

Esta app-root-scully será la copia pre-renderizada de su aplicación. Antes de que su aplicación se renderice completamente, app-root se ocultará y se mostrará app-root-scully.

Una vez que su aplicación se haya iniciado por completo, app-root-scully es ocultará y 100ms más tarde se borrará del DOM. El mecanismo que muestra y oculta estos dos es CSS. Hay algo de CSS agregado durante la compilación de Scully similar a esto:

```css
body:not(.loaded) app-root {
  display: none;
}
body.loaded app-root-scully {
  display: inherit;
}
```

Una vez que la aplicación se ha cargado totalmente, la clase `loaded` se agrega a la etiqueta `<body>`.

¡¡¡Y así funciona todo!!!

# Empezando

## Instalación

```
npm install -D @scullyio/scully-plugin-flash-prevention
```

## Uso

Añada el postRenderer a tu scully.config:

```typescript
// Añada esta línea a tus imports
import  { getFlashPreventionPlugin }  from '@scullyio/scully-plugin-flash-prevention';

// Añada lo siguiente a tu `scully.config.postRenderers`
exports.config = {
  ...
  postRenderers : [getFlashPreventionPlugin({appRootSelector: 'custom-app-root'})],
  ...
}
```

Solo necesitas pasar el `{appRootSelector: 'custom-app-root'}` si su aplicación tiene un selector distinto a `app-root`. Está predeterminado en `app-root`.

Actualice `app.module` para añadir `alwaysMonitor` en la llamada `ScullyLibModule.forRoot`.

```typescript
ScullyLibModule.forRoot({
  useTransferState: true,
  alwaysMonitor: true,  <-- Añada esta línea a su `app.module.ts`
});
```

Aplique también cualquier estilo desde `app-root` a `app-root-scully`. Cualquier estilo que esté en su `app.component.(css|scss|less)` debe aplicarse a la copia que se hizo de su aplicación. Esto significa que posiblemente necesite mover cualquier estilo que se aplique a `app-root` específicamente, y colocarlo en una ubicación donde también pueda hacer que esos estilos se apliquen a `app-root-scully`. Observe el ejemplo:

```css
// BEFORE
app-root {
  ... some styles;
}

// AFTER
app-root,
app-root-scully {
  ... some styles;
}
```
