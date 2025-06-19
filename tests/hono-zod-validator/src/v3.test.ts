import type { JsonResponse } from "@jderjs/hono/response";

import { createJsonResponse } from "@jderjs/hono/response";
import { zValidator } from "@jderjs/hono-zod-validator";
import { Hono } from "hono";
import { testClient } from "hono/testing";
import { describe, expect, it } from "vitest";
import { z } from "zod/v3";

const json = z.object({
    name: z.string(),
    age: z.number(),
});

type Json = z.infer<typeof json>;

const app = new Hono().post("/", zValidator("json", json), (c): Response => {
    return createJsonResponse(c, {
        data: {
            name: c.req.valid("json").name,
            age: c.req.valid("json").age,
        },
    });
});

const client = testClient(app);

describe("Zod validator test", (): void => {
    it("should work", async (): Promise<void> => {
        const res = await client.index.$post({
            json: {
                name: "Alpheus",
                age: 99,
            },
        });

        expect(res.status).toBe(200);

        const result: JsonResponse<Json> =
            (await res.json()) as JsonResponse<Json>;

        expect(result.success).toBe(true);

        expect(result.data?.name).toBe("Alpheus");

        expect(result.data?.age).toBe(99);
    });

    it("should not work with empty age", async (): Promise<void> => {
        const res = await client.index.$post({
            // @ts-expect-error
            json: {
                name: "Alpheus",
            },
        });

        expect(res.status).toBe(400);

        const result: JsonResponse = (await res.json()) as JsonResponse;

        expect(result.success).toBe(false);

        expect(result.error?.code).toBe("invalid");

        expect(result.error?.field).toBe("age");
    });

    it("should not work with empty name", async (): Promise<void> => {
        const res = await client.index.$post({
            // @ts-expect-error
            json: {
                age: 99,
            },
        });

        expect(res.status).toBe(400);

        const result: JsonResponse = (await res.json()) as JsonResponse;

        expect(result.success).toBe(false);

        expect(result.error?.code).toBe("invalid");

        expect(result.error?.field).toBe("name");
    });

    it("should not work with name in number", async (): Promise<void> => {
        const res = await client.index.$post({
            json: {
                // @ts-expect-error
                name: 99,
                age: 99,
            },
        });

        expect(res.status).toBe(400);

        const result: JsonResponse = (await res.json()) as JsonResponse;

        expect(result.success).toBe(false);

        expect(result.error?.code).toBe("invalid");

        expect(result.error?.field).toBe("name");
    });
});
