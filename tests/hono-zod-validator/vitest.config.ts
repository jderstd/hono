import { defineConfig } from "vitest/config";

export default defineConfig({
    optimizeDeps: {
        exclude: [
            "@jderjs/hono",
            "@jderjs/hono-zod-validator",
        ],
    },
    test: {
        logHeapUsage: true,
    },
});
