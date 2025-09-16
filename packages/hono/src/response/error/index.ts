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
 * Get response error message by code.
 */
const getResponseErrorMessage = (code: ResponseErrorCode): string => {
    switch (code) {
        case ResponseErrorCode.TooLarge: {
            return "Request body is too large";
        }
        case ResponseErrorCode.Forbidden: {
            return "Forbidden IP address";
        }
        case ResponseErrorCode.Timeout: {
            return "Gateway timeout";
        }
        case ResponseErrorCode.NotFound: {
            return "Content not found";
        }
        case ResponseErrorCode.BadRequest: {
            return "Bad request";
        }
        case ResponseErrorCode.Server: {
            return "Internal server error";
        }
        case ResponseErrorCode.Parse: {
            return "Failed to parse the request";
        }
    }
};

export { ResponseErrorCode, getResponseErrorMessage };
