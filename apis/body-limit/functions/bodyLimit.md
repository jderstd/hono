[@jderjs/hono](../../README.md) / [body-limit](../README.md) / bodyLimit

# Function: bodyLimit()

```ts
function bodyLimit(options): MiddlewareHandler;
```

Defined in: [package/src/middlewares/body-limit.ts:39](https://github.com/jder-std/hono/blob/74d7763c44e1d14d82209dadd03223da473b2ce4/package/src/middlewares/body-limit.ts#L39)

Body limit middleware.

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
