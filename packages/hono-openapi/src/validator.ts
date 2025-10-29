import type { StandardSchemaV1 } from "@standard-schema/spec";
import type { ValidationTargets } from "hono/types";

import { sValidatorHook } from "@jderstd/hono-standard-validator/hook";
import { validator as va } from "hono-openapi";

/**
 * Create a validator middleware.
 */
const validator = <
    Target extends keyof ValidationTargets,
    Schema extends StandardSchemaV1,
>(
    target: Target,
    schema: Schema,
) => {
    return va(target, schema, sValidatorHook);
};

export { validator };
