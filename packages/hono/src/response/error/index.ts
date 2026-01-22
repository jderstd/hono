/**
 * Response error module
 * @module response/error
 */

/**
 * Response error code.
 */
enum ResponseErrorCode {
    /**
     * Request body is too large.
     *
     * For `bodyLimit` middleware.
     */
    TooLarge = "too_large",
    /**
     * Forbidden access.
     *
     * For `ipLimit` middleware.
     */
    Forbidden = "forbidden",
    /**
     * Request timeout.
     *
     * For `timeLimit` middleware.
     */
    Timeout = "timeout",
    /**
     * Content not found.
     *
     * For `notFoundHandler` function.
     */
    NotFound = "not_found",
    /**
     * Bad request.
     *
     * For `onErrorHandler` function.
     */
    BadRequest = "bad_request",
    /**
     * Internal server error.
     *
     * For `onErrorHandler` function.
     */
    Server = "server",
    /**
     * Validation error.
     *
     * For validator package.
     */
    Parse = "parse",
}

/**
 * Response error message.
 */
enum ResponseErrorMessage {
    /**
     * Request body is too large.
     *
     * For `bodyLimit` middleware.
     */
    TooLarge = "Request body is too large",
    /**
     * Forbidden access.
     *
     * For `ipLimit` middleware.
     */
    Forbidden = "Forbidden IP address",
    /**
     * Request timeout.
     *
     * For `timeLimit` middleware.
     */
    Timeout = "Gateway timeout",
    /**
     * Content not found.
     *
     * For `notFoundHandler` function.
     */
    NotFound = "Content not found",
    /**
     * Bad request.
     *
     * For `onErrorHandler` function.
     */
    BadRequest = "Bad request",
    /**
     * Internal server error.
     *
     * For `onErrorHandler` function.
     */
    Server = "Internal server error",
    /**
     * Validation error.
     *
     * For validator package.
     */
    Parse = "Failed to parse the request",
}

/**
 * Get response error message by code.
 */
const getResponseErrorMessage = (
    code: ResponseErrorCode,
): ResponseErrorMessage => {
    switch (code) {
        case ResponseErrorCode.TooLarge: {
            return ResponseErrorMessage.TooLarge;
        }
        case ResponseErrorCode.Forbidden: {
            return ResponseErrorMessage.Forbidden;
        }
        case ResponseErrorCode.Timeout: {
            return ResponseErrorMessage.Timeout;
        }
        case ResponseErrorCode.NotFound: {
            return ResponseErrorMessage.NotFound;
        }
        case ResponseErrorCode.BadRequest: {
            return ResponseErrorMessage.BadRequest;
        }
        case ResponseErrorCode.Server: {
            return ResponseErrorMessage.Server;
        }
        case ResponseErrorCode.Parse: {
            return ResponseErrorMessage.Parse;
        }
    }
};

export { ResponseErrorCode, ResponseErrorMessage, getResponseErrorMessage };
