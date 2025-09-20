/**
 * Response module
 * @module response
 */

export type {
    JsonResponse,
    JsonResponseError,
} from "@jderstd/core";

export type { CreateResponseOptions } from "#/response/common";
export type { CreateJsonResponseOptions } from "#/response/json";

export { createResponse } from "#/response/common";
export { createJsonResponse } from "#/response/json";
