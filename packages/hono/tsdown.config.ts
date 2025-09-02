import type { Options } from "tsdown";

import { defineConfig } from "tsdown";

const options: Options = {
    entry: {
        response: "./src/response/index.ts",
        "body-limit": "./src/middlewares/body-limit.ts",
        "ip-limit": "./src/middlewares/ip-limit.ts",
        "time-limit": "./src/middlewares/time-limit.ts",
        "not-found": "./src/handlers/not-found.ts",
        "on-error": "./src/handlers/on-error.ts",
    },
    dts: false,
    outDir: "./dist",
    clean: true,
    platform: "neutral",
    treeshake: true,
    sourcemap: true,
    minify: false,
    shims: true,
    unbundle: true,
    inputOptions: {
        experimental: {
            attachDebugInfo: "none",
        },
    },
};

export default defineConfig([
    {
        ...options,
        format: "esm",
    },
    {
        ...options,
        dts: true,
        format: "cjs",
    },
]);
