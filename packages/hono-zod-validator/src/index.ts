import type { ValidationTargets } from "hono";

import type { ZodSchema } from "#/hook";

import { zValidator as zv } from "@hono/zod-validator";

import { zValidatorHook } from "#/hook";

/**
 * Validate the request with Zod.
 *
 * Following error may returned if the request is invalid:
 *
 * ```jsonc
 * // Status: 400
 * {
 *     "success": false,
 *     "errors": [
 *         {
 *             "code": "parse",
 *             "path": ["xxx"],
 *             "message": "xxx"
 *         }
 *     ]
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
    return zv(target, schema, zValidatorHook);
};

export { zValidator };
