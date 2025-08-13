[@jderjs/hono](../../../README.md) / [middlewares/body-limit](../README.md) / BodyLimitOptions

# Type Alias: BodyLimitOptions

```ts
type BodyLimitOptions = object;
```

Defined in: [packages/hono/src/middlewares/body-limit.ts:16](https://github.com/jder-std/hono/blob/f2f73ec679525d06b67f906feb4542e6a1926d67/packages/hono/src/middlewares/body-limit.ts#L16)

Options for `bodyLimit` middleware.

## Properties

### max?

```ts
optional max: number;
```

Defined in: [packages/hono/src/middlewares/body-limit.ts:22](https://github.com/jder-std/hono/blob/f2f73ec679525d06b67f906feb4542e6a1926d67/packages/hono/src/middlewares/body-limit.ts#L22)

Maximum body size in bytes.

By default, it is `BODY_LIMIT_MAX_DEFAULT`.
