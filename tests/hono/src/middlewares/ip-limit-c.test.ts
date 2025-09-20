import type {
    ConnInfo,
    GetIPAddr,
    IPRestrictionRule,
} from "@jderstd/hono/ip-limit";
import type { JsonResponse } from "@jderstd/hono/response";

import { ipLimit } from "@jderstd/hono/ip-limit";
import { createJsonResponse } from "@jderstd/hono/response";
import {
    getResponseErrorMessage,
    ResponseErrorCode,
} from "@jderstd/hono/response/error";
import { Hono } from "hono";
import { testClient } from "hono/testing";
import { describe, expect, it } from "vitest";

type CreateClientOptions = {
    allowList?: IPRestrictionRule[];
    verbose?: boolean;
};

const getConnInfo: GetIPAddr = (): ConnInfo => ({
    remote: {
        transport: "tcp",
        port: 5143,
        address: "127.0.0.1",
        addressType: "IPv4",
    },
});

const createClient = (options?: CreateClientOptions) => {
    const app = new Hono()
        .use(
            ipLimit(getConnInfo, {
                ...options,
            }),
        )
        .get("/", (): Response => {
            return createJsonResponse();
        });

    return testClient(app);
};

describe("IP limit test", (): void => {
    it("should work", async (): Promise<void> => {
        const res = await createClient().index.$get();

        expect(res.status).toBe(200);

        expect(await res.json()).toStrictEqual({
            success: true,
        } satisfies JsonResponse);
    });

    it("should be forbidden", async (): Promise<void> => {
        const res = await createClient({
            allowList: [
                "1.1.1.1",
            ],
        }).index.$get();

        expect(res.status).toBe(403);

        expect(await res.json()).toStrictEqual({
            success: false,
            errors: [
                {
                    code: ResponseErrorCode.Forbidden,
                },
            ],
        } satisfies JsonResponse);
    });

    it("should be forbidden with verbose", async (): Promise<void> => {
        const res = await createClient({
            allowList: [
                "1.1.1.1",
            ],
            verbose: true,
        }).index.$get();

        expect(res.status).toBe(403);

        const code: ResponseErrorCode = ResponseErrorCode.Forbidden;

        expect(await res.json()).toStrictEqual({
            success: false,
            errors: [
                {
                    code,
                    path: [
                        "request",
                        "ip",
                    ],
                    message: `${getResponseErrorMessage(code)}: 127.0.0.1`,
                },
            ],
        } satisfies JsonResponse);
    });
});
