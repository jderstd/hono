[@jderstd/hono](../../../README.md) / [response/error](../README.md) / ResponseErrorCode

# Enumeration: ResponseErrorCode

Defined in: [packages/hono/src/response/error/index.ts:9](https://github.com/jderstd/hono/blob/9b33b7a2db9d95365aa7ce18087da7a31e14229a/packages/hono/src/response/error/index.ts#L9)

Response error code.

## Enumeration Members

### BadRequest

```ts
BadRequest: "bad_request";
```

Defined in: [packages/hono/src/response/error/index.ts:39](https://github.com/jderstd/hono/blob/9b33b7a2db9d95365aa7ce18087da7a31e14229a/packages/hono/src/response/error/index.ts#L39)

Bad request.

For `onErrorHandler` function.

***

### Forbidden

```ts
Forbidden: "forbidden";
```

Defined in: [packages/hono/src/response/error/index.ts:21](https://github.com/jderstd/hono/blob/9b33b7a2db9d95365aa7ce18087da7a31e14229a/packages/hono/src/response/error/index.ts#L21)

Forbidden access.

For `ipLimit` middleware.

***

### NotFound

```ts
NotFound: "not_found";
```

Defined in: [packages/hono/src/response/error/index.ts:33](https://github.com/jderstd/hono/blob/9b33b7a2db9d95365aa7ce18087da7a31e14229a/packages/hono/src/response/error/index.ts#L33)

Content not found.

For `notFoundHandler` function.

***

### Parse

```ts
Parse: "parse";
```

Defined in: [packages/hono/src/response/error/index.ts:51](https://github.com/jderstd/hono/blob/9b33b7a2db9d95365aa7ce18087da7a31e14229a/packages/hono/src/response/error/index.ts#L51)

Validation error.

For validator package.

***

### Server

```ts
Server: "server";
```

Defined in: [packages/hono/src/response/error/index.ts:45](https://github.com/jderstd/hono/blob/9b33b7a2db9d95365aa7ce18087da7a31e14229a/packages/hono/src/response/error/index.ts#L45)

Internal server error.

For `onErrorHandler` function.

***

### Timeout

```ts
Timeout: "timeout";
```

Defined in: [packages/hono/src/response/error/index.ts:27](https://github.com/jderstd/hono/blob/9b33b7a2db9d95365aa7ce18087da7a31e14229a/packages/hono/src/response/error/index.ts#L27)

Request timeout.

For `timeLimit` middleware.

***

### TooLarge

```ts
TooLarge: "too_large";
```

Defined in: [packages/hono/src/response/error/index.ts:15](https://github.com/jderstd/hono/blob/9b33b7a2db9d95365aa7ce18087da7a31e14229a/packages/hono/src/response/error/index.ts#L15)

Request body is too large.

For `bodyLimit` middleware.
