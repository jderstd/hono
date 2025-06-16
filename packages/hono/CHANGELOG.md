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
