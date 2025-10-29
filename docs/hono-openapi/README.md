[< Back](./../../README.md)

# JDER Hono OpenAPI

An OpenAPI helper for Hono.

## Installation

Install this package as a dependency in the project:

> This package requires `hono` and `@jderstd/hono` to be installed.

```sh
# npm
npm i @jderstd/hono-openapi

# Yarn
yarn add @jderstd/hono-openapi

# pnpm
pnpm add @jderstd/hono-openapi

# Deno
deno add npm:@jderstd/hono-openapi

# Bun
bun add @jderstd/hono-openapi
```

Few validation libraries require additional dependencies to work.

| Vendor  | Dependencies              |
| ------- | ------------------------- |
| Zod v3  | `zod-openapi@4`           |
| Valibot | `@valibot/to-json-schema` |

## Validate with Zod

Assume that the request body is JSON. Validate it with Zod and send a JSON response when the request is invalid.

First, define a Zod schema:

```ts
import { z } from "zod";

const json = z.object({
    name: z.string(),
    age: z.number(),
});

type Json = z.infer<typeof json>;
```

Then, import it into the Zod validator middleware:

```ts
import { validator } from "@jderstd/hono-openapi";

validator("json", json)
```

And use it in a Hono route:

```ts
import { Hono } from "hono";

const router: Hono = new Hono();

type RouteContext = Context<
    Env,
    "/",
    {
        in: {
            json: Json;
        },
        out: {
            json: Json;
        },
    },
>;

router.post(
    "/",
    validator("json", json),
    (c: RouteContext): Response => {
        const body: Json = c.req.valid("json");
        return c.json(body);
    }
);
```

Create schema for `@jderstd/hono`:

```ts
const jsonResponseErrorSchema = z.object({
    code: z.string(),
    path: z.array(z.string()),
    message: z.string(),
});

const jsonFailureResponseSchema = z.object({
    success: z.literal(false),
    errors: z.array(jsonResponseErrorSchema),
});
```

Then add `describeRoute` function to the route with schema:

```ts
import { describeRoute, resolver } from "@jderstd/hono-openapi";

router.post(
    "/",
    describeRoute({
        responses: {
            200: {
                description: "Successful response",
                content: {
                    "application/json": {
                        schema: resolver(json),
                    },
                },
            },
            400: {
                description: "Bad request",
                content: {
                    "application/json": {
                        schema: resolver(jsonFailureResponseSchema),
                    },
                },
            },
        },
    }),
);
```

Finally, append the routes to the app and add `openAPIRouteHandler` function:

```ts
import { Hono } from "hono";
import { openAPIRouteHandler } from "@jderstd/hono-openapi";

const app: Hono = new Hono();

app.route("/", router);

app.get(
    "/openapi.json",
    openAPIRouteHandler(router),
);
```

A full example:

```ts
import { Hono } from "hono";
import { z } from "zod";
import {
    validator,
    describeRoute,
    resolver,
    openAPIRouteHandler,
} from "@jderstd/hono-openapi";

const router: Hono = new Hono();

const json = z.object({
    name: z.string(),
    age: z.number(),
});

type Json = z.infer<typeof json>;

type RouteContext = Context<
    Env,
    "/",
    {
        in: {
            json: Json;
        },
        out: {
            json: Json;
        },
    },
>;

const jsonResponseErrorSchema = z.object({
    code: z.string(),
    path: z.array(z.string()),
    message: z.string(),
});

const jsonFailureResponseSchema = z.object({
    success: z.literal(false),
    errors: z.array(jsonResponseErrorSchema),
});

router.post(
    "/",
    validator("json", json),
    describeRoute({
        responses: {
            200: {
                description: "Successful response",
                content: {
                    "application/json": {
                        schema: resolver(json),
                    },
                },
            },
            400: {
                description: "Bad request",
                content: {
                    "application/json": {
                        schema: resolver(jsonFailureResponseSchema),
                    },
                },
            },
        },
    }),
    (c: RouteContext): Response => {
        const body: Json = c.req.valid("json");
        return c.json(body);
    },
);

const app: Hono = new Hono();

app.route("/", router);

app.get(
    "/openapi.json",
    openAPIRouteHandler(router),
);
```