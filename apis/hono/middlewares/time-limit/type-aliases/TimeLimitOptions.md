[@jderjs/hono](../../../README.md) / [middlewares/time-limit](../README.md) / TimeLimitOptions

# Type Alias: TimeLimitOptions

```ts
type TimeLimitOptions = object;
```

Defined in: [packages/hono/src/middlewares/time-limit.ts:17](https://github.com/jder-std/hono/blob/8c7789aedbc9936c4862cd649747186bca01fdb1/packages/hono/src/middlewares/time-limit.ts#L17)

Options for `timeLimit` middleware.

## Properties

### max?

```ts
optional max: number;
```

Defined in: [packages/hono/src/middlewares/time-limit.ts:23](https://github.com/jder-std/hono/blob/8c7789aedbc9936c4862cd649747186bca01fdb1/packages/hono/src/middlewares/time-limit.ts#L23)

Maximum time in milliseconds.

By default, it is `TIME_LIMIT_MAX_DEFAULT`.
