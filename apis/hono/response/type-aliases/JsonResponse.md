[@jderjs/hono](../../README.md) / [response](../README.md) / JsonResponse

# Type Alias: JsonResponse\<D\>

```ts
type JsonResponse<D> = object;
```

Defined in: node\_modules/.pnpm/@jderjs+core@0.2.0/node\_modules/@jderjs/core/dist/@types/response.d.ts:13

JSON response.

## Type Parameters

### D

`D` = `unknown`

## Properties

### data?

```ts
optional data: D;
```

Defined in: node\_modules/.pnpm/@jderjs+core@0.2.0/node\_modules/@jderjs/core/dist/@types/response.d.ts:17

Data for the response when `success` is `true`.

***

### error?

```ts
optional error: JsonResponseError;
```

Defined in: node\_modules/.pnpm/@jderjs+core@0.2.0/node\_modules/@jderjs/core/dist/@types/response.d.ts:19

Error for the response when `success` is `false`.

***

### success

```ts
success: boolean;
```

Defined in: node\_modules/.pnpm/@jderjs+core@0.2.0/node\_modules/@jderjs/core/dist/@types/response.d.ts:15

Whether the response is successful.
