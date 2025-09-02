import type { Context } from "hono";

import { createJsonResponse } from "#/response";

/**
 * Not found handler.
 *
 * Following response will be reurned on route not found:
 *
 * ```jsonc
 * // Status: 404
 * {
 *     "success": false,
 *     "errors": [
 *         {
 *             "code": "not_found",
 *             "message": "Content not found"
 *         }
 *     ]
 * }
 * ```
 *
 * ### Example
 *
 * ```ts
 * import { Hono } from "hono";
 * import { notFoundHandler } from "@jderjs/hono";
 *
 * const app: Hono = new Hono();
 *
 * app.notFound(notFoundHandler());
 * ```
 */
const notFoundHandler = (): ((c: Context) => Response) => {
    return (c: Context): Response => {
        return createJsonResponse(c, {
            status: 404,
            errors: [
                {
                    code: "not_found",
                    message: "Content not found",
                },
            ],
        });
    };
};

export { notFoundHandler };
