---
title: create scully files with ng add
published: true
lang: en
position: 100
---

# create scully files with ng add

Scully have a schematics for create and modify an Existing Angular project.

This Schematics, create and run all your angular app need for support Scully.

For angular cli workspaces:

```bash
ng add @scully/init
```

For angular NX project:

```bash
ng add @scully/init --project=<PROJECT-NAME>
```

For vanilla NX project:

```bash
npm install @scullyio/init
nx g @scullyio/init:install -- --project=<projectName>
```
