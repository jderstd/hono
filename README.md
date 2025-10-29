# JDER Hono

A response builder for Hono.

This package includes different response builders based on the JSON response structure specified in [JSON Data Errors Response (JDER)](https://github.com/jderstd/spec). With the builders, various kinds of responses can be created easily instead of sending plain text responses.

## Quick Start

To create a JSON response, use the following code:

```ts
import { createJsonResponse } from "@jderstd/hono/response";

const route = (): Response => {
    return createJsonResponse();
}
```

And the response will be shown as below:

```json
{
    "success": true
}
```

## Documentation

For Hono,
please refer to the [Hono Documentation](./docs/hono/README.md).

For standard validator,
please refer to the [Standard Validator Documentation](./docs/hono-standard-validator/README.md).

For Zod validator,
please refer to the [Zod Validator Documentation](./docs/hono-zod-validator/README.md).

For OpenAPI,
please refer to the [OpenAPI Documentation](./docs/hono-openapi/README.md).

## APIs

For Hono package APIs, 
please refer to the [Hono APIs](./apis/hono/README.md).

For standard validator package APIs, 
please refer to the [Standard Validator APIs](./apis/hono-standard-validator/README.md).

For Zod validator package APIs, 
please refer to the [Zod Validator APIs](./apis/hono-zod-validator/README.md).

For OpenAPI package APIs, 
please refer to the [OpenAPI APIs](./apis/hono-openapi/README.md).

## License

This project is licensed under the terms of the MIT license.
