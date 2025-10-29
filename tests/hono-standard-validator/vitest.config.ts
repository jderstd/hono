import { defineConfig } from "vitest/config";

export default defineConfig({
    optimizeDeps: {
        exclude: [
            "@jderstd/hono",
            "@jderstd/hono-standard-validator",
        ],
    },
    test: {
        logHeapUsage: true,
    },
});
