import { bodyLimit } from "@jderjs/hono/body-limit";
import { createJsonResponse } from "@jderjs/hono/response";
import { Hono } from "hono";
import { testClient } from "hono/testing";
import { describe, expect, it } from "vitest";

const app = new Hono()
    .use(
        bodyLimit({
            max: 10 * 1024 * 1024,
        }),
    )
    .post("/", async (c): Promise<Response> => {
        const contentType = c.req.header("Content-Type") || "";

        if (
            contentType.includes("multipart/form-data") ||
            contentType.includes("application/x-www-form-urlencoded")
        ) {
            const body = await c.req.parseBody();

            const file = body.file;

            if (!(file instanceof File)) {
                return createJsonResponse({
                    success: false,
                    status: 400,
                    error: {
                        code: "invalid",
                    },
                });
            }

            if (file) {
                return createJsonResponse({
                    data: {
                        name: file.name,
                        size: file.size,
                    },
                });
            }

            return createJsonResponse();
        }

        return createJsonResponse();
    });

const client = testClient(app);

describe("Body limit test", (): void => {
    it("should work", async (): Promise<void> => {
        const res = await client.index.$post();

        expect(res.status).toBe(200);

        expect(await res.json()).toStrictEqual({
            success: true,
        });
    });

    it("should not be limited", async (): Promise<void> => {
        const data = new FormData();
        data.append(
            "file",
            new Blob(["a".repeat(9 * 1024 * 1024)], {
                type: "text/plain",
            }),
            "text.txt",
        );

        const res = await client.index.$post(
            {},
            {
                init: {
                    body: data,
                },
            },
        );

        expect(res.status).toBe(200);

        expect(await res.json()).toStrictEqual({
            success: true,
            data: {
                name: "text.txt",
                size: 9 * 1024 * 1024,
            },
        });
    });

    it("should be limited", async (): Promise<void> => {
        const data = new FormData();
        data.append(
            "file",
            new Blob(["a".repeat(10 * 1024 * 1024)], {
                type: "text/plain",
            }),
            "text.txt",
        );

        const res = await client.index.$post(
            {},
            {
                init: {
                    body: data,
                },
            },
        );

        expect(res.status).toBe(413);

        expect(await res.json()).toStrictEqual({
            success: false,
            error: {
                code: "too_large",
                field: "body",
            },
        });
    });
});
