import type { JsonResponse } from "@jderstd/hono/response";

import { createJsonResponse } from "@jderstd/hono/response";
import { validator } from "@jderstd/hono-openapi";
import { Hono } from "hono";
import { testClient } from "hono/testing";
import { describe, expect, it } from "vitest";
import { z } from "zod";

const xTest = "x-test" as const;

const header = z.object({
    [xTest]: z.string(),
});

type Header = z.infer<typeof header>;

const param = z.object({
    id: z.string(),
});

type Param = z.infer<typeof param>;

const query = z.object({
    name: z.string(),
});

type Query = z.infer<typeof query>;

const json = z.object({
    name: z.string(),
    age: z.number(),
});

type Json = z.infer<typeof json>;

const app = new Hono()
    .post("/header", validator("header", header), (c): Response => {
        return createJsonResponse(c, {
            data: {
                [xTest]: c.req.valid("header")[xTest],
            },
        });
    })
    .post("/param/:id", validator("param", param), (c): Response => {
        return createJsonResponse(c, {
            data: {
                id: c.req.valid("param").id,
            },
        });
    })
    .post("/query", validator("query", query), (c): Response => {
        return createJsonResponse(c, {
            data: {
                name: c.req.valid("query").name,
            },
        });
    })
    .post("/json", validator("json", json), (c): Response => {
        return createJsonResponse(c, {
            data: {
                name: c.req.valid("json").name,
                age: c.req.valid("json").age,
            },
        });
    });

const client = testClient(app);

describe("Zod validator header test", (): void => {
    it("should work", async (): Promise<void> => {
        const res = await client.header.$post({
            header: {
                [xTest]: "test",
            },
        });

        expect(res.status).toBe(200);

        const result: JsonResponse<Header> =
            (await res.json()) as JsonResponse<Header>;

        expect(result.success).toBe(true);

        expect(result.data?.[xTest]).toBe("test");
    });

    it("should not work with empty header", async (): Promise<void> => {
        // @ts-expect-error
        const res = await client.header.$post();

        expect(res.status).toBe(400);

        const result: JsonResponse = (await res.json()) as JsonResponse;

        expect(result.success).toBe(false);

        expect(result.errors?.[0]?.code).toBe("parse");

        expect(result.errors?.[0]?.path).toStrictEqual([
            xTest,
        ]);
    });
});

describe("Zod validator param test", (): void => {
    it("should work", async (): Promise<void> => {
        const res = await client.param[":id"].$post({
            param: {
                id: "ABC123",
            },
        });

        expect(res.status).toBe(200);

        const result: JsonResponse<Param> =
            (await res.json()) as JsonResponse<Param>;

        expect(result.success).toBe(true);

        expect(result.data?.id).toBe("ABC123");
    });
});

describe("Zod validator query test", (): void => {
    it("should work", async (): Promise<void> => {
        const res = await client.query.$post({
            query: {
                name: "Alpheus",
            },
        });

        expect(res.status).toBe(200);

        const result: JsonResponse<Query> =
            (await res.json()) as JsonResponse<Query>;

        expect(result.success).toBe(true);

        expect(result.data?.name).toBe("Alpheus");
    });

    it("should not work with empty name", async (): Promise<void> => {
        // @ts-expect-error
        const res = await client.query.$post();

        // expect(res.status).toBe(400);

        const result: JsonResponse = (await res.json()) as JsonResponse;

        expect(result.success).toBe(false);

        expect(result.errors?.[0]?.code).toBe("parse");

        expect(result.errors?.[0]?.path).toStrictEqual([
            "name",
        ]);
    });
});

describe("Zod validator json test", (): void => {
    it("should work", async (): Promise<void> => {
        const res = await client.json.$post({
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
        const res = await client.json.$post({
            // @ts-expect-error
            json: {
                name: "Alpheus",
            },
        });

        expect(res.status).toBe(400);

        const result: JsonResponse = (await res.json()) as JsonResponse;

        expect(result.success).toBe(false);

        expect(result.errors?.[0]?.code).toBe("parse");

        expect(result.errors?.[0]?.path).toStrictEqual([
            "age",
        ]);
    });

    it("should not work with empty name", async (): Promise<void> => {
        const res = await client.json.$post({
            // @ts-expect-error
            json: {
                age: 99,
            },
        });

        expect(res.status).toBe(400);

        const result: JsonResponse = (await res.json()) as JsonResponse;

        expect(result.success).toBe(false);

        expect(result.errors?.[0]?.code).toBe("parse");

        expect(result.errors?.[0]?.path).toStrictEqual([
            "name",
        ]);
    });

    it("should not work with name in number", async (): Promise<void> => {
        const res = await client.json.$post({
            json: {
                // @ts-expect-error
                name: 99,
                age: 99,
            },
        });

        expect(res.status).toBe(400);

        const result: JsonResponse = (await res.json()) as JsonResponse;

        expect(result.success).toBe(false);

        expect(result.errors?.[0]?.code).toBe("parse");

        expect(result.errors?.[0]?.path).toStrictEqual([
            "name",
        ]);
    });
});
