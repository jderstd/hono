import { defineConfig } from "vitest/config";

export default defineConfig({
    optimizeDeps: {
        exclude: [
            "@jderstd/hono",
            "@jderstd/hono-openapi",
        ],
    },
    test: {
        logHeapUsage: true,
    },
});
