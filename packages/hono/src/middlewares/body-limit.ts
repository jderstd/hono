/**
 * Body limit module
 * @module middlewares/body-limit
 */

import type { Context, MiddlewareHandler } from "hono";

import { bodyLimit as _bodyLimit } from "hono/body-limit";

import { createJsonResponse } from "#/response/json";

/** Default maximum body size in bytes. */
const BODY_LIMIT_MAX_DEFAULT = (10 * 1024 * 1024) as 10485760;

/** Options for `bodyLimit` middleware. */
type BodyLimitOptions = {
    /**
     * Maximum body size in bytes.
     *
     * By default, it is `BODY_LIMIT_MAX_DEFAULT`.
     */
    max?: number;
};

/**
 * Body limit middleware.
 *
 * Following error will be returned if the body size is over the limit:
 *
 * ```jsonc
 * // Status: 413
 * {
 *     "success": false,
 *     "error": {
 *         "code": "too_large",
 *         "field": "body"
 *     }
 * }
 * ```
 *
 * For more information, please refer to
 * [Body Limit](https://hono.dev/docs/middleware/builtin/body-limit).
 *
 * ### Examples
 *
 * A example of using `bodyLimit` middleware:
 *
 * ```ts
 * import { Hono } from "hono";
 * import { bodyLimit } from "@jderjs/hono/body-limit";
 *
 * const app: Hono = new Hono();
 *
 * app.use(bodyLimit());
 * ```
 *
 * A example of using `bodyLimit` middleware with options:
 *
 * ```ts
 * import { Hono } from "hono";
 * import { bodyLimit } from "@jderjs/hono/body-limit";
 *
 * const app: Hono = new Hono();
 *
 * app.use(bodyLimit({
 *     max: 20 * 1024 * 1024, // 20MiB
 * }));
 * ```
 */
const bodyLimit = (options?: BodyLimitOptions): MiddlewareHandler => {
    return _bodyLimit({
        maxSize: options?.max ?? BODY_LIMIT_MAX_DEFAULT,
        onError: (c: Context): Response => {
            return createJsonResponse(c, {
                status: 413,
                error: {
                    code: "too_large",
                    field: "body",
                },
            });
        },
    });
};

export type { BodyLimitOptions };
export { bodyLimit, BODY_LIMIT_MAX_DEFAULT };
