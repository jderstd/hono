import type { CreateResponseStructOptions } from "@jderjs/core/response/common/struct";
import type { Context } from "hono";
import type { StatusCode } from "hono/utils/http-status";
import type { Format, Omit } from "ts-vista";

import { createResponseStruct } from "@jderjs/core/response/common/struct";

import { isContext } from "#/response/json";

/** Options of `createResponse` function. */
type CreateResponseOptions<B extends BodyInit = BodyInit> = Format<
    {
        /**
         * Status code of the response.
         * By default, it is `200` for success and `400` for failure.
         */
        status?: StatusCode;
    } & Omit<CreateResponseStructOptions<B>, "status">
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
 */
function createResponse<B extends BodyInit = BodyInit>(
    options?: CreateResponseOptions<B>,
): Response;

/**
 * Create a response with context.
 *
 * ### Examples
 *
 * Example for creating a basic response:
 *
 * ```ts
 * import type { Context } from "hono";
 *
 * import { createResponse } from "@jderjs/hono";
 *
 * const route = (c: Context): Response => {
 *     return createResponse(c);
 * };
 * ```
 *
 * Example for creating a response with status, headers, and body:
 *
 * ```ts
 * import type { Context } from "hono";
 *
 * import { createResponse } from "@jderjs/hono";
 *
 * const route = (c: Context): Response => {
 *     return createResponse(c, {
 *         status: 404,
 *         headers: [
 *             ["Content-Type", "text/plain"],
 *         ],
 *         body: "Not Found",
 *     });
 * };
 * ```
 */
function createResponse<B extends BodyInit = BodyInit>(
    context?: Context,
    options?: CreateResponseOptions<B>,
): Response;

function createResponse<B extends BodyInit = BodyInit>(
    contextOrOptions?: Context | CreateResponseOptions<B>,
    options?: CreateResponseOptions<B>,
): Response {
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
}

export type { CreateResponseOptions };
export { createResponse };
