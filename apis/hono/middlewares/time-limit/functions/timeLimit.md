[@jderjs/hono](../../../README.md) / [middlewares/time-limit](../README.md) / timeLimit

# Function: timeLimit()

```ts
function timeLimit(options?): MiddlewareHandler;
```

Defined in: [packages/hono/src/middlewares/time-limit.ts:70](https://github.com/jder-std/hono/blob/206880bc1e845cf7bddf84d4b8c9af705bc6e006/packages/hono/src/middlewares/time-limit.ts#L70)

Time limit middleware.

Following error will be returned if the request takes longer than the limit:

```jsonc
// Status: 408
{
    "success": false,
    "error": {
        "code": "timeout"
    }
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
