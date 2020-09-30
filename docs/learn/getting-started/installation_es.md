---
lang: es
position: 20
published: true
title: Instalación
---

# Instalación

Agregar Scully a tu proyecto es muy simple con el siguiente comando:

```bash
ng add @scullyio/init
```

Si estás utilizando un entorno `NX` vanilla (no Angular)

```bash
npm install @scullyio/init
nx g @scullyio/init:install -- --project=<projectName>
```

**NOTA**: Después de la instalación, si estás ejecutando el servidor de Angular durante la instalación, necesitarás reiniciar el servidor con `ng serve`.

El comando `ng add @scullyio/init` ejecutará nuestro schematic `init` que hará todos los cambios necesarios en el proyecto Angular, no tiene que preocuparte por un proceso largo de configuración.

El comando anterior crea un archivo de configuración para Scully llamado `scully.<projectName>.config.ts`, dónde la propiedad `projectName` es el nombre del proyecto Angular.
Este archivo luce así:

```typescript
import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: '<projectName>',
  outDir: './dist/static',
  routes: {},
};
```

!Incluso con esta configuración básica, puedes compilar la aplicación Angular utilizando Scully por primera vez!

**NOTA**: Es importante saber que cualquier ruta del proyecto Angular que contiene parámetros no será pre-renderizada hasta que modifiques la configuración de arriba para esos parámetros.

El [Plugin JSON](/docs/Reference/plugins/built-in-plugins/json) es un ejemplo de cómo configurar los parámetros de las rutas con Scully.

---

### Pre-Requisitos WSL

WLS es un subsistema de Linux en Windows, por lo tanto, no se incluye en el paquete de instalación, pero Puppeteer necesita que se instale Chrome junto con el subsistema

```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb
```

---

### Configurando WSL Scully

Una vez que Chrome se haya instaldo junto con el subsistema, vamos a configurar pupperteer para soportarlo. Esto lo haremos con la siguiente configuración.

`scully.{{your-project}}.config.ts`

```typescript
export const config: ScullyConfig = {
  ...
    puppeteerLaunchOptions: {
      args: [
        "--disable-gpu",
        "--renderer",
        "--no-sandbox",
        "--no-service-autorun",
        "--no-experiments",
        "--no-default-browser-check",
        "--disable-dev-shm-usage",
        "--disable-setuid-sandbox",
        "--no-first-run",
        "--no-zygote",
        "--single-process",
        "--disable-extensions"
      ]
    }
  ...
}
```
