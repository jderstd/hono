/**
 * IP limit module
 * @module middlewares/ip-limit
 */

import type { Context, MiddlewareHandler } from "hono";
import type {
    AddressType,
    ConnInfo,
    GetConnInfo,
    NetAddrInfo,
} from "hono/conninfo";
import type { IPRestrictionRule } from "hono/ip-restriction";
import type { Format } from "ts-vista";

import { ipRestriction } from "hono/ip-restriction";

import { createJsonResponse } from "#/response";

type GetIPAddr = GetConnInfo | ((c: Context) => string);

/** Base options for `ipLimit` middleware. */
type IpLimitBaseOptions = {
    /** Allowed IP addresses. */
    allowList?: IPRestrictionRule[];
    /** Denied IP addresses. */
    denyList?: IPRestrictionRule[];
    /**
     * Whether show more information.
     * By default, it's `false`.
     */
    verbose?: boolean;
};

/** Options for `ipLimit` middleware. */
type IpLimitOptions = Format<
    {
        /** Function to get IP address. */
        getConnInfo: GetIPAddr;
    } & IpLimitBaseOptions
>;

/**
 * IP limit middleware.
 *
 * Following error will be returned if the IP address is not allowed:
 *
 * ```jsonc
 * // Status: 403
 * {
 *     "success": false,
 *     "errors": [
 *         {
 *             "code": "forbidden"
 *         }
 *     ]
 * }
 * ```
 *
 * When `verbose` is `true`, the error will be like:
 *
 * ```jsonc
 * // Status: 403
 * {
 *     "success": false,
 *     "errors": [
 *         {
 *             "code": "forbidden",
 *             "path": [
 *                 "request",
 *                 "ip"
 *             ],
 *             "message": "Forbidden IP address: x.x.x.x"
 *         }
 *     ]
 * }
 * ```
 *
 * For more information, please refer to
 * [IP Restriction](https://hono.dev/docs/middleware/builtin/ip-restriction).
 *
 * For `getConnInfo`, please refer to
 * [ConnInfo helper](https://hono.dev/docs/helpers/conninfo).
 *
 * ### Example
 *
 * ```ts
 * import { Hono } from "hono";
 * import { ipLimit } from "@jderjs/hono/ip-limit";
 *
 * // getConnInfo helper for Node.js
 * import { getConnInfo } from "@hono/node-server/conninfo";
 *
 * const app: Hono = new Hono();
 *
 * app.use(
 *     ipLimit({
 *         getConnInfo,
 *         allowList: [],
 *         denyList: [],
 *     })
 * );
 * ```
 */
function ipLimit(options: IpLimitOptions): MiddlewareHandler;

/**
 * IP limit middleware for compatibility with `hono/ip-restriction`.
 *
 * This is functionally equivalent to:
 *
 * ```ts
 * ipLimit({ getConnInfo, ...options });
 * ```
 *
 * And it behaves the same as the main `ipLimit` function.
 */
function ipLimit(
    getConnInfo: GetIPAddr,
    options?: IpLimitBaseOptions,
): MiddlewareHandler;

function ipLimit(
    getConnInfoOrOptions: GetIPAddr | IpLimitOptions,
    options?: IpLimitBaseOptions,
): MiddlewareHandler {
    const getConnInfo: GetIPAddr =
        typeof getConnInfoOrOptions === "function"
            ? getConnInfoOrOptions
            : getConnInfoOrOptions.getConnInfo;
    const { denyList, allowList, verbose }: IpLimitBaseOptions =
        (typeof getConnInfoOrOptions === "function"
            ? options
            : getConnInfoOrOptions) ?? {};

    return ipRestriction(
        getConnInfo,
        {
            denyList,
            allowList,
        },
        ({ addr }, c: Context): Response => {
            return createJsonResponse(c, {
                status: 403,
                errors: [
                    {
                        code: "forbidden",
                        ...(verbose
                            ? {
                                  path: [
                                      "request",
                                      "ip",
                                  ],
                                  message: `Forbidden IP address: ${addr}`,
                              }
                            : {}),
                    },
                ],
            });
        },
    );
}

export type {
    AddressType,
    NetAddrInfo,
    ConnInfo,
    GetConnInfo,
    GetIPAddr,
    IPRestrictionRule,
};
export type { IpLimitBaseOptions, IpLimitOptions };
export { ipLimit };
