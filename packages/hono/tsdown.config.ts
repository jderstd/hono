import { defineConfig } from "@apst/tsdown";
import { cjsPreset, dtsPreset, esmPreset } from "@apst/tsdown/presets";

export default defineConfig(
    {
        entry: {
            response: "./src/response/index.ts",
            "response/error/index": "./src/response/error/index.ts",
            "response/error/http": "./src/response/error/http.ts",
            "body-limit": "./src/middlewares/body-limit.ts",
            "ip-limit": "./src/middlewares/ip-limit.ts",
            "time-limit": "./src/middlewares/time-limit.ts",
            "not-found": "./src/handlers/not-found.ts",
            "on-error": "./src/handlers/on-error.ts",
        },
    },
    [
        esmPreset(),
        cjsPreset(),
        dtsPreset({
            presetOptions: {
                performanceMode: true,
            },
        }),
    ],
);
