import type {
    ConnInfo,
    GetIPAddr,
    IPRestrictionRule,
} from "@jderjs/hono/ip-limit";

import { ipLimit } from "@jderjs/hono/ip-limit";
import { createJsonResponse } from "@jderjs/hono/response";
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
            ipLimit({
                getConnInfo,
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
        });
    });

    it("should be forbidden", async (): Promise<void> => {
        const res = await createClient({
            allowList: ["1.1.1.1"],
        }).index.$get();

        expect(res.status).toBe(403);

        expect(await res.json()).toStrictEqual({
            success: false,
            error: {
                code: "forbidden",
            },
        });
    });

    it("should be forbidden with verbose", async (): Promise<void> => {
        const res = await createClient({
            allowList: ["1.1.1.1"],
            verbose: true,
        }).index.$get();

        expect(res.status).toBe(403);

        expect(await res.json()).toStrictEqual({
            success: false,
            error: {
                code: "forbidden",
                field: "ip",
                message: "Forbidden IP address: 127.0.0.1",
            },
        });
    });
});
