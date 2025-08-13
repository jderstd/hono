[@jderjs/hono](../../README.md) / [response](../README.md) / CreateResponseOptions

# Type Alias: CreateResponseOptions\<B\>

```ts
type CreateResponseOptions<B> = Format<object & Omit<CreateResponseStructOptions<B>, "status">>;
```

Defined in: [packages/hono/src/response/common/index.ts:11](https://github.com/jder-std/hono/blob/01862dd14cf5ece98bd31b99c1c68a3917cc5868/packages/hono/src/response/common/index.ts#L11)

Options of `createResponse` function.

## Type Parameters

### B

`B` *extends* `BodyInit` = `BodyInit`
