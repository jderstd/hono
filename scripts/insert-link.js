import * as path from "node:path";

import { MarkdownPageEvent } from "typedoc-plugin-markdown";

/**
 * @param {import("typedoc-plugin-markdown").MarkdownApplication} app
 */
export const load = (app) => {
    app.renderer.on(MarkdownPageEvent.END, insert);
};

const list = [
    path.resolve(process.cwd(), "..", "..", "apis", "hono", "README.md"),
    path.resolve(
        process.cwd(),
        "..",
        "..",
        "apis",
        "hono-standard-validator",
        "README.md",
    ),
    path.resolve(
        process.cwd(),
        "..",
        "..",
        "apis",
        "hono-zod-validator",
        "README.md",
    ),
];

/**
 * @param {import("typedoc-plugin-markdown").MarkdownPageEvent} page
 */
const insert = (page) => {
    if (list.includes(page.filename)) {
        const head = "[< Back](./../../README.md)\n\n";
        page.contents = head + page.contents;
    }
};
