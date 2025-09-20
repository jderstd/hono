import { defineConfig } from "vitest/config";

export default defineConfig({
    optimizeDeps: {
        exclude: [
            "@jderstd/hono",
            "@jderstd/hono-zod-validator",
        ],
    },
    test: {
        logHeapUsage: true,
    },
});
