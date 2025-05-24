import type { Options } from "tsup";

import { defineConfig } from "tsup";

const options: Options = {
    entry: {
        response: "./src/response/index.ts",
        "body-limit": "./src/middlewares/body-limit.ts",
        "ip-limit": "./src/middlewares/ip-limit.ts",
        "time-limit": "./src/middlewares/time-limit.ts",
    },
    sourcemap: true,
    clean: true,
    outDir: "./dist",
    platform: "neutral",
    tsconfig: "./tsconfig.json",
};

export default defineConfig([
    {
        ...options,
        format: "esm",
    },
    {
        ...options,
        format: "cjs",
        dts: true,
    },
]);
