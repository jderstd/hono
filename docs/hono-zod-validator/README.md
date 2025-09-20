[< Back](./../../README.md)

# JDER Hono Zod Validator

A Zod validator for Hono.

## Installation

Install this package as a dependency in the project:

> This package requires `hono`, `zod`, and `@jderstd/hono` to be installed.

```sh
# npm
npm i @jderstd/hono-zod-validator

# Yarn
yarn add @jderstd/hono-zod-validator

# pnpm
pnpm add @jderstd/hono-zod-validator

# Deno
deno add npm:@jderstd/hono-zod-validator

# Bun
bun add @jderstd/hono-zod-validator
```

## Validate with Zod

A Zod validator middleware is available for Hono.

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
import { zValidator } from "@jderstd/hono-zod-validator";

zValidator("json", json)
```

And use it in a Hono route:

```ts
import { Hono } from "hono";

const app: Hono = new Hono();

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

app.post(
    "/",
    zValidator("json", json),
    (c: RouteContext): Response => {
        const body: Json = c.req.valid("json");
        return c.json(body);
    }
);
```

A full example:

```ts
import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@jderstd/hono-zod-validator";

const app: Hono = new Hono();

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

app.post(
    "/",
    zValidator("json", json),
    (c: RouteContext): Response => {
        const body: Json = c.req.valid("json");
        return c.json(body);
    }
);
```
