/**
 * Response module
 * @module Response
 */

import type { CreateResponseStructOptions } from "@jderjs/core/internal";
import type { Context } from "hono";
import type { StatusCode } from "hono/utils/http-status";
import type { Format, Omit } from "ts-vista";

import { createResponseStruct } from "@jderjs/core/internal";

/** Options of `createResponse` function. */
type CreateResponseOptions = Format<
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
    } & Omit<CreateResponseStructOptions, "status">
>;

/**
 * Create a response.
 *
 * ### Examples
 *
 * Example for creating a basic response:
 *
 * ```ts
 * import { createResponse } from "@jderjs/hono";
 *
 * const route = (): Response => {
 *     return createResponse();
 * };
 * ```
 *
 * Example for creating a response with status, headers, and body:
 *
 * ```ts
 * import { createResponse } from "@jderjs/hono";
 *
 * const route = (): Response => {
 *     return createResponse({
 *         status: 404,
 *         headers: [
 *             ["Content-Type", "text/plain"],
 *         ],
 *         body: "Not Found",
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
 * import { createResponse } from "@jderjs/hono";
 *
 * const route = (context: Context): Response => {
 *     setCookie(context, "key", "value");
 *
 *     return createResponse({
 *         context,
 *     });
 * }
 * ```
 */
const createResponse = (options?: CreateResponseOptions): Response => {
    const c: Context | undefined =
        options?.c ?? options?.context ?? options?.ctx;

    const { status, headers, body } = createResponseStruct(options);

    if (c) {
        c.status(status as StatusCode);

        for (const [key, value] of headers) {
            c.header(key, value);
        }

        if (body) {
            return c.body(body as string | ArrayBuffer | ReadableStream);
        }

        return c.body(null);
    }

    return new Response(body, {
        status,
        headers,
    });
};

export type { CreateResponseOptions };
export { createResponse };

export type {
    JsonResponse,
    JsonResponseError,
} from "@jderjs/core";

export type { CreateJsonResponseOptions } from "#/response/json";

export { createJsonResponse } from "#/response/json";
