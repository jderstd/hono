[@jderstd/hono](../../../README.md) / [middlewares/time-limit](../README.md) / TimeLimitOptions

# Type Alias: TimeLimitOptions

```ts
type TimeLimitOptions = object;
```

Defined in: [packages/hono/src/middlewares/time-limit.ts:19](https://github.com/jderstd/hono/blob/e78a7cccf8faae59184755c92cfae98b637d9a2f/packages/hono/src/middlewares/time-limit.ts#L19)

Options for `timeLimit` middleware.

## Properties

### max?

```ts
optional max: number;
```

Defined in: [packages/hono/src/middlewares/time-limit.ts:25](https://github.com/jderstd/hono/blob/e78a7cccf8faae59184755c92cfae98b637d9a2f/packages/hono/src/middlewares/time-limit.ts#L25)

Maximum time in milliseconds.

By default, it is `TIME_LIMIT_MAX_DEFAULT`.
