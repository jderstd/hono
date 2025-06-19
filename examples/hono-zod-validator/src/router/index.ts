import type { Context, Env } from "hono";

import { createJsonResponse } from "@jderjs/hono/response";
import { zValidator } from "@jderjs/hono-zod-validator";
import { Hono } from "hono";
import { z } from "zod";

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
        };
        out: {
            json: Json;
        };
    }
>;

router.get("/", zValidator("json", json), (c: RouteContext): Response => {
    const data: Json = c.req.valid("json");

    return createJsonResponse(c, {
        data,
    });
});

export { router };
