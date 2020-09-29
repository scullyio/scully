---
title: Configuración mínima requerida
published: true
lang: es
position: 90
---

# Configuración mínima requerida

Necesitas un proyecto Angular (nuevo o existente) que posea el router instalado.

## Versiones mínimas necesarias.

- Vensiones de Angular: **v9.x.x** o **v10.x.x**
- Node.js: **12** o más nueva.

**IMPORTANTE:** _Scully usa Chromium. por lo tanto, debe tener permisos de Administrador en tu Sistema Operativo para la instalación y ejecución._

## Agregar el Router

Tu projecto Angular necesita al menos una ruta configurada.

**IMPORTANTE:** _Scully depende del módulo router para generar las páginas estáticas_

Si tu aplicación no tiene includo el router, puede agregarlo con el siguiente comando:

```bash
ng generate module app-routing --flat --module=app
```

Si quieres agregar la carga de las rutas en modo lazy, puedes hacerlo con el siguiente comando:

```bash
ng generate module home --route home --module app
```

Si tu aplicación cumple con los requerimientos, puede continuar con la instalación de Scully.
