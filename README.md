# JDER Hono

A response builder for Hono.

This package includes different response builders based on the JSON response structure specified in [JSON Data Error Response (JDER)](https://github.com/jder-std/spec). With the builders, various kinds of responses can be created easily instead of sending plain text responses.

## Installation

Install this package as a dependency in the project:

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

## Quick Start

To create a JSON response, use the following code:

```ts
import { createJsonResponse } from "@jderjs/hono";

const route = (): Response => {
    return createJsonResponse();
}

// {
//     "success": true,
// }
```

## Documentation

For the documentation,
please refer to the [Documentation](./docs/README.md).

## APIs

For the package APIs, 
please refer to the [APIs](./apis/README.md).

## License

This project is licensed under the terms of the MIT license.
