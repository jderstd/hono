[@jderstd/hono](../../../../README.md) / [response/error/http](../README.md) / JderHttpException

# Class: JderHttpException

Defined in: [packages/hono/src/response/error/http.ts:11](https://github.com/jderstd/hono/blob/ba30227bcc4bce6293ba3d93b1a6b057cd7c8a51/packages/hono/src/response/error/http.ts#L11)

Jder HTTP exception class extended from `HTTPException`.

## Extends

- `HTTPException`

## Constructors

### Constructor

```ts
new JderHttpException(status?, options?): JderHttpException;
```

Defined in: node\_modules/.pnpm/hono@4.5.0/node\_modules/hono/dist/types/http-exception.d.ts:51

Creates an instance of `HTTPException`.

#### Parameters

##### status?

`StatusCode`

HTTP status code for the exception. Defaults to 500.

##### options?

`HTTPExceptionOptions`

Additional options for the exception.

#### Returns

`JderHttpException`

#### Inherited from

```ts
HTTPException.constructor
```

## Properties

### cause?

```ts
optional cause: unknown;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

```ts
HTTPException.cause
```

***

### message

```ts
message: string;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

```ts
HTTPException.message
```

***

### name

```ts
name: string;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

```ts
HTTPException.name
```

***

### res?

```ts
readonly optional res: Response;
```

Defined in: node\_modules/.pnpm/hono@4.5.0/node\_modules/hono/dist/types/http-exception.d.ts:44

#### Inherited from

```ts
HTTPException.res
```

***

### stack?

```ts
optional stack: string;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

```ts
HTTPException.stack
```

***

### status

```ts
readonly status: StatusCode;
```

Defined in: node\_modules/.pnpm/hono@4.5.0/node\_modules/hono/dist/types/http-exception.d.ts:45

#### Inherited from

```ts
HTTPException.status
```

## Methods

### getResponse()

```ts
getResponse(): Response;
```

Defined in: node\_modules/.pnpm/hono@4.5.0/node\_modules/hono/dist/types/http-exception.d.ts:57

Returns the response object associated with the exception.
If a response object is not provided, a new response is created with the error message and status code.

#### Returns

`Response`

The response object.

#### Inherited from

```ts
HTTPException.getResponse
```
