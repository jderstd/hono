[@jderstd/hono](../../README.md) / [response](../README.md) / CreateJsonResponseOptions

# Type Alias: CreateJsonResponseOptions\<D\>

```ts
type CreateJsonResponseOptions<D> = Format<object & Omit<CreateJsonResponseStructOptions<D>, "status">>;
```

Defined in: [packages/hono/src/response/json/index.ts:12](https://github.com/jderstd/hono/blob/10173369a7700312748d63dc86e2fdd569cbb103/packages/hono/src/response/json/index.ts#L12)

Options of `createJsonResponse` function.

## Type Parameters

### D

`D` = `unknown`
