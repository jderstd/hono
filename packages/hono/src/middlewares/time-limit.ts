/**
 * Time limit module
 * @module middlewares/time-limit
 */

import type { Context, MiddlewareHandler } from "hono";

import { HTTPException } from "hono/http-exception";
import { timeout } from "hono/timeout";

import { createJsonResponse } from "#/response/json";

/** Default maximum time in milliseconds. */
const TIME_LIMIT_MAX_DEFAULT = 5000 as const;

/** Options for `timeLimit` middleware. */
type TimeLimitOptions = {
    /**
     * Maximum time in milliseconds.
     *
     * By default, it is `TIME_LIMIT_MAX_DEFAULT`.
     */
    max?: number;
};

/**
 * Time limit middleware.
 *
 * Following error will be returned if the request takes longer than the limit:
 *
 * ```jsonc
 * // Status: 408
 * {
 *     "success": false,
 *     "error": {
 *         "code": "timeout"
 *     }
 * }
 * ```
 *
 * For more information, please refer to
 * [Timeout](https://hono.dev/docs/middleware/builtin/timeout).
 *
 * ### Examples
 *
 * A example of using `timeLimit` middleware:
 *
 * ```ts
 * import { Hono } from "hono";
 * import { timeLimit } from "@jderjs/hono/time-limit";
 *
 * const app: Hono = new Hono();
 *
 * app.use(timeLimit());
 * ```
 *
 * A example of using `timeLimit` middleware with options:
 *
 * ```ts
 * import { Hono } from "hono";
 * import { timeLimit } from "@jderjs/hono/time-limit";
 *
 * const app: Hono = new Hono();
 *
 * app.use(timeLimit({
 *     max: 10 * 1000, // 10s
 * }));
 * ```
 */
const timeLimit = (options?: TimeLimitOptions): MiddlewareHandler => {
    return timeout(options?.max ?? 5 * 1000, (c: Context): HTTPException => {
        return new HTTPException(408, {
            res: createJsonResponse(c, {
                success: false,
                status: 408,
                error: {
                    code: "timeout",
                },
            }),
        });
    });
};

export type { TimeLimitOptions };
export { timeLimit, TIME_LIMIT_MAX_DEFAULT };
