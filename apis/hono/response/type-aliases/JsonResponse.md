[@jderstd/hono](../../README.md) / [response](../README.md) / JsonResponse

# Type Alias: JsonResponse\<D\>

```ts
type JsonResponse<D> = object;
```

Defined in: node\_modules/.pnpm/@jderstd+core@0.4.0/node\_modules/@jderstd/core/dist/@types/response.d.ts:13

JSON response.

## Type Parameters

### D

`D` = `unknown`

## Properties

### data?

```ts
optional data: D;
```

Defined in: node\_modules/.pnpm/@jderstd+core@0.4.0/node\_modules/@jderstd/core/dist/@types/response.d.ts:17

Requested information for the response when `success` is `true`.

***

### errors?

```ts
optional errors: JsonResponseError[];
```

Defined in: node\_modules/.pnpm/@jderstd+core@0.4.0/node\_modules/@jderstd/core/dist/@types/response.d.ts:19

A list of errors for the response when `success` is `false`.

***

### success

```ts
success: boolean;
```

Defined in: node\_modules/.pnpm/@jderstd+core@0.4.0/node\_modules/@jderstd/core/dist/@types/response.d.ts:15

Indicates whether the response is successful or not.
