[@jderjs/hono](../../../README.md) / [middlewares/time-limit](../README.md) / timeLimit

# Function: timeLimit()

```ts
function timeLimit(options): MiddlewareHandler;
```

Defined in: [packages/hono/src/middlewares/time-limit.ts:52](https://github.com/jder-std/hono/blob/b92633c59fa9113163147663f444d9cb8b0bae4a/packages/hono/src/middlewares/time-limit.ts#L52)

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
