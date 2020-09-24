---
title: create scully files with ng add
published: true
lang: en
position: 100
---

# Create scully files with ng add

Scully provides a schematic for creating and modifying an existing Angular project.

This schematic, creates and runs everything your angular app needs to support Scully.

For Angular cli workspaces:

```bash
ng add @scully/init
```

For Angular NX project:

```bash
ng add @scully/init --project=<PROJECT-NAME>
```

For vanilla NX project:

```bash
npm install @scullyio/init
nx g @scullyio/init:install -- --project=<projectName>
```
