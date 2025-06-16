[@jderjs/hono](../../README.md) / [response](../README.md) / createJsonResponse

# Function: createJsonResponse()

## Call Signature

```ts
function createJsonResponse<D>(options?): Response;
```

Defined in: [packages/hono/src/response/json/index.ts:65](https://github.com/jder-std/hono/blob/8c7789aedbc9936c4862cd649747186bca01fdb1/packages/hono/src/response/json/index.ts#L65)

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

### Type Parameters

#### D

`D` = `unknown`

### Parameters

#### options?

[`CreateJsonResponseOptions`](../type-aliases/CreateJsonResponseOptions.md)\<`D`\>

### Returns

`Response`

## Call Signature

```ts
function createJsonResponse<D>(context?, options?): Response;
```

Defined in: [packages/hono/src/response/json/index.ts:118](https://github.com/jder-std/hono/blob/8c7789aedbc9936c4862cd649747186bca01fdb1/packages/hono/src/response/json/index.ts#L118)

Create a JSON response with context.

### Examples

Example for creating a successful JSON response without data:

```ts
import type { Context } from "hono";

import { createJsonResponse } from "@jderjs/hono";

const route = (c: Context): Response => {
    return createJsonResponse(c);
};
```

Example for creating a successful JSON response with data:

```ts
import type { Context } from "hono";

import { createJsonResponse } from "@jderjs/hono";

const route = (c: Context): Response => {
    return createJsonResponse(c, {
        data: "Hello, World!",
    });
}
```

Example for creating a failed JSON response:

```ts
import type { Context } from "hono";

import { createJsonResponse } from "@jderjs/hono";

const route = (c: Context): Response => {
    return createJsonResponse(c, {
        success: false,
        error: {
            code: "server",
            message: "Internal server error",
        },
    });
};
```

### Type Parameters

#### D

`D` = `unknown`

### Parameters

#### context?

`Context`\<`any`, `any`, \{
\}\>

#### options?

[`CreateJsonResponseOptions`](../type-aliases/CreateJsonResponseOptions.md)\<`D`\>

### Returns

`Response`
