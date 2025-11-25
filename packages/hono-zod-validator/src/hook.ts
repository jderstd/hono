import type { JsonResponseError } from "@jderstd/hono/response";
import type { Context, Env, TypedResponse, ValidationTargets } from "hono";
import type * as v3 from "zod/v3";
import type * as v4 from "zod/v4/core";

import { createJsonResponse } from "@jderstd/hono/response";
import { ResponseErrorCode } from "@jderstd/hono/response/error";
import { JderHttpException } from "@jderstd/hono/response/error/http";

/** Zod schema for both v3 and v4. */
type ZodSchema = v3.ZodType | v4.$ZodType;

/** Zod error for both v3 and v4. */
type ZodError<T extends ZodSchema> = T extends v4.$ZodType
    ? v4.$ZodError
    : v3.ZodError;

/**
 * Zod validator hook.
 */
const zValidatorHook = <
    T,
    E extends Env,
    P extends string,
    Target extends keyof ValidationTargets = keyof ValidationTargets,
    // biome-ignore lint/complexity/noBannedTypes: any non-nullable value
    O = {},
    Schema extends ZodSchema = any,
>(
    result: (
        | {
              success: true;
              data: T;
          }
        | {
              success: false;
              error: ZodError<Schema>;
          }
    ) & {
        target: Target;
    },
    c: Context<E, P>,
):
    | Response
    | void
    | TypedResponse<O>
    // biome-ignore lint/suspicious/noConfusingVoidType: return type
    | Promise<Response | void | TypedResponse<O>> => {
    if (result.success) return void 0;

    const errors: JsonResponseError[] = [];

    const errs: v4.$ZodIssue[] | v3.ZodIssue[] = result.error.issues;

    for (let i: number = 0; i < errs.length; i++) {
        const err: v4.$ZodIssue | v3.ZodIssue | undefined = errs[i];

        if (!err) continue;

        errors.push({
            code: ResponseErrorCode.Parse,
            path: err.path.map((p): string => p.toString()),
            message: err.message,
        });
    }

    throw new JderHttpException(400, {
        res: createJsonResponse(c, {
            errors,
        }),
    });
};

export type { ZodSchema, ZodError };
export { zValidatorHook };
