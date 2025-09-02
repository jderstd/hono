import type { Context } from "hono";
import type { HTTPResponseError } from "hono/types";
import type { StatusCode } from "hono/utils/http-status";

import { HTTPException } from "hono/http-exception";

import { createJsonResponse } from "#/response";

/** Options for `onErrorHandler` function. */
type OnErrorHandlerOptions = {
    /**
     * Whether show more information.
     * By default, it's `false`.
     */
    verbose?: boolean;
};

/**
 * On error handler.
 *
 * Following responses could be returned on error:
 *
 * ```jsonc
 * // Status: 400
 * {
 *     "success": false,
 *     "errors": [
 *         {
 *             "code": "bad_request"
 *         }
 *     ]
 * }
 * ```
 *
 * ```jsonc
 * // Status: 500
 * {
 *     "success": false,
 *     "errors": [
 *         {
 *             "code": "server"
 *         }
 *     ]
 * }
 * ```
 *
 * ### Examples
 *
 * Basic example of using `onErrorHandler` handler:
 *
 * ```ts
 * import { Hono } from "hono";
 * import { onErrorHandler } from "@jderjs/hono";
 *
 * const app: Hono = new Hono();
 *
 * app.onError(onErrorHandler());
 * ```
 *
 * Show more information with `verbose` option:
 *
 * ```ts
 * import { Hono } from "hono";
 * import { onErrorHandler } from "@jderjs/hono";
 *
 * const app: Hono = new Hono();
 *
 * app.onError(onErrorHandler({ verbose: true }));
 * ```
 */
const onErrorHandler = (
    options?: OnErrorHandlerOptions,
): ((err: Error | HTTPResponseError, c: Context) => Response) => {
    return (err: Error | HTTPResponseError, c: Context): Response => {
        if (err instanceof HTTPException) {
            const res: Response = err.getResponse();

            const status: StatusCode = res.status as StatusCode;

            const code: string = status >= 500 ? "server" : "bad_request";

            return createJsonResponse(c, {
                status: res.status as StatusCode,
                errors: [
                    {
                        code,
                        ...(options?.verbose && {
                            message: err.message,
                        }),
                    },
                ],
            });
        }

        return createJsonResponse(c, {
            status: 500,
            errors: [
                {
                    code: "server",
                    ...(options?.verbose && {
                        message: err.message,
                    }),
                },
            ],
        });
    };
};

export { onErrorHandler };
