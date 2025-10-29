[< Back](./../../README.md)

# JDER Hono Standard Validator

A standard validator for Hono.

## Installation

Install this package as a dependency in the project:

> This package requires `hono` and `@jderstd/hono` to be installed.

```sh
# npm
npm i @jderstd/hono-standard-validator

# Yarn
yarn add @jderstd/hono-standard-validator

# pnpm
pnpm add @jderstd/hono-standard-validator

# Deno
deno add npm:@jderstd/hono-standard-validator

# Bun
bun add @jderstd/hono-standard-validator
```

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
import { sValidator } from "@jderstd/hono-standard-validator";

sValidator("json", json)
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
    sValidator("json", json),
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
import { sValidator } from "@jderstd/hono-standard-validator";

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
    sValidator("json", json),
    (c: RouteContext): Response => {
        const body: Json = c.req.valid("json");
        return c.json(body);
    }
);
```
