# JDER Hono Zod Validator

A Zod validator for Hono.

This package includes a Zod validator based on the JSON response structure specified in [JSON Data Error Response (JDER)](https://github.com/jder-std/spec). With the validator, various kinds of requests can be validated easily and send JSON responses instead of plain text responses.

## Quick Start

To validate with Zod, use the following code:

```ts
import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@jderjs/hono-zod-validator";

const app = new Hono();

const json = z.object({
    name: z.string(),
    age: z.number(),
});

app.post("/", zValidator("json", json), (c) => {
    const body = c.req.valid("json");
    // ...
});
```

## License

This project is licensed under the terms of the MIT license.
