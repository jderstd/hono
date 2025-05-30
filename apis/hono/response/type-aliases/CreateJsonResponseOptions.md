[@jderjs/hono](../../README.md) / [response](../README.md) / CreateJsonResponseOptions

# Type Alias: CreateJsonResponseOptions\<D\>

```ts
type CreateJsonResponseOptions<D> = Format<object & Omit<CreateJsonResponseStructOptions<D>, "status">>;
```

Defined in: [packages/hono/src/response/json.ts:12](https://github.com/jder-std/hono/blob/b92633c59fa9113163147663f444d9cb8b0bae4a/packages/hono/src/response/json.ts#L12)

Options of `createJsonResponse` function.

## Type Parameters

### D

`D` = `unknown`
