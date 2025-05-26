[@jderjs/hono](../../README.md) / [response](../README.md) / CreateJsonResponseOptions

# Type Alias: CreateJsonResponseOptions\<D\>

```ts
type CreateJsonResponseOptions<D> = Format<object & Omit<CreateJsonResponseStructOptions<D>, "status">>;
```

Defined in: [packages/hono/src/response/json.ts:12](https://github.com/jder-std/hono/blob/7823dd7a59aeab0be6398df9a9afa170aec0fb84/packages/hono/src/response/json.ts#L12)

Options of `createJsonResponse` function.

## Type Parameters

### D

`D` = `unknown`
