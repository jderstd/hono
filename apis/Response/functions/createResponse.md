[@jderjs/hono](../../README.md) / [Response](../README.md) / createResponse

# Function: createResponse()

```ts
function createResponse(options?): Response;
```

Defined in: package/src/response/index.ts:86

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

Example for merging context response:

```ts
import type { Context } from "hono";

import { setCookie } from "hono/cookie";
import { createResponse } from "@jderjs/hono";

const route = (context: Context): Response => {
    setCookie(context, "key", "value");

    return createResponse({
        context,
    });
}
```

## Parameters

### options?

#### body?

`BodyInit`

Body of the response.

#### c?

`Context`\<`any`, `any`, \{
\}\>

Alias of `context`.

#### context?

`Context`\<`any`, `any`, \{
\}\>

For merging context.

Both `c` and `ctx` available as alias of `context`.

#### ctx?

`Context`\<`any`, `any`, \{
\}\>

Alias of `context`.

#### headers?

`HeadersInit`

Additional headers of the response.

#### status?

`StatusCode`

Status code of the response.
By default, it is `200` for success and `400` for failure.

## Returns

`Response`
