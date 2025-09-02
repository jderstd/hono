import type { JsonResponse } from "@jderjs/hono/response";

import { notFoundHandler } from "@jderjs/hono/not-found";
import { createJsonResponse } from "@jderjs/hono/response";
import { Hono } from "hono";
import { testClient } from "hono/testing";
import { describe, expect, it } from "vitest";

const app = new Hono()
    .get("/", (): Response => {
        return createJsonResponse();
    })
    .notFound(notFoundHandler());

const client = testClient(app);

describe("Not found test", (): void => {
    it("should work", async (): Promise<void> => {
        const res = await client.index.$get();

        expect(res.status).toBe(200);

        expect(await res.json()).toStrictEqual({
            success: true,
        } satisfies JsonResponse);
    });

    it("should not work", async (): Promise<void> => {
        const res: Response = await app.request("/abc");

        expect(res.status).toBe(404);

        expect(await res.json()).toStrictEqual({
            success: false,
            errors: [
                {
                    code: "not_found",
                    message: "Content not found",
                },
            ],
        } satisfies JsonResponse);
    });
});
