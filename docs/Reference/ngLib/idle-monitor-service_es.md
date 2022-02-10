---
title: IdleMonitorService
published: true
lang: es
position: 100
---

# `IdleMonitorService`

<div class="docs-link_table">
  <a class="view-in-repo" href="https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/idleMonitor/idle-monitor.service.ts"></a>
</div>

## Visión General

El [`IdleMonitorService`](https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/idleMonitor/idle-monitor.service.ts) se conecta a Zonejs. Está ubicado en [`ScullyLibModule`](https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/scully-lib.module.ts).

Cuando Angular queda libre **(más precisamente, cuando todas las peticiones HTTP han finalizado)** Scully dispara Puppeteer para saber cuando está listo para el renderizado.

Si su contenido se carga fuera de las zonas, Scully recorre la página antes de que esté lista.

## Agregando mecanismos personalizados

Para desabilitas los mecanismo de finalizado de Scully y agregar uno personalizado, agrega la siguiente configuración dentro de `forRoot`:

```typescript
ScullyLibModule.forRoot({
  useTransferState: true,
  alwaysMonitor: false,
  manualIdle: true
});
```

Esto causará que Scully retrace su renderizado en 25 segundos antes de cada página renredizada.

Luego en tu componente agrega `fireManualMyAppReadyEvent()`

```typescript
export class ManualIdleComponent implements OnInit {
  text = 'this text is displayed by automated detection';

  constructor(private ims: IdleMonitorService) {}

  ngOnInit(): void {
    setTimeout(() => (this.text = '__ManualIdle__'), 3 * 1000);
    setTimeout(() => this.ims.fireManualMyAppReadyEvent(), 3.25 * 1000);
  }
}
```

Para habilitar esto para una sóla rita, agrega `manualIdle: true` dentro del archivo `config.ts` en la configuración de rutas:

```typescript
// scully.config.ts
export const config: ScullyConfig = {
  routes: {
    '/user/:userId': {
      type: 'json',
      // Add the following to your route
      exposeToPage:{
        manualIdle: true
      }
      userId: {
        url: 'http://localhost:8200/users',
        property: 'id'
      }
    }
  }
};
```
