[@jderjs/hono](../../README.md) / [response](../README.md) / CreateResponseOptions

# Type Alias: CreateResponseOptions\<B\>

```ts
type CreateResponseOptions<B> = Format<object & Omit<CreateResponseStructOptions<B>, "status">>;
```

Defined in: [packages/hono/src/response/common/index.ts:11](https://github.com/jder-std/hono/blob/56d61bd209450892d9e6b8763edeae6b0994ecaf/packages/hono/src/response/common/index.ts#L11)

Options of `createResponse` function.

## Type Parameters

### B

`B` *extends* `BodyInit` = `BodyInit`
