import * as Path from "node:path";
import * as Process from "node:process";

import { MarkdownPageEvent } from "typedoc-plugin-markdown";

/**
 * @param {import("typedoc-plugin-markdown").MarkdownApplication} app
 * @returns {void}
 */
export const load = (app) => {
    app.renderer.on(MarkdownPageEvent.END, insert);
};

/**
 * @param {string} name
 * @returns {string}
 */
const buildPath = (name) => {
    return Path.resolve(Process.cwd(), "..", "..", "apis", name, "README.md");
};

const list = [
    buildPath("hono"),
    buildPath("hono-standard-validator"),
    buildPath("hono-zod-validator"),
    buildPath("hono-openapi"),
];

/**
 * @param {import("typedoc-plugin-markdown").MarkdownPageEvent} page
 * @returns {void}
 */
const insert = (page) => {
    if (list.includes(page.filename)) {
        const head = "[< Back](./../../README.md)\n\n";
        page.contents = head + page.contents;
    }
};
