[@jderjs/hono](../../../README.md) / [middlewares/body-limit](../README.md) / BodyLimitOptions

# Type Alias: BodyLimitOptions

```ts
type BodyLimitOptions = object;
```

Defined in: [packages/hono/src/middlewares/body-limit.ts:17](https://github.com/jder-std/hono/blob/872dc1d70f22f648234b4b8c3c6c018dd305b504/packages/hono/src/middlewares/body-limit.ts#L17)

Options for `bodyLimit` middleware.

## Properties

### max?

```ts
optional max: number;
```

Defined in: [packages/hono/src/middlewares/body-limit.ts:23](https://github.com/jder-std/hono/blob/872dc1d70f22f648234b4b8c3c6c018dd305b504/packages/hono/src/middlewares/body-limit.ts#L23)

Maximum body size in bytes.

By default, it is `BODY_LIMIT_MAX_DEFAULT`.
