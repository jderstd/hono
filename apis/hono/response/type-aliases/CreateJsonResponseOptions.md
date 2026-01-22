[@jderstd/hono](../../README.md) / [response](../README.md) / CreateJsonResponseOptions

# Type Alias: CreateJsonResponseOptions\<D\>

```ts
type CreateJsonResponseOptions<D> = Format<object & Omit<CreateJsonResponseStructOptions<D>, "status">>;
```

Defined in: [packages/hono/src/response/json/index.ts:12](https://github.com/jderstd/hono/blob/ba30227bcc4bce6293ba3d93b1a6b057cd7c8a51/packages/hono/src/response/json/index.ts#L12)

Options of `createJsonResponse` function.

## Type Parameters

### D

`D` = `unknown`
