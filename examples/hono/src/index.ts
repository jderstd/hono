import { getConnInfo } from "@hono/node-server/conninfo";
import { serveStatic } from "@hono/node-server/serve-static";
import { bodyLimit } from "@jderjs/hono/body-limit";
import { ipLimit } from "@jderjs/hono/ip-limit";
import { notFoundHandler } from "@jderjs/hono/not-found";
import { onErrorHandler } from "@jderjs/hono/on-error";
import { timeLimit } from "@jderjs/hono/time-limit";
import { Hono } from "hono";

import { PUBLIC } from "#/configs";
import { router } from "#/router";

const app: Hono = new Hono();

app.use(
    ipLimit({
        getConnInfo,
        verbose: true,
    }),
);

app.use(
    bodyLimit({
        max: 10 * 1024 * 1024,
    }),
);

app.use(
    timeLimit({
        max: 10 * 1000,
    }),
);

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
