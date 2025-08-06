[@jderjs/hono](../../../README.md) / [middlewares/body-limit](../README.md) / bodyLimit

# Function: bodyLimit()

```ts
function bodyLimit(options?): MiddlewareHandler;
```

Defined in: [packages/hono/src/middlewares/body-limit.ts:70](https://github.com/jder-std/hono/blob/206880bc1e845cf7bddf84d4b8c9af705bc6e006/packages/hono/src/middlewares/body-limit.ts#L70)

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

### Examples

A example of using `bodyLimit` middleware:

```ts
import { Hono } from "hono";
import { bodyLimit } from "@jderjs/hono/body-limit";

const app: Hono = new Hono();

app.use(bodyLimit());
```

A example of using `bodyLimit` middleware with options:

```ts
import { Hono } from "hono";
import { bodyLimit } from "@jderjs/hono/body-limit";

const app: Hono = new Hono();

app.use(bodyLimit({
    max: 20 * 1024 * 1024, // 20MiB
}));
```

## Parameters

### options?

[`BodyLimitOptions`](../type-aliases/BodyLimitOptions.md)

## Returns

`MiddlewareHandler`
