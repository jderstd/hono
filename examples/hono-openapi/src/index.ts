import { serveStatic } from "@hono/node-server/serve-static";
import { onErrorHandler } from "@jderstd/hono/on-error";
import { openAPIRouteHandler } from "@jderstd/hono-openapi";
import { Scalar } from "@scalar/hono-api-reference";
import { Hono } from "hono";

import { PUBLIC } from "#/configs";
import { router } from "#/router";

const app: Hono = new Hono();

app.route("/", router);

app.get(
    "/openapi.json",
    openAPIRouteHandler(router, {
        documentation: {
            info: {
                title: "JDER Hono OpenAPI Example",
                version: "1.0.0",
                description: "This is a JDER Hono OpenAPI example.",
            },
        },
    }),
);

app.get(
    "/openapi",
    Scalar({
        theme: "default",
        url: "/openapi.json",
    }),
);

app.use(
    "*",
    serveStatic({
        root: PUBLIC,
    }),
);

app.onError(onErrorHandler());

export default app;
