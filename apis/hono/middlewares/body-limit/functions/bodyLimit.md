[@jderstd/hono](../../../README.md) / [middlewares/body-limit](../README.md) / bodyLimit

# Function: bodyLimit()

```ts
function bodyLimit(options?): MiddlewareHandler;
```

Defined in: [packages/hono/src/middlewares/body-limit.ts:77](https://github.com/jderstd/hono/blob/b7289eeab79174059fbd4658ba039f0cf97c5d74/packages/hono/src/middlewares/body-limit.ts#L77)

Body limit middleware.

Following error will be returned if the body size is over the limit:

```jsonc
// Status: 413
{
    "success": false,
    "errors": [
        {
            "code": "too_large",
            "path": [
                "request",
                "body"
            ],
            "message": "Request body is too large"
        }
    ]
}
```

For more information, please refer to
[Body Limit](https://hono.dev/docs/middleware/builtin/body-limit).

### Examples

A example of using `bodyLimit` middleware:

```ts
import { Hono } from "hono";
import { bodyLimit } from "@jderstd/hono/body-limit";

const app: Hono = new Hono();

app.use(bodyLimit());
```

A example of using `bodyLimit` middleware with options:

```ts
import { Hono } from "hono";
import { bodyLimit } from "@jderstd/hono/body-limit";

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
