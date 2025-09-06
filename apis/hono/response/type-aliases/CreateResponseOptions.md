[@jderjs/hono](../../README.md) / [response](../README.md) / CreateResponseOptions

# Type Alias: CreateResponseOptions\<B\>

```ts
type CreateResponseOptions<B> = Format<object & Omit<CreateResponseStructOptions<B>, "status">>;
```

Defined in: [packages/hono/src/response/common/index.ts:11](https://github.com/jder-std/hono/blob/872dc1d70f22f648234b4b8c3c6c018dd305b504/packages/hono/src/response/common/index.ts#L11)

Options of `createResponse` function.

## Type Parameters

### B

`B` *extends* `BodyInit` = `BodyInit`
