[< Back](./../../README.md)

# JDER Hono

A response builder for Hono.

## Installation

Install this package as a dependency in the project:

> This package requires `hono` to be installed.

```sh
# npm
npm i @jderjs/hono

# Yarn
yarn add @jderjs/hono

# pnpm
pnpm add @jderjs/hono

# Deno
deno add npm:@jderjs/hono

# Bun
bun add @jderjs/hono
```

## Functions

For core response functions,
please refer to the [Core Documentation](https://github.com/jderstd/core.js/blob/main/docs/README.md).

This package extends the response functions by adding the context to the response.

```ts
import type { Context } from "hono";

import { createJsonResponse } from "@jderjs/hono/response";

const route = (c: Context): Response => {
    return createJsonResponse(c);
};
```

## Request IP Restriction

The `ipLimit` middleware restricts access based on the client's IP address.

It supports multiple runtime environments via the `getConnInfo` helper.

See [ConnInfo helper](https://hono.dev/docs/helpers/conninfo) for more details.

```ts
import { Hono } from "hono";
import { ipLimit } from "@jderjs/hono/ip-limit";
import { getConnInfo } from "@hono/node-server/conninfo";

const app: Hono = new Hono();

app.use(
    ipLimit({
        getConnInfo,
        allowList: ["127.0.0.1"],
    })
);
```

## Request Body Size Limiting

Use the `bodyLimit` middleware to restrict the maximum size of incoming request bodies:

```ts
import { Hono } from "hono";
import { bodyLimit } from "@jderjs/hono/body-limit";

const app: Hono = new Hono();

app.use(
    bodyLimit({
        max: 10 * 1024 * 1024, // 10MiB
    })
);
```

## Request Timeout

The `timeLimit` middleware enforces a maximum processing time per request:

```ts
import { Hono } from "hono";
import { timeLimit } from "@jderjs/hono/time-limit";

const app: Hono = new Hono();

app.use(
    timeLimit({
        max: 10 * 1000, // 10s
    })
);
```

## Not Found Handler

The `notFoundHandler` return JSON response when the content is not found.

```ts
import { Hono } from "hono";
import { notFoundHandler } from "@jderjs/hono/not-found";

const app: Hono = new Hono();

app.notFound(notFoundHandler());
```

## On Error Handler

The `onErrorHandler` return JSON response when an error occurs.

```ts
import { Hono } from "hono";
import { onErrorHandler } from "@jderjs/hono/on-error";

const app: Hono = new Hono();

app.onError(onErrorHandler());
```
