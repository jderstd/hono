import * as path from "node:path";

export const ROOT: string = path.resolve(process.cwd());

export const PUBLIC: string = path.relative(ROOT, path.join(ROOT, "public"));
