[< Back](./../../README.md)

# JDER Hono Zod Validator

A Zod validator for Hono.

## Installation

Install this package as a dependency in the project:

```sh
# npm
npm i @jderjs/hono-zod-validator

# Yarn
yarn add @jderjs/hono-zod-validator

# pnpm
pnpm add @jderjs/hono-zod-validator

# Deno
deno add npm:@jderjs/hono-zod-validator

# Bun
bun add @jderjs/hono-zod-validator
```

## Validate with Zod

A Zod validator middleware is available for Hono.

First, define a Zod schema:

```ts
import { z } from "zod";

const json = z.object({
    name: z.string(),
    age: z.number(),
});
```

Then, import it into the Zod validator middleware:

```ts
import { zValidator } from "@jderjs/hono-zod-validator";

zValidator("json", json)
```

And use it in a Hono route:

```ts
import { Hono } from "hono";

const app: Hono = new Hono();

app.post(
    "/",
    zValidator("json", json),
    (c) => {
        const body = c.req.valid("json");
        // ...
    }
);
```

A full example:

```ts
import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@jderjs/hono-zod-validator";

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
        const body = c.req.valid("json");
        // ...
    }
);
```
