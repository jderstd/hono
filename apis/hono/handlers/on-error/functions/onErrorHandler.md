[@jderstd/hono](../../../README.md) / [handlers/on-error](../README.md) / onErrorHandler

# Function: onErrorHandler()

```ts
function onErrorHandler(options?): (err, c) => Response;
```

Defined in: [packages/hono/src/handlers/on-error.ts:78](https://github.com/jderstd/hono/blob/ba30227bcc4bce6293ba3d93b1a6b057cd7c8a51/packages/hono/src/handlers/on-error.ts#L78)

On error handler.

Following responses could be returned on error:

```jsonc
// Status: 400
{
    "success": false,
    "errors": [
        {
            "code": "bad_request"
        }
    ]
}
```

```jsonc
// Status: 500
{
    "success": false,
    "errors": [
        {
            "code": "server"
        }
    ]
}
```

### Examples

Basic example of using `onErrorHandler` handler:

```ts
import { Hono } from "hono";
import { onErrorHandler } from "@jderstd/hono/on-error";

const app: Hono = new Hono();

app.onError(onErrorHandler());
```

Show more information with `verbose` option:

```ts
import { Hono } from "hono";
import { onErrorHandler } from "@jderstd/hono/on-error";

const app: Hono = new Hono();

app.onError(onErrorHandler({ verbose: true }));
```

## Parameters

### options?

[`OnErrorHandlerOptions`](../type-aliases/OnErrorHandlerOptions.md)

## Returns

```ts
(err, c): Response;
```

### Parameters

#### err

`Error` | `HTTPResponseError`

#### c

`Context`

### Returns

`Response`
