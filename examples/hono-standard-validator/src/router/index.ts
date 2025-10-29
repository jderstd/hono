import type { Context, Env } from "hono";

import { createJsonResponse } from "@jderstd/hono/response";
import { sValidator } from "@jderstd/hono-standard-validator";
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

router.get("/", sValidator("json", json), (c: RouteContext): Response => {
    const data: Json = c.req.valid("json");

    return createJsonResponse(c, {
        data,
    });
});

export { router };
