/**
 * Time limit module
 * @module middlewares/time-limit
 */

import type { Context, MiddlewareHandler } from "hono";
import type { StatusCode } from "hono/utils/http-status";

import { HTTPException } from "hono/http-exception";
import { timeout } from "hono/timeout";

import { getResponseErrorMessage, ResponseErrorCode } from "#/response/error";
import { createJsonResponse } from "#/response/json";

/** Default maximum time in milliseconds. */
const TIME_LIMIT_MAX_DEFAULT = (5 * 1000) as 5000;

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
 * // Status: 504
 * {
 *     "success": false,
 *     "errors": [
 *         {
 *             "code": "timeout",
 *             "message": "Request timeout"
 *         }
 *     ]
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
 * import { timeLimit } from "@jderstd/hono/time-limit";
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
 * import { timeLimit } from "@jderstd/hono/time-limit";
 *
 * const app: Hono = new Hono();
 *
 * app.use(timeLimit({
 *     max: 10 * 1000, // 10s
 * }));
 * ```
 */
const timeLimit = (options?: TimeLimitOptions): MiddlewareHandler => {
    const status: StatusCode = 504;
    const code: ResponseErrorCode = ResponseErrorCode.Timeout;

    return timeout(options?.max ?? 5 * 1000, (c: Context): HTTPException => {
        return new HTTPException(status, {
            res: createJsonResponse(c, {
                status,
                errors: [
                    {
                        code,
                        message: getResponseErrorMessage(code),
                    },
                ],
            }),
        });
    });
};

export type { TimeLimitOptions };
export { timeLimit, TIME_LIMIT_MAX_DEFAULT };
