[@jderjs/hono](../../README.md) / [response](../README.md) / CreateJsonResponseOptions

# Type Alias: CreateJsonResponseOptions\<D\>

```ts
type CreateJsonResponseOptions<D> = Format<object & Omit<CreateJsonResponseStructOptions<D>, "status">>;
```

Defined in: [packages/hono/src/response/json/index.ts:12](https://github.com/jder-std/hono/blob/8c7789aedbc9936c4862cd649747186bca01fdb1/packages/hono/src/response/json/index.ts#L12)

Options of `createJsonResponse` function.

## Type Parameters

### D

`D` = `unknown`
