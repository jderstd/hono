import type { ValidationTargets } from "hono";
import type * as v3 from "zod";
import type * as v4 from "zod/v4/core";

import { zValidator as zv } from "@hono/zod-validator";
import { createJsonResponse } from "@jderjs/hono/response";
import { HTTPException } from "hono/http-exception";

type ZodSchema = v3.ZodType | v4.$ZodType;

/**
 * Validate the request with Zod.
 *
 * Following error may returned if the request is invalid:
 *
 * ```jsonc
 * // Status: 400
 * {
 *     "success": false,
 *     "error": {
 *         "code": "invalid",
 *         "field": "xxx",
 *         "message": "Expected string, received number"
 *     }
 * }
 * ```
 *
 * ### Example
 *
 * ```ts
 * import type { Context, Env } from "hono";
 *
 * import { Hono } from "hono";
 * import { z } from "zod";
 * import { zValidator } from "@jderjs/hono-zod-validator";
 *
 * const app: Hono = new Hono();
 *
 * const json = z.object({
 *     name: z.string(),
 *     age: z.number()
 * });
 *
 * type Json = z.infer<typeof json>;
 *
 * type RouteContext = Context<
 *     Env,
 *     "/",
 *     {
 *         in: {
 *             json: Json;
 *         },
 *         out: {
 *             json: Json;
 *         },
 *     },
 * >;
 *
 * app.post(
 *     "/",
 *     zValidator("json", json),
 *     (c: RouteContext): Response => {
 *         const data: Json = c.req.valid("json");
 *         return c.json(data);
 *     }
 * );
 * ```
 */
const zValidator = <
    T extends ZodSchema,
    Target extends keyof ValidationTargets,
>(
    target: Target,
    schema: T,
) => {
    return zv(target, schema, (result, c) => {
        if (!result.success) {
            const err: v4.$ZodIssue | v3.ZodIssue | undefined =
                result.error.issues[0];

            throw new HTTPException(400, {
                res: createJsonResponse(c, {
                    error: {
                        code: "parse",
                        ...(err && {
                            field: err.path.join("."),
                            message: err.message,
                        }),
                    },
                }),
            });
        }
    });
};

export { zValidator };
