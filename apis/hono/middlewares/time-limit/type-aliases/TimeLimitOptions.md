[@jderjs/hono](../../../README.md) / [middlewares/time-limit](../README.md) / TimeLimitOptions

# Type Alias: TimeLimitOptions

```ts
type TimeLimitOptions = object;
```

Defined in: [packages/hono/src/middlewares/time-limit.ts:18](https://github.com/jder-std/hono/blob/56d61bd209450892d9e6b8763edeae6b0994ecaf/packages/hono/src/middlewares/time-limit.ts#L18)

Options for `timeLimit` middleware.

## Properties

### max?

```ts
optional max: number;
```

Defined in: [packages/hono/src/middlewares/time-limit.ts:24](https://github.com/jder-std/hono/blob/56d61bd209450892d9e6b8763edeae6b0994ecaf/packages/hono/src/middlewares/time-limit.ts#L24)

Maximum time in milliseconds.

By default, it is `TIME_LIMIT_MAX_DEFAULT`.
