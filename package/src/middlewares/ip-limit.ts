/**
 * IP limit module
 * @module ip-limit
 */

import type { Context, MiddlewareHandler } from "hono";
import type {
    AddressType,
    ConnInfo,
    GetConnInfo,
    NetAddrInfo,
} from "hono/conninfo";
import type { IPRestrictionRule } from "hono/ip-restriction";

import { ipRestriction } from "hono/ip-restriction";

import { createJsonResponse } from "#/response";

type GetIPAddr = GetConnInfo | ((c: Context) => string);

/** Options for `bodyLimit` middleware. */
type IpLimitOptions = {
    /** Function to get IP address. */
    getConnInfo: GetIPAddr;
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

/**
 * IP limit middleware.
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
const ipLimit = (options: IpLimitOptions): MiddlewareHandler => {
    return ipRestriction(
        options.getConnInfo,
        {
            denyList: options.denyList,
            allowList: options.allowList,
        },
        ({ addr }, context: Context): Response => {
            return createJsonResponse({
                context,
                success: false,
                status: 403,
                error: {
                    code: "forbidden",
                    ...(options.verbose
                        ? {
                              field: "ip",
                              message: `Forbidden IP address: ${addr}`,
                          }
                        : {}),
                },
            });
        },
    );
};

export type {
    AddressType,
    NetAddrInfo,
    ConnInfo,
    GetConnInfo,
    GetIPAddr,
    IPRestrictionRule,
};
export type { IpLimitOptions };
export { ipLimit };
