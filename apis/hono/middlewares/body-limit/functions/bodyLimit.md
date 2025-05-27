[@jderjs/hono](../../../README.md) / [middlewares/body-limit](../README.md) / bodyLimit

# Function: bodyLimit()

```ts
function bodyLimit(options): MiddlewareHandler;
```

Defined in: [packages/hono/src/middlewares/body-limit.ts:52](https://github.com/jder-std/hono/blob/2842c6d10ee2eb6a69808b60fa37fe11e9b4b2af/packages/hono/src/middlewares/body-limit.ts#L52)

Body limit middleware.

Following error will be returned if the body size is over the limit:

```jsonc
// Status: 413
{
    "success": false,
    "error": {
        "code": "too_large",
        "field": "body"
    }
}
```

For more information, please refer to
[Body Limit](https://hono.dev/docs/middleware/builtin/body-limit).

### Example

```ts
import { Hono } from "hono";
import { bodyLimit } from "@jderjs/hono/body-limit";

const app: Hono = new Hono();

app.use(
    bodyLimit({
        max: 10 * 1024 * 1024, // 10MiB
    })
);
```

## Parameters

### options

[`BodyLimitOptions`](../type-aliases/BodyLimitOptions.md)

## Returns

`MiddlewareHandler`
