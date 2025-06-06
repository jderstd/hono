import { defineConfig } from "vitest/config";

export default defineConfig({
    optimizeDeps: {
        exclude: ["@jderjs/hono"],
    },
    test: {
        logHeapUsage: true,
    },
});
