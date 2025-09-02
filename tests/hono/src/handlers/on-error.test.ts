import type { JsonResponse } from "@jderjs/hono/response";

import { onErrorHandler } from "@jderjs/hono/on-error";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { testClient } from "hono/testing";
import { describe, expect, it } from "vitest";

const app = new Hono()
    .get("/", (): Response => {
        throw new Error("abc");
    })
    .get("/http", (): Response => {
        throw new HTTPException(500, {
            message: "Internal server error",
        });
    })
    .onError(
        onErrorHandler({
            verbose: true,
        }),
    );

const client = testClient(app);

describe("On error test", (): void => {
    it("should throw Error", async (): Promise<void> => {
        const res = await client.index.$get();

        expect(res.status).toBe(500);

        expect(await res.json()).toStrictEqual({
            success: false,
            errors: [
                {
                    code: "server",
                    message: "abc",
                },
            ],
        } satisfies JsonResponse);
    });

    it("should throw HTTPException", async (): Promise<void> => {
        const res = await client.http.$get();

        expect(res.status).toBe(500);

        expect(await res.json()).toStrictEqual({
            success: false,
            errors: [
                {
                    code: "server",
                    message: "Internal server error",
                },
            ],
        } satisfies JsonResponse);
    });
});
