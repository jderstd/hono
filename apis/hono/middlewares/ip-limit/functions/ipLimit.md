[@jderjs/hono](../../../README.md) / [middlewares/ip-limit](../README.md) / ipLimit

# Function: ipLimit()

## Call Signature

```ts
function ipLimit(options): MiddlewareHandler;
```

Defined in: [packages/hono/src/middlewares/ip-limit.ts:98](https://github.com/jder-std/hono/blob/b92633c59fa9113163147663f444d9cb8b0bae4a/packages/hono/src/middlewares/ip-limit.ts#L98)

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

### Parameters

#### options

##### allowList?

[`IPRestrictionRule`](../type-aliases/IPRestrictionRule.md)[]

Allowed IP addresses.

##### denyList?

[`IPRestrictionRule`](../type-aliases/IPRestrictionRule.md)[]

Denied IP addresses.

##### getConnInfo

[`GetIPAddr`](../type-aliases/GetIPAddr.md)

Function to get IP address.

##### verbose?

`boolean`

Whether show more information.
By default, it's `false`.

### Returns

`MiddlewareHandler`

## Call Signature

```ts
function ipLimit(getConnInfo, options?): MiddlewareHandler;
```

Defined in: [packages/hono/src/middlewares/ip-limit.ts:111](https://github.com/jder-std/hono/blob/b92633c59fa9113163147663f444d9cb8b0bae4a/packages/hono/src/middlewares/ip-limit.ts#L111)

IP limit middleware for compatibility with `hono/ip-restriction`.

This is functionally equivalent to:

```ts
ipLimit({ getConnInfo, ...options });
```

And it behaves the same as the main `ipLimit` function.

### Parameters

#### getConnInfo

[`GetIPAddr`](../type-aliases/GetIPAddr.md)

#### options?

[`IpLimitBaseOptions`](../type-aliases/IpLimitBaseOptions.md)

### Returns

`MiddlewareHandler`
