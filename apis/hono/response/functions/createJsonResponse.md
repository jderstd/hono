[@jderstd/hono](../../README.md) / [response](../README.md) / createJsonResponse

# Function: createJsonResponse()

## Call Signature

```ts
function createJsonResponse<D>(options?): Response;
```

Defined in: [packages/hono/src/response/json/index.ts:66](https://github.com/jderstd/hono/blob/e5b2def5701d996fb4f30b7b1af1130fafe72afd/packages/hono/src/response/json/index.ts#L66)

Create a JSON response.

### Examples

Example for creating a successful JSON response without data:

```ts
import { createJsonResponse } from "@jderstd/hono/response";

const route = (): Response => {
    return createJsonResponse();
};
```

Example for creating a successful JSON response with data:

```ts
import { createJsonResponse } from "@jderstd/hono/response";

const route = (): Response => {
    return createJsonResponse({
        data: "Hello, World!",
    });
}
```

Example for creating a failed JSON response:

```ts
import { createJsonResponse } from "@jderstd/hono/response";

const route = (): Response => {
    return createJsonResponse({
        errors: [
            {
                code: "server",
                message: "Internal server error",
            },
        ],
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

Defined in: [packages/hono/src/response/json/index.ts:120](https://github.com/jderstd/hono/blob/e5b2def5701d996fb4f30b7b1af1130fafe72afd/packages/hono/src/response/json/index.ts#L120)

Create a JSON response with context.

### Examples

Example for creating a successful JSON response without data:

```ts
import type { Context } from "hono";

import { createJsonResponse } from "@jderstd/hono/response";

const route = (c: Context): Response => {
    return createJsonResponse(c);
};
```

Example for creating a successful JSON response with data:

```ts
import type { Context } from "hono";

import { createJsonResponse } from "@jderstd/hono/response";

const route = (c: Context): Response => {
    return createJsonResponse(c, {
        data: "Hello, World!",
    });
}
```

Example for creating a failed JSON response:

```ts
import type { Context } from "hono";

import { createJsonResponse } from "@jderstd/hono/response";

const route = (c: Context): Response => {
    return createJsonResponse(c, {
        errors: [
            {
                code: "server",
                message: "Internal server error",
            },
        ],
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
