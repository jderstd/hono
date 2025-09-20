import { defineConfig } from "vitest/config";

export default defineConfig({
    optimizeDeps: {
        exclude: [
            "@jderstd/hono",
        ],
    },
    test: {
        logHeapUsage: true,
    },
});
