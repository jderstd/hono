[@jderstd/hono](../../../README.md) / [handlers/not-found](../README.md) / notFoundHandler

# Function: notFoundHandler()

```ts
function notFoundHandler(): (c) => Response;
```

Defined in: [packages/hono/src/handlers/not-found.ts:40](https://github.com/jderstd/hono/blob/9b33b7a2db9d95365aa7ce18087da7a31e14229a/packages/hono/src/handlers/not-found.ts#L40)

Not found handler.

Following response will be returned on route not found:

```jsonc
// Status: 404
{
    "success": false,
    "errors": [
        {
            "code": "not_found",
            "message": "Content not found"
        }
    ]
}
```

### Example

```ts
import { Hono } from "hono";
import { notFoundHandler } from "@jderstd/hono/not-found";

const app: Hono = new Hono();

app.notFound(notFoundHandler());
```

## Returns

```ts
(c): Response;
```

### Parameters

#### c

`Context`

### Returns

`Response`
