import type { Context, Env } from "hono";

import { createJsonResponse } from "@jderstd/hono/response";
import { describeRoute, resolver, validator } from "@jderstd/hono-openapi";
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

const jsonResponseErrorSchema = z.object({
    code: z.string(),
    path: z.array(z.string()),
    message: z.string(),
});

const createJsonSuccessResponse = <T extends z.ZodTypeAny>(data?: T) => {
    return z.object({
        success: z.literal(true),
        ...(data
            ? {
                  data,
              }
            : {}),
    });
};

const jsonFailureResponseSchema = z.object({
    success: z.literal(false),
    errors: z.array(jsonResponseErrorSchema),
});

router.get(
    "/",
    describeRoute({
        responses: {
            200: {
                description: "Successful response",
                content: {
                    "application/json": {
                        schema: resolver(createJsonSuccessResponse()),
                    },
                },
            },
        },
    }),
    (c: RouteContext): Response => {
        return createJsonResponse(c);
    },
);

router.post(
    "/",
    validator("json", json),
    describeRoute({
        responses: {
            200: {
                description: "Successful response",
                content: {
                    "application/json": {
                        schema: resolver(createJsonSuccessResponse(json)),
                    },
                },
            },
            400: {
                description: "Bad request",
                content: {
                    "application/json": {
                        schema: resolver(jsonFailureResponseSchema),
                    },
                },
            },
        },
    }),
    (c: RouteContext): Response => {
        const data: Json = c.req.valid("json");

        return createJsonResponse(c, {
            data,
        });
    },
);

export { router };
