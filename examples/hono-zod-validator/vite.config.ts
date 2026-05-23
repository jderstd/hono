import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vitend } from "vitend/vite";

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        vitend(),
    ],
});
