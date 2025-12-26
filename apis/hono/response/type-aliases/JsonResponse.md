[@jderstd/hono](../../README.md) / [response](../README.md) / JsonResponse

# Type Alias: JsonResponse\<D\>

```ts
type JsonResponse<D> = object;
```

Defined in: node\_modules/.pnpm/@jderstd+core@0.5.0/node\_modules/@jderstd/core/dist/@types/response.d.ts:16

JSON response.

## Type Parameters

### D

`D` = `unknown`

## Properties

### data

```ts
data: D | null;
```

Defined in: node\_modules/.pnpm/@jderstd+core@0.5.0/node\_modules/@jderstd/core/dist/@types/response.d.ts:20

Requested information for the response when `success` is `true`.

***

### errors

```ts
errors: JsonResponseError[];
```

Defined in: node\_modules/.pnpm/@jderstd+core@0.5.0/node\_modules/@jderstd/core/dist/@types/response.d.ts:22

A list of errors for the response when `success` is `false`.

***

### success

```ts
success: boolean;
```

Defined in: node\_modules/.pnpm/@jderstd+core@0.5.0/node\_modules/@jderstd/core/dist/@types/response.d.ts:18

Indicates whether the response is successful or not.
