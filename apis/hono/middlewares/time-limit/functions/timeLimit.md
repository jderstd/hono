[@jderjs/hono](../../../README.md) / [middlewares/time-limit](../README.md) / timeLimit

# Function: timeLimit()

```ts
function timeLimit(options?): MiddlewareHandler;
```

Defined in: [packages/hono/src/middlewares/time-limit.ts:74](https://github.com/jder-std/hono/blob/56d61bd209450892d9e6b8763edeae6b0994ecaf/packages/hono/src/middlewares/time-limit.ts#L74)

Time limit middleware.

Following error will be returned if the request takes longer than the limit:

```jsonc
// Status: 408
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
import { timeLimit } from "@jderjs/hono/time-limit";

const app: Hono = new Hono();

app.use(timeLimit());
```

A example of using `timeLimit` middleware with options:

```ts
import { Hono } from "hono";
import { timeLimit } from "@jderjs/hono/time-limit";

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
