[@jderjs/hono](../../README.md) / [time-limit](../README.md) / timeLimit

# Function: timeLimit()

```ts
function timeLimit(options): MiddlewareHandler;
```

Defined in: package/src/middlewares/time-limit.ts:40

Time limit middleware.

For more information, please refer to
[Timeout](https://hono.dev/docs/middleware/builtin/timeout).

### Example

```ts
import { Hono } from "hono";
import { timeLimit } from "@jderjs/hono/time-limit";

const app: Hono = new Hono();

app.use(
    timeLimit({
        max: 10 * 1000, // 10s
    })
);
```

## Parameters

### options

[`TimeLimitOptions`](../type-aliases/TimeLimitOptions.md)

## Returns

`MiddlewareHandler`
