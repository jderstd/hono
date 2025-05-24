[@jderjs/hono](../../README.md) / [Response](../README.md) / JsonResponse

# Type Alias: JsonResponse\<D\>

```ts
type JsonResponse<D> = object;
```

Defined in: node\_modules/.pnpm/@jderjs+core@0.1.1/node\_modules/@jderjs/core/dist/index-CZbF0ThU.d.ts:71

JSON response.

## Type Parameters

### D

`D` = `unknown`

## Properties

### data?

```ts
optional data: D;
```

Defined in: node\_modules/.pnpm/@jderjs+core@0.1.1/node\_modules/@jderjs/core/dist/index-CZbF0ThU.d.ts:75

Data for the response when `success` is `true`.

***

### error?

```ts
optional error: JsonResponseError;
```

Defined in: node\_modules/.pnpm/@jderjs+core@0.1.1/node\_modules/@jderjs/core/dist/index-CZbF0ThU.d.ts:77

Error for the response when `success` is `false`.

***

### success

```ts
success: boolean;
```

Defined in: node\_modules/.pnpm/@jderjs+core@0.1.1/node\_modules/@jderjs/core/dist/index-CZbF0ThU.d.ts:73

Whether the response is successful.
