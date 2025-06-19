import build from "@hono/vite-build/node";
import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        devServer({
            entry: "./src/index.ts",
            adapter,
        }),
        build({
            port: 4000,
            entry: "./src/index.ts",
            minify: true,
            emptyOutDir: true,
        }),
    ],
    server: {
        port: 4001,
    },
});
