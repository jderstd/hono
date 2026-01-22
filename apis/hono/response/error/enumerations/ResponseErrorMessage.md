[@jderstd/hono](../../../README.md) / [response/error](../README.md) / ResponseErrorMessage

# Enumeration: ResponseErrorMessage

Defined in: [packages/hono/src/response/error/index.ts:57](https://github.com/jderstd/hono/blob/9b33b7a2db9d95365aa7ce18087da7a31e14229a/packages/hono/src/response/error/index.ts#L57)

Response error message.

## Enumeration Members

### BadRequest

```ts
BadRequest: "Bad request";
```

Defined in: [packages/hono/src/response/error/index.ts:87](https://github.com/jderstd/hono/blob/9b33b7a2db9d95365aa7ce18087da7a31e14229a/packages/hono/src/response/error/index.ts#L87)

Bad request.

For `onErrorHandler` function.

***

### Forbidden

```ts
Forbidden: "Forbidden IP address";
```

Defined in: [packages/hono/src/response/error/index.ts:69](https://github.com/jderstd/hono/blob/9b33b7a2db9d95365aa7ce18087da7a31e14229a/packages/hono/src/response/error/index.ts#L69)

Forbidden access.

For `ipLimit` middleware.

***

### NotFound

```ts
NotFound: "Content not found";
```

Defined in: [packages/hono/src/response/error/index.ts:81](https://github.com/jderstd/hono/blob/9b33b7a2db9d95365aa7ce18087da7a31e14229a/packages/hono/src/response/error/index.ts#L81)

Content not found.

For `notFoundHandler` function.

***

### Parse

```ts
Parse: "Failed to parse the request";
```

Defined in: [packages/hono/src/response/error/index.ts:99](https://github.com/jderstd/hono/blob/9b33b7a2db9d95365aa7ce18087da7a31e14229a/packages/hono/src/response/error/index.ts#L99)

Validation error.

For validator package.

***

### Server

```ts
Server: "Internal server error";
```

Defined in: [packages/hono/src/response/error/index.ts:93](https://github.com/jderstd/hono/blob/9b33b7a2db9d95365aa7ce18087da7a31e14229a/packages/hono/src/response/error/index.ts#L93)

Internal server error.

For `onErrorHandler` function.

***

### Timeout

```ts
Timeout: "Gateway timeout";
```

Defined in: [packages/hono/src/response/error/index.ts:75](https://github.com/jderstd/hono/blob/9b33b7a2db9d95365aa7ce18087da7a31e14229a/packages/hono/src/response/error/index.ts#L75)

Request timeout.

For `timeLimit` middleware.

***

### TooLarge

```ts
TooLarge: "Request body is too large";
```

Defined in: [packages/hono/src/response/error/index.ts:63](https://github.com/jderstd/hono/blob/9b33b7a2db9d95365aa7ce18087da7a31e14229a/packages/hono/src/response/error/index.ts#L63)

Request body is too large.

For `bodyLimit` middleware.
