[@jderstd/hono](../../../README.md) / [middlewares/time-limit](../README.md) / timeLimit

# Function: timeLimit()

```ts
function timeLimit(options?): MiddlewareHandler;
```

Defined in: [packages/hono/src/middlewares/time-limit.ts:75](https://github.com/jderstd/hono/blob/0375d1964ace5bd38dea6e609d38e5f00aab5022/packages/hono/src/middlewares/time-limit.ts#L75)

Time limit middleware.

Following error will be returned if the request takes longer than the limit:

```jsonc
// Status: 504
{
    "success": false,
    "errors": [
        {
            "code": "timeout",
            "message": "Request timeout"
        }
    ]
}
```

For more information, please refer to
[Timeout](https://hono.dev/docs/middleware/builtin/timeout).

### Examples

A example of using `timeLimit` middleware:

```ts
import { Hono } from "hono";
import { timeLimit } from "@jderstd/hono/time-limit";

const app: Hono = new Hono();

app.use(timeLimit());
```

A example of using `timeLimit` middleware with options:

```ts
import { Hono } from "hono";
import { timeLimit } from "@jderstd/hono/time-limit";

const app: Hono = new Hono();

app.use(timeLimit({
    max: 10 * 1000, // 10s
}));
```

## Parameters

### options?

[`TimeLimitOptions`](../type-aliases/TimeLimitOptions.md)

## Returns

`MiddlewareHandler`
