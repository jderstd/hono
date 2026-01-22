## 0.8.1

### What's Changed

- update `@jderjs/core` version range
- export `OnErrorHandlerOptions` type

## 0.8.0 (2025-12-26)

### Breaking Changes

- `errors` field of JSON response create options use `JsonResponseErrorInput` type now
- `path` field in `JsonResponseError` is a array instead of an optional array now
- `errors` field in `JsonResponse` is a array instead of an optional array now

### What's New

- Export `JsonResponseErrorInput`

### What's Changed

- Avoid omit null value and empty array

## 0.7.1 (2025-11-30)

### What's Changed

- Update the `HttpException` in `timeLimit` middleware to `JderHttpException`

## 0.7.0 (2025-11-25)

### What's New

- Add `JderHttpException` class which extends `HttpException` from Hono

## 0.6.0 (2025-09-20)

### Breaking Changes

- Rename package name from `@jderjs/hono` to `@jderstd/hono`
- Status code changed in `timeLimit` middleware:
    - `408` -> `504`

### What's Changed

- Update documentation

## 0.5.0 (2025-09-06)

### What's New

- Add `notFoundHandler` function
- Add `onErrorHandler` function
- Add `ResponseErrorCode` enum (For internal)
- Add `getResponseErrorMessage` function (For internal)

## 0.4.0 (2025-08-13)

### Breaking Changes

- Support new standard

### Migrating from 0.3.X to 0.4.0

```diff
import { 
    createJsonResponse,
} from "@jderjs/hono";

const route = (): Response => {
    return createJsonResponse({
-       error: {
-           code: "parse",
-           field: "title",
-           message: "Invalid title",
-       },
+       errors: [
+           {
+               code: "parse",
+               path: ["json", "title"],
+               message: "Invalid title",
+           }
+       ],
    });
}
```

## 0.3.1 (2025-08-06)

### What's Changed

- Update `@jderjs/core`

## 0.3.0 (2025-06-16)

### What's New

- Export `BODY_LIMIT_MAX_DEFAULT`
- Export `TIME_LIMIT_MAX_DEFAULT`

### What's Changed

- `max` param in `bodyLimit` defaults to `BODY_LIMIT_MAX_DEFAULT`
- `max` param in `timeLimit` defaults to `TIME_LIMIT_MAX_DEFAULT`
- Updates in types of `createResponse` and `createJsonResponse`

## 0.2.0 (2025-05-27)

### Breaking Changes

- Changes in input of `createResponse` and `createJsonResponse`

### What's New

- Add compatibility with `hono/ip-restriction`:

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

// Alternatively, the parameters can be passed in this format:

app.use(
    ipLimit(getConnInfo, {
        allowList: ["127.0.0.1"],
    })
);
```

### Migrating from 0.1.x to 0.2.x

```diff
import type { Context } from "hono";

import { createJsonResponse } from "@jderjs/hono";

const route = (c: Context): Response => {
-   return createJsonResponse({ c, /* ... */ });
+   return createJsonResponse(c, { /* ... */ });
};
```

## 0.1.1 (2025-05-20)

### What's Changed

- Update documentation

## 0.1.0 (2025-05-18)

First release
