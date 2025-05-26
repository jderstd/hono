[@jderjs/hono](../../../README.md) / [middlewares/ip-limit](../README.md) / ipLimit

# Function: ipLimit()

```ts
function ipLimit(options): MiddlewareHandler;
```

Defined in: [packages/hono/src/middlewares/ip-limit.ts:91](https://github.com/jder-std/hono/blob/7823dd7a59aeab0be6398df9a9afa170aec0fb84/packages/hono/src/middlewares/ip-limit.ts#L91)

IP limit middleware.

Following error will be returned if the IP address is not allowed:

```jsonc
// Status: 403
{
    "success": false,
    "error": {
        "code": "forbidden"
    }
}
```

When `verbose` is `true`, the error will be like:

```jsonc
// Status: 403
{
    "success": false,
    "error": {
        "code": "forbidden",
        "field": "ip",
        "message": "Forbidden IP address: x.x.x.x"
    }
}
```

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
