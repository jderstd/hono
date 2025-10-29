[@jderstd/hono-openapi](../README.md) / openAPIRouteHandler

# Function: openAPIRouteHandler()

```ts
function openAPIRouteHandler<E, P, I, S>(hono, options?): MiddlewareHandler<E, P, I>;
```

Defined in: node\_modules/.pnpm/hono-openapi@1.1.0\_@hono+standard-validator@0.1.5\_@standard-schema+spec@1.0.0\_hono@4.5.\_c912d6f747e7d887b41d5dfc92677410/node\_modules/hono-openapi/dist/index.d.ts:236

Route handler for OpenAPI specs

## Type Parameters

### E

`E` *extends* `Env` = `BlankEnv`

### P

`P` *extends* `string` = `string`

### I

`I` *extends* `Input` = `BlankInput`

### S

`S` *extends* `Schema` = `BlankSchema`

## Parameters

### hono

`Hono`\<`E`, `S`, `P`\>

Instance of Hono

### options?

`Partial`\<[`GenerateSpecOptions`](../type-aliases/GenerateSpecOptions.md)\>

Options for generating OpenAPI specs

## Returns

`MiddlewareHandler`\<`E`, `P`, `I`\>

Middleware handler for OpenAPI specs
