import type { JsonResponseError } from "@jderstd/hono/response";
import type { StandardSchemaV1 } from "@standard-schema/spec";
import type { Context } from "hono";
import type { Env, TypedResponse, ValidationTargets } from "hono/types";

import { createJsonResponse } from "@jderstd/hono/response";
import { ResponseErrorCode } from "@jderstd/hono/response/error";
import { JderHttpException } from "@jderstd/hono/response/error/http";

const sValidatorHook = <
    T,
    E extends Env,
    P extends string,
    Target extends keyof ValidationTargets = keyof ValidationTargets,
    // biome-ignore lint/complexity/noBannedTypes: any non-nullable value
    O = {},
>(
    result: (
        | {
              success: true;
              data: T;
          }
        | {
              success: false;
              error: readonly StandardSchemaV1.Issue[];
              data: T;
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

    const errs: readonly StandardSchemaV1.Issue[] = result.error;

    for (let i: number = 0; i < errs.length; i++) {
        const err: StandardSchemaV1.Issue | undefined = errs[i];

        if (!err) continue;

        const path: string[] =
            err.path?.map(
                (p: PropertyKey | StandardSchemaV1.PathSegment): string => {
                    if (typeof p === "object") return p.key.toString();
                    return p.toString();
                },
            ) ?? [];

        errors.push({
            code: ResponseErrorCode.Parse,
            path,
            message: err.message,
        });
    }

    throw new JderHttpException(400, {
        res: createJsonResponse(c, {
            errors,
        }),
    });
};

export { sValidatorHook };
