[@jderstd/hono](../../README.md) / [response](../README.md) / CreateJsonResponseOptions

# Type Alias: CreateJsonResponseOptions\<D\>

```ts
type CreateJsonResponseOptions<D> = Format<object & Omit<CreateJsonResponseStructOptions<D>, "status">>;
```

Defined in: [packages/hono/src/response/json/index.ts:12](https://github.com/jderstd/hono/blob/f5b12e262138ddfb5fccdd78e3274b708c2b86c1/packages/hono/src/response/json/index.ts#L12)

Options of `createJsonResponse` function.

## Type Parameters

### D

`D` = `unknown`
