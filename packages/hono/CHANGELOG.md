## 0.2.0

### Breaking Changes

- Changes in input of `createResponse` and `createJsonResponse`

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
