[@jderjs/hono](../../README.md) / [Response](../README.md) / createJsonResponse

# Function: createJsonResponse()

```ts
function createJsonResponse(options?): Response;
```

Defined in: package/src/response/json.ts:93

Create a JSON response.

### Examples

Example for creating a successful JSON response without data:

```ts
import { createJsonResponse } from "@jderjs/hono";

const route = (): Response => {
    return createJsonResponse();
};
```

Example for creating a successful JSON response with data:

```ts
import { createJsonResponse } from "@jderjs/hono";

const route = (): Response => {
    return createJsonResponse({
        data: "Hello, World!",
    });
}
```

Example for creating a failed JSON response:

```ts
import { createJsonResponse } from "@jderjs/hono";

const route = (): Response => {
    return createJsonResponse({
        success: false,
        error: {
            code: "server",
            message: "Internal server error",
        },
    });
};
```

Example for merging context response:

```ts
import type { Context } from "hono";

import { setCookie } from "hono/cookie";
import { createJsonResponse } from "@jderjs/hono";

const route = (context: Context): Response => {
    setCookie(context, "key", "value");

    return createJsonResponse({
        context,
    });
}
```

## Parameters

### options?

[`CreateJsonResponseOptions`](../type-aliases/CreateJsonResponseOptions.md)

## Returns

`Response`
