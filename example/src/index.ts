import { getConnInfo } from "@hono/node-server/conninfo";
import { serveStatic } from "@hono/node-server/serve-static";
import { bodyLimit } from "@jderjs/hono/body-limit";
import { ipLimit } from "@jderjs/hono/ip-limit";
import { timeLimit } from "@jderjs/hono/time-limit";
import { Hono } from "hono";
import { cors } from "hono/cors";

import { PUBLIC } from "#/configs";
import { router } from "#/router";

const app: Hono = new Hono();

app.use(cors());

app.use(
    ipLimit({
        getConnInfo,
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

app.use("*", serveStatic({ root: PUBLIC }));

export default app;
