[@jderstd/hono-openapi](../README.md) / DescribeRouteOptions

# Type Alias: DescribeRouteOptions

```ts
type DescribeRouteOptions = Omit<OpenAPIV3_1.OperationObject, "responses" | "operationId"> & object;
```

Defined in: node\_modules/.pnpm/hono-openapi@1.1.0\_@standard-community+standard-json@0.3.5\_@standard-schema+spec@1.0.0\_\_5f2c3a73d5963cd70769b36756039d15/node\_modules/hono-openapi/dist/index.d.ts:193

## Type Declaration

### hide?

```ts
optional hide: boolean | (props) => boolean;
```

Pass `true` to hide route from OpenAPI/swagger document

### operationId?

```ts
optional operationId: OperationId;
```

### responses?

```ts
optional responses: object;
```

Responses of the request

#### Index Signature

```ts
[key: string]: 
  | Omit<ResponseObject, "headers" | "content" | "links"> & object & object
  | ReferenceObject
```
