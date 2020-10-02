---
lang: es
position: 100
published: true
title: Complementos
---

# Complementos de Scully.

Esta es una visión general sobre los complementos. Para más detalles visita la [sección complementos](/docs/Reference/plugins/overview.md) en la referencia.

## Sobre los complementos.

Para hacer posible la expansión y adaptabilidad a todos los ambientes de trabajo y aplicaciones modernas tenemos un sistema de complementos en Scully. Esto hace posible adaptarlo a _todo_ tipo de situaciones.

Actualmente hay 7 tipos de complementos en Scully. Todos adhieren a la misma interfaz básica:


```typescript
interface plugin {
  (...parameters:any) => Promise<unknown>
}
```

Esto significa que un complemento es una función que retorna una promesa, o una función asíncrona. Si un complemento dispara una excepción, o retorna una promesa cancelada, Scully devolverá un error o advertencia como un log en la pantalla y detendrá toda execución. (al menos que haya una configuración que permita ignorar y continuar)
