[@jderjs/hono](../../README.md) / [response](../README.md) / CreateResponseOptions

# Type Alias: CreateResponseOptions\<B\>

```ts
type CreateResponseOptions<B> = Format<object & Omit<CreateResponseStructOptions<B>, "status">>;
```

Defined in: [packages/hono/src/response/common/index.ts:11](https://github.com/jder-std/hono/blob/f2f73ec679525d06b67f906feb4542e6a1926d67/packages/hono/src/response/common/index.ts#L11)

Options of `createResponse` function.

## Type Parameters

### B

`B` *extends* `BodyInit` = `BodyInit`
