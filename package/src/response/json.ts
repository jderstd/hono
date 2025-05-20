import type { CreateJsonResponseStructOptions } from "@jderjs/core/internal";
import type { Context } from "hono";
import type { StatusCode } from "hono/utils/http-status";
import type { Format, Omit } from "ts-vista";

import { createJsonResponseStruct } from "@jderjs/core/internal";

/** Options of `createJsonResponse` function. */
type CreateJsonResponseOptions = Format<
    {
        /**
         * For merging context.
         *
         * Both `c` and `ctx` available as alias of `context`.
         */
        context?: Context;
        /**
         * Alias of `context`.
         */
        ctx?: Context;
        /**
         * Alias of `context`.
         */
        c?: Context;
        /**
         * Status code of the response.
         * By default, it is `200` for success and `400` for failure.
         */
        status?: StatusCode;
    } & Omit<CreateJsonResponseStructOptions, "status">
>;

/**
 * Create a JSON response.
 *
 * ### Examples
 *
 * Example for creating a successful JSON response without data:
 *
 * ```ts
 * import { createJsonResponse } from "@jderjs/hono";
 *
 * const route = (): Response => {
 *     return createJsonResponse();
 * };
 * ```
 *
 * Example for creating a successful JSON response with data:
 *
 * ```ts
 * import { createJsonResponse } from "@jderjs/hono";
 *
 * const route = (): Response => {
 *     return createJsonResponse({
 *         data: "Hello, World!",
 *     });
 * }
 * ```
 *
 * Example for creating a failed JSON response:
 *
 * ```ts
 * import { createJsonResponse } from "@jderjs/hono";
 *
 * const route = (): Response => {
 *     return createJsonResponse({
 *         success: false,
 *         error: {
 *             code: "server",
 *             message: "Internal server error",
 *         },
 *     });
 * };
 * ```
 *
 * Example for merging context response:
 *
 * ```ts
 * import type { Context } from "hono";
 *
 * import { setCookie } from "hono/cookie";
 * import { createJsonResponse } from "@jderjs/hono";
 *
 * const route = (context: Context): Response => {
 *     setCookie(context, "key", "value");
 *
 *     return createJsonResponse({
 *         context,
 *     });
 * }
 * ```
 */
const createJsonResponse = (options?: CreateJsonResponseOptions): Response => {
    const { status, headers, json } = createJsonResponseStruct(options);

    const c: Context | undefined =
        options?.c ?? options?.context ?? options?.ctx;

    if (c) {
        c.status(status as StatusCode);

        for (const [key, value] of headers) {
            c.header(key, value);
        }

        return c.json(json);
    }

    return new Response(JSON.stringify(json), {
        status,
        headers,
    });
};

export type { CreateJsonResponseOptions };
export { createJsonResponse };
