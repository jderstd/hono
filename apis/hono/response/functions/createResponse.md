[@jderjs/hono](../../README.md) / [response](../README.md) / createResponse

# Function: createResponse()

```ts
function createResponse(contextOrOptions?, options?): Response;
```

Defined in: [packages/hono/src/response/index.ts:71](https://github.com/jder-std/hono/blob/b92633c59fa9113163147663f444d9cb8b0bae4a/packages/hono/src/response/index.ts#L71)

Create a response.

### Examples

Example for creating a basic response:

```ts
import { createResponse } from "@jderjs/hono";

const route = (): Response => {
    return createResponse();
};
```

Example for creating a response with status, headers, and body:

```ts
import { createResponse } from "@jderjs/hono";

const route = (): Response => {
    return createResponse({
        status: 404,
        headers: [
            ["Content-Type", "text/plain"],
        ],
        body: "Not Found",
    });
};
```

Example for merging context into the response:

```ts
import type { Context } from "hono";

import { setCookie } from "hono/cookie";
import { createResponse } from "@jderjs/hono";

const route = (c: Context): Response => {
    setCookie(c, "key", "value");

    return createResponse(c);
}
```

## Parameters

### contextOrOptions?

`Context`\<`any`, `any`, \{
\}\> |

\{
`body?`: `BodyInit`;
`headers?`: `HeadersInit`;
`status?`: `StatusCode`;
\}

#### body?

`BodyInit`

Body of the response.

#### headers?

`HeadersInit`

Additional headers of the response.

#### status?

`StatusCode`

Status code of the response.
By default, it is `200` for success and `400` for failure.

### options?

#### body?

`BodyInit`

Body of the response.

#### headers?

`HeadersInit`

Additional headers of the response.

#### status?

`StatusCode`

Status code of the response.
By default, it is `200` for success and `400` for failure.

## Returns

`Response`
