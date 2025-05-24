import * as path from "node:path";

import { MarkdownPageEvent } from "typedoc-plugin-markdown";

/**
 * @param {import("typedoc-plugin-markdown").MarkdownApplication} app
 */
export const load = (app) => {
    app.renderer.on(MarkdownPageEvent.END, insert);
};

const hono = path.resolve(
    process.cwd(),
    "..",
    "..",
    "apis",
    "hono",
    "README.md",
);

const zv = path.resolve(
    process.cwd(),
    "..",
    "..",
    "apis",
    "hono-zod-validator",
    "README.md",
);

/**
 * @param {import("typedoc-plugin-markdown").MarkdownPageEvent} page
 */
const insert = (page) => {
    if (page.filename === hono || page.filename === zv) {
        const head = "[< Back](./../../README.md)\n\n";
        page.contents = head + page.contents;
    }
};
