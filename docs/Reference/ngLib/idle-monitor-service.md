---
title: IdleMonitorService
published: true
lang: en
position: 100
---

# `IdleMonitorService`

<div class="docs-link_table">
  <a class="view-in-repo" href="https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/idleMonitor/idle-monitor.service.ts"></a>
</div>

## Overview

The [`IdleMonitorService`](https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/idleMonitor/idle-monitor.service.ts) hooks into Zonejs. It is located in the [`ScullyLibModule`](https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/scully-lib.module.ts).

When Angular goes idle **(more precisely, when all outgoing HTTP requests finish)** Scully triggers Puppeteer in order to know when it is ready to render.

If your content is loaded out of sight of zones, Scully scrapes the page before its ready.

## Adding Custom Mechanisms

To disable Scully's ready mechanism and add a custom mechanism, put following config object in the `forRoot` config:

```typescript
ScullyLibModule.forRoot({
  useTransferState: true,
  alwaysMonitor: false,
  manualIdle: true,
});
```

This will cause Scully to fall-back to using a 25 second timeout, on every page rendered.

Then in your component, trigger the `fireManualMyAppReadyEvent()`

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

To enable this for a single route, provide `manualIdle: true` inside the `config.ts` file in the route configuration:

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
