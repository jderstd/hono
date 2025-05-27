[@jderjs/hono](../../README.md) / [response](../README.md) / CreateJsonResponseOptions

# Type Alias: CreateJsonResponseOptions\<D\>

```ts
type CreateJsonResponseOptions<D> = Format<object & Omit<CreateJsonResponseStructOptions<D>, "status">>;
```

Defined in: [packages/hono/src/response/json.ts:12](https://github.com/jder-std/hono/blob/2842c6d10ee2eb6a69808b60fa37fe11e9b4b2af/packages/hono/src/response/json.ts#L12)

Options of `createJsonResponse` function.

## Type Parameters

### D

`D` = `unknown`
