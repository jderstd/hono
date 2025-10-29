import { serveStatic } from "@hono/node-server/serve-static";
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

export default app;
