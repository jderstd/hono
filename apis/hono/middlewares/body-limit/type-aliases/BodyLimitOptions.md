[@jderstd/hono](../../../README.md) / [middlewares/body-limit](../README.md) / BodyLimitOptions

# Type Alias: BodyLimitOptions

```ts
type BodyLimitOptions = object;
```

Defined in: [packages/hono/src/middlewares/body-limit.ts:17](https://github.com/jderstd/hono/blob/e78a7cccf8faae59184755c92cfae98b637d9a2f/packages/hono/src/middlewares/body-limit.ts#L17)

Options for `bodyLimit` middleware.

## Properties

### max?

```ts
optional max: number;
```

Defined in: [packages/hono/src/middlewares/body-limit.ts:23](https://github.com/jderstd/hono/blob/e78a7cccf8faae59184755c92cfae98b637d9a2f/packages/hono/src/middlewares/body-limit.ts#L23)

Maximum body size in bytes.

By default, it is `BODY_LIMIT_MAX_DEFAULT`.
