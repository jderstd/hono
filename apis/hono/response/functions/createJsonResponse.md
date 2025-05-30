[@jderjs/hono](../../README.md) / [response](../README.md) / createJsonResponse

# Function: createJsonResponse()

```ts
function createJsonResponse<D>(contextOrOptions?, options?): Response;
```

Defined in: [packages/hono/src/response/json.ts:79](https://github.com/jder-std/hono/blob/b92633c59fa9113163147663f444d9cb8b0bae4a/packages/hono/src/response/json.ts#L79)

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

const route = (c: Context): Response => {
    setCookie(c, "key", "value");
    return createJsonResponse(c);
}
```

## Type Parameters

### D

`D` = `unknown`

## Parameters

### contextOrOptions?

`Context`\<`any`, `any`, \{
\}\> | [`CreateJsonResponseOptions`](../type-aliases/CreateJsonResponseOptions.md)\<`D`\>

### options?

[`CreateJsonResponseOptions`](../type-aliases/CreateJsonResponseOptions.md)\<`D`\>

## Returns

`Response`
