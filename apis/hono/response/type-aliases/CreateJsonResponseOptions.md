[@jderjs/hono](../../README.md) / [response](../README.md) / CreateJsonResponseOptions

# Type Alias: CreateJsonResponseOptions\<D\>

```ts
type CreateJsonResponseOptions<D> = Format<object & Omit<CreateJsonResponseStructOptions<D>, "status">>;
```

Defined in: [packages/hono/src/response/json/index.ts:12](https://github.com/jder-std/hono/blob/f2f73ec679525d06b67f906feb4542e6a1926d67/packages/hono/src/response/json/index.ts#L12)

Options of `createJsonResponse` function.

## Type Parameters

### D

`D` = `unknown`
