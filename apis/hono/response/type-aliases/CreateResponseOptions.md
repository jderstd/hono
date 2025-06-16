[@jderjs/hono](../../README.md) / [response](../README.md) / CreateResponseOptions

# Type Alias: CreateResponseOptions\<B\>

```ts
type CreateResponseOptions<B> = Format<object & Omit<CreateResponseStructOptions<B>, "status">>;
```

Defined in: [packages/hono/src/response/common/index.ts:10](https://github.com/jder-std/hono/blob/8c7789aedbc9936c4862cd649747186bca01fdb1/packages/hono/src/response/common/index.ts#L10)

Options of `createResponse` function.

## Type Parameters

### B

`B` *extends* `BodyInit` = `BodyInit`
