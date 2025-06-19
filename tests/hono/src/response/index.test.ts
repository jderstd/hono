import type { Context } from "hono";

import { createJsonResponse } from "@jderjs/hono/response";
import { Hono } from "hono";
import { setCookie } from "hono/cookie";
import { testClient } from "hono/testing";
import { describe, expect, it } from "vitest";

const app = new Hono()
    .get("/", (): Response => {
        return createJsonResponse();
    })
    .get("/success", (): Response => {
        return createJsonResponse({
            data: {
                message: "Hello, World!",
            },
        });
    })
    .get("/failure", (): Response => {
        return createJsonResponse({
            success: false,
            error: {
                code: "server",
            },
        });
    })
    .get("/cookie", (c: Context): Response => {
        setCookie(c, "key", "value");
        return createJsonResponse(c);
    });

const client = testClient(app);

describe("createJsonResponse test", (): void => {
    it("should work", async (): Promise<void> => {
        const res = await client.index.$get();

        expect(res.status).toBe(200);

        expect(await res.json()).toStrictEqual({
            success: true,
        });
    });

    it("should work with success", async (): Promise<void> => {
        const res = await client.success.$get();

        expect(res.status).toBe(200);

        expect(await res.json()).toStrictEqual({
            success: true,
            data: {
                message: "Hello, World!",
            },
        });
    });

    it("should work with failure", async (): Promise<void> => {
        const res = await client.failure.$get();

        expect(res.status).toBe(400);

        expect(await res.json()).toStrictEqual({
            success: false,
            error: {
                code: "server",
            },
        });
    });

    it("should work with cookie", async (): Promise<void> => {
        const res = await client.cookie.$get();

        expect(res.status).toBe(200);

        expect(res.headers.getSetCookie()).toStrictEqual([
            "key=value; Path=/",
        ]);

        expect(await res.json()).toStrictEqual({
            success: true,
        });
    });
});
