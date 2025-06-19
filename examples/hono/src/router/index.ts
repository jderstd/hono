import type { Context } from "hono";

import { createJsonResponse } from "@jderjs/hono/response";
import { Hono } from "hono";

const router: Hono = new Hono();

router.get("/", (c: Context): Response => {
    return createJsonResponse(c, {
        data: "Hello, World!",
    });
});

export { router };
