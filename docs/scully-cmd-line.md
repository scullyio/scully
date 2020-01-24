# Scully command line options

Scully has the following options available:

- [Scully command line options](#scully-command-line-options)
  - [serve](#serve)
  - [showBrowser](#showbrowser)
  - [configFile](#configfile)
  - [project](#project)

## serve

```bash
npx scully serve
```

this starts the scully server helper on its own. You can use this to inspect the result from Scully, or to speed up the scully proccess a bit. it does not _build_ the project, it only serves the angular build files, and the scully result files.

## showBrowser

```bash
npx scully --showBrowser
```

Alias `--sb`. This will show the chromium browser that is rendering your application. Can be used to diagnose some issues

## configFile

```bash
npx scully --configFile someName
```

Alias `--cf`. loads a different config file. if used at the same time as `--project` the project flag takes precedence.

## project

```bash
npx scully --project someName
```

Alias `--pr`. This enables you to select a different project. Scully by default uses the project that is the default project of the Angular CLI. When you want to run for another project, you can use this option, or use the Angular CLI to set another default project.
