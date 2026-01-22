/**
 * HTTP response error module
 * @module response/error/http
 */

import { HTTPException } from "hono/http-exception";

/**
 * Jder HTTP exception class extended from `HTTPException`.
 */
class JderHttpException extends HTTPException {}

export { JderHttpException };
