import { serveStatic } from "@hono/node-server/serve-static";
import { notFoundHandler } from "@jderstd/hono/not-found";
import { onErrorHandler } from "@jderstd/hono/on-error";
import { Hono } from "hono";

import { PUBLIC } from "#/configs";
import { router } from "#/router";

const app: Hono = new Hono();

app.route("/", router);

app.use(
    "*",
    serveStatic({
        root: PUBLIC,
    }),
);

app.notFound(notFoundHandler());

app.onError(
    onErrorHandler({
        verbose: true,
    }),
);

export default app;
