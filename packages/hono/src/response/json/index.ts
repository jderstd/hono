import type { CreateJsonResponseStructOptions } from "@jderjs/core/response/json/struct";
import type { Context } from "hono";
import type { StatusCode } from "hono/utils/http-status";
import type { Format, Omit } from "ts-vista";

import { createJsonResponseStruct } from "@jderjs/core/response/json/struct";

/** Check if the argument is a Hono context. */
const isContext = (arg: any): arg is Context => arg?.req !== undefined;

/** Options of `createJsonResponse` function. */
type CreateJsonResponseOptions<D = unknown> = Format<
    {
        /**
         * Status code of the response.
         * By default, it is `200` for success and `400` for failure.
         */
        status?: StatusCode;
    } & Omit<CreateJsonResponseStructOptions<D>, "status">
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
 *         errors: [
 *             {
 *                 code: "server",
 *                 message: "Internal server error",
 *             },
 *         ],
 *     });
 * };
 * ```
 */
function createJsonResponse<D = unknown>(
    options?: CreateJsonResponseOptions<D>,
): Response;

/**
 * Create a JSON response with context.
 *
 * ### Examples
 *
 * Example for creating a successful JSON response without data:
 *
 * ```ts
 * import type { Context } from "hono";
 *
 * import { createJsonResponse } from "@jderjs/hono";
 *
 * const route = (c: Context): Response => {
 *     return createJsonResponse(c);
 * };
 * ```
 *
 * Example for creating a successful JSON response with data:
 *
 * ```ts
 * import type { Context } from "hono";
 *
 * import { createJsonResponse } from "@jderjs/hono";
 *
 * const route = (c: Context): Response => {
 *     return createJsonResponse(c, {
 *         data: "Hello, World!",
 *     });
 * }
 * ```
 *
 * Example for creating a failed JSON response:
 *
 * ```ts
 * import type { Context } from "hono";
 *
 * import { createJsonResponse } from "@jderjs/hono";
 *
 * const route = (c: Context): Response => {
 *     return createJsonResponse(c, {
 *         errors: [
 *             {
 *                 code: "server",
 *                 message: "Internal server error",
 *             },
 *         ],
 *     });
 * };
 * ```
 */
function createJsonResponse<D = unknown>(
    context?: Context,
    options?: CreateJsonResponseOptions<D>,
): Response;

function createJsonResponse<D = unknown>(
    contextOrOptions?: Context | CreateJsonResponseOptions<D>,
    options?: CreateJsonResponseOptions<D>,
): Response {
    const { status, headers, json } = isContext(contextOrOptions)
        ? createJsonResponseStruct(options)
        : createJsonResponseStruct(contextOrOptions);

    if (isContext(contextOrOptions)) {
        const c: Context = contextOrOptions;

        c.status(status as StatusCode);

        for (const [key, value] of headers) c.header(key, value);

        return c.json(json);
    }

    return new Response(JSON.stringify(json), {
        status,
        headers,
    });
}

export type { CreateJsonResponseOptions };
export { isContext, createJsonResponse };
