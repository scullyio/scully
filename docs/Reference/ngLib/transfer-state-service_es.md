---
title: TransferStateService
published: true
lang: es
position: 100
---

# `TransferStateService`

<div class="docs-link_table">
  <a class="view-in-repo" href="https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/transfer-state/transfer-state.service.ts"></a>
</div>

## Visión General

El servicio [`TransferStateService`](https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/transfer-state/transfer-state.service.ts) permite transferir el estado de una aplicación Angular a un sitio estático creado por Scully.

Además, le permite cargar el estado en cambios de ruta posteriores a la carga de la página inicial.

Un cambio de rutas obtiene el estado de la siguiente página desde el servidor, y es devuelto al cliente. Por lo tanto, tener el estado consumido como parte de la compilación a pesar de cualquier contenido de CMS en producción.

## Us

Para obtener y establecer el estado de la aplicación, use los métodos `getState` y `setState` que siguen:

#### `getState()`

Este método devuelve un observable que se dispara una sóla ves y luego se completa. Se ejecuta una vez que la navegación entre páginas haya finalizado.

```typescript
getState<T>(name: string): Observable<T>
```

#### `setState()`

Este método estabelce los valores para un clave.

```typescript
setState<T>(name: string, val: T): void;
```
