/**
 * Response module
 * @module response
 */

import type { CreateResponseStructOptions } from "@jderjs/core/internal";
import type { Context } from "hono";
import type { StatusCode } from "hono/utils/http-status";
import type { Format, Omit } from "ts-vista";

import { createResponseStruct } from "@jderjs/core/internal";
import { isContext } from "#/response/json";

/** Options of `createResponse` function. */
type CreateResponseOptions = Format<
    {
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
 * Example for merging context into the response:
 *
 * ```ts
 * import type { Context } from "hono";
 *
 * import { setCookie } from "hono/cookie";
 * import { createResponse } from "@jderjs/hono";
 *
 * const route = (c: Context): Response => {
 *     setCookie(c, "key", "value");
 *
 *     return createResponse(c);
 * }
 * ```
 */
const createResponse = (
    contextOrOptions?: Context | CreateResponseOptions,
    options?: CreateResponseOptions,
): Response => {
    const { status, headers, body } = isContext(contextOrOptions)
        ? createResponseStruct(options)
        : createResponseStruct(contextOrOptions);

    if (isContext(contextOrOptions)) {
        const c: Context = contextOrOptions;

        c.status(status as StatusCode);

        for (const [key, value] of headers) c.header(key, value);

        return body
            ? c.body(body as string | ArrayBuffer | ReadableStream)
            : c.body(null);
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
