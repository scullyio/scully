---
lang: es
position: 100
title: Opciones en línea de comandos
---

# Opciones en línea de comandos

#### serve

```bash
npx scully serve
```

Ejecuta el servidor de Scully. Este proceso no _compila_ el proyecto. Sólo levanta los archivos compilados de Angular y los archivos estáticos de Scully.

#### watch

```bash
npx scully --watch
```

Por defecto, Scully tiene el watchMode en falso. Necesitas agregarle este parámetros para usar el watchMode.

#### showBrowser

```bash
npx scully --showBrowser
```

Alias `--sb`. El navegador Chromium renderiza la aplicación.

#### showGuessError

```bash
npx scully --showGuessError
```

Alias `--sge`. Muestra los errores en la consola

#### project

```bash
npx scully --project someName
```

Alias `--pr`. Usalo para seleccionar un proyecto diferente. Sculle usa por defecto el proyecto generado por Angular Cli.

#### configFile

```bash
npx scully --configFile someName
```

Alias `--cf`. Carga un archivo de configuración diferente. Si se utiliza al mismo tiempo que `--project`, el parámetro project tiene prioridad.

#### baseFilter

```bash
npx scully --baseFilter="/someRoute*"
```

Alias `--bf`. Habilita a Scully a comenzar renderizando una ruta específica. Puedes usar un string con comodines separados por `,`(coma) para filtrar las rutas no controladas.

#### proxyConfig

Alias `--proxy`. Toma el nombre del archivo relativo a un archivo de configuración de un proxy.

Para mas detalles visitaFor [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware).

Scully usa el mismo formato de configuración que [webpackDevServer](https://webpack.js.org/configuration/dev-server/#devserverproxy).

#### removeStaticDist

```bash
npx scully --removeStaticDist
```

Alias `--RSD`. Elimina las carpetas estáticas generadas por Scully en la renderición anterior.

#### open

```bash
npx scully serve/watch --open
```

Alias `--o`. Abre el navegador por defecto y renderiza la carpeta dist generada por Scully.

#### scanRoutes

```bash
npx scully --scanRoutes
```

Alias `--sr` or `--scan`. Escanea la aplicación de nuevo para encontrar rutas no manejadas. Normalmente con una vez es suficiente. Cuando las rutas de una aplicación son modificadas o agregadas, utiliza este parámetro para descubrir las nuevas rutas.

#### ssl

```bash
npx scully serve/watch --ssl
```

Ejecuta el servidor de Scully con SSL.

#### ssl-cert

```bash
npx scully serve/watch --ssl --ssl-cert=./url/to/file
```

Agrega a la url el archivo del certificado SSL para un servidor con SSL.

#### ssl-key

```bash
npx scully serve/watch --ssl --ssl-key=./url/to/file
```

Agrega a la url un archivo con la clave SSL para un servidor con SSL.

#### tds

```bash
npx scully --tds
```

Ejecuta el Test Data Server. Esto es útil para demostraciones.

La siguiente API es soportadas sobre test data server:

| API            | devuelve                                          |
| -------------- | ------------------------------------------------- |
| `/users`       | Una lista de usuarios                             |
| `/users/:id`   | Solo un usuario por ID                            |
| `/posts`       | Una lista de artículos                            |
| `/posts/:id`   | Un artículo por ID                                |
| `/slow/:delay` | código 200 después de un retrazo en :delay (seg). |

#### pluginsError

```bash
npx scully --pluginsError=false
```

Muestra el error de un complemento pero continua el renderizado.
Si no utilizas este parámetro (true por defecto) y existe un error en un complemento, Scully terminará.

#### logSeverity

Sobreescribe el logSeverity del archivo configuración

```bash
npx scully --logSeverity=none
```

Opciones disponibles:

| opción    | resultado                                   |
| --------- | ------------------------------------------- |
| `normal`  | tood                                        |
| `warning` | Sólo advertencias y errores                 |
| `error`   | Sólo errors                                 |
| `none`    | Nada pero se creará un archivo `scully.log` |

#### noLog

```bash
npx scully --noLog
```

Alias `--nl`. No muestra ninguna información de log en la consola. Sólo lo hará con advertencias y errores. Por defecto este parámetro tiene un valor `false`.

#### routeFilter

```bash
npx scully --routeFilter="*someRoute*,/otherRoute*"
```

Alias `--rf` or `--route-filter`. Provee una cada de strings separados por , (coma) para filtrar las rutas manejadas.

#### serverTimeout

```bash
npx scully --serverTimeout 30000
```

Alias `--st`. El tiempo que Scully espera por el servidor antes de timeout (en milisegundos). Por defecto el servidor espera 10 segundos. Para proyecto grandes, puede requerirse mayor tiempo. De esta manera puedes otorgarselo.

#### pjFirst

```bash
npx scully --pjFirst
```

Alias `--pjf` or `pj-first`. Cuando el proyecto está en un mono repositorio mixto quizás necesites usar el parámetro `--pjFirst` que aparecerá dará prioridad al archivo `package.json` antes que el archivo `angular.json` para encontrar la raíz del proyecto.

#### pluginFolder

```bash
npx scully --pluginFolder="folderPath"
```

Alias `--pf` or `--plugin-folder`. Carpeta dónde scully buscará por complementos o configuraciones personalizadas (usará ts-config para compilar). Por defecto `./scully`.

#### noPrompt

```bash
npx scully --noPrompt
```

Alias `--np` or `--no-prompt`. Puedes saltear las entradas en la consola utilizando esta opcioón. Este parámetro puede ser usado para CI/CD.
