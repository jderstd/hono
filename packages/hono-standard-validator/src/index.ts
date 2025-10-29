import type { StandardSchemaV1 } from "@standard-schema/spec";
import type { ValidationTargets } from "hono";

import { sValidator as sv } from "@hono/standard-validator";

import { sValidatorHook } from "#/hook";

/**
 * Validate the request with validator based on Standard Schema.
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
 * import { sValidator } from "@jderstd/hono-standard-validator";
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
 *     sValidator("json", json),
 *     (c: RouteContext): Response => {
 *         const data: Json = c.req.valid("json");
 *         return c.json(data);
 *     }
 * );
 * ```
 */
const sValidator = <
    Target extends keyof ValidationTargets,
    Schema extends StandardSchemaV1,
>(
    target: Target,
    schema: Schema,
) => {
    return sv(target, schema, sValidatorHook);
};

export { sValidator };
