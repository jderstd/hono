[@jderjs/hono](../../README.md) / [ip-limit](../README.md) / ipLimit

# Function: ipLimit()

```ts
function ipLimit(options): MiddlewareHandler;
```

Defined in: packages/hono/src/middlewares/ip-limit.ts:65

IP limit middleware.

For more information, please refer to
[IP Restriction](https://hono.dev/docs/middleware/builtin/ip-restriction).

For `getConnInfo`, please refer to
[ConnInfo helper](https://hono.dev/docs/helpers/conninfo).

### Example

```ts
import { Hono } from "hono";
import { ipLimit } from "@jderjs/hono/ip-limit";

// getConnInfo helper for Node.js
import { getConnInfo } from "@hono/node-server/conninfo";

const app: Hono = new Hono();

app.use(
    ipLimit({
        getConnInfo,
        allowList: [],
        denyList: [],
    })
);
```

## Parameters

### options

[`IpLimitOptions`](../type-aliases/IpLimitOptions.md)

## Returns

`MiddlewareHandler`
