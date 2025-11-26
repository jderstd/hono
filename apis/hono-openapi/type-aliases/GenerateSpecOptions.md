[@jderstd/hono-openapi](../README.md) / GenerateSpecOptions

# Type Alias: GenerateSpecOptions

```ts
type GenerateSpecOptions = object;
```

Defined in: node\_modules/.pnpm/hono-openapi@1.1.0\_@standard-community+standard-json@0.3.5\_@standard-schema+spec@1.0.0\_\_5f2c3a73d5963cd70769b36756039d15/node\_modules/hono-openapi/dist/index.d.ts:154

## Properties

### defaultOptions

```ts
defaultOptions: Partial<Record<AllowedMethods | "ALL", DescribeRouteOptions>>;
```

Defined in: node\_modules/.pnpm/hono-openapi@1.1.0\_@standard-community+standard-json@0.3.5\_@standard-schema+spec@1.0.0\_\_5f2c3a73d5963cd70769b36756039d15/node\_modules/hono-openapi/dist/index.d.ts:190

Default options for `describeRoute` method

***

### documentation

```ts
documentation: Omit<Partial<OpenAPIV3_1.Document>, 
  | "x-express-openapi-additional-middleware"
| "x-express-openapi-validation-strict">;
```

Defined in: node\_modules/.pnpm/hono-openapi@1.1.0\_@standard-community+standard-json@0.3.5\_@standard-schema+spec@1.0.0\_\_5f2c3a73d5963cd70769b36756039d15/node\_modules/hono-openapi/dist/index.d.ts:160

Customize OpenAPI config, refers to Swagger 2.0 config

#### See

https://swagger.io/specification/v2/

***

### exclude

```ts
exclude: string | RegExp | (string | RegExp)[];
```

Defined in: node\_modules/.pnpm/hono-openapi@1.1.0\_@standard-community+standard-json@0.3.5\_@standard-schema+spec@1.0.0\_\_5f2c3a73d5963cd70769b36756039d15/node\_modules/hono-openapi/dist/index.d.ts:178

Paths to exclude from OpenAPI endpoint

#### Default

```ts
[]
```

***

### excludeMethods

```ts
excludeMethods: AllowedMethods[];
```

Defined in: node\_modules/.pnpm/hono-openapi@1.1.0\_@standard-community+standard-json@0.3.5\_@standard-schema+spec@1.0.0\_\_5f2c3a73d5963cd70769b36756039d15/node\_modules/hono-openapi/dist/index.d.ts:182

Exclude methods from the specs

***

### excludeStaticFile

```ts
excludeStaticFile: boolean;
```

Defined in: node\_modules/.pnpm/hono-openapi@1.1.0\_@standard-community+standard-json@0.3.5\_@standard-schema+spec@1.0.0\_\_5f2c3a73d5963cd70769b36756039d15/node\_modules/hono-openapi/dist/index.d.ts:172

Determine if Swagger should exclude static files.

#### Default

```ts
true
```

***

### excludeTags

```ts
excludeTags: string[];
```

Defined in: node\_modules/.pnpm/hono-openapi@1.1.0\_@standard-community+standard-json@0.3.5\_@standard-schema+spec@1.0.0\_\_5f2c3a73d5963cd70769b36756039d15/node\_modules/hono-openapi/dist/index.d.ts:186

Exclude tags from OpenAPI

***

### includeEmptyPaths

```ts
includeEmptyPaths: boolean;
```

Defined in: node\_modules/.pnpm/hono-openapi@1.1.0\_@standard-community+standard-json@0.3.5\_@standard-schema+spec@1.0.0\_\_5f2c3a73d5963cd70769b36756039d15/node\_modules/hono-openapi/dist/index.d.ts:166

Include paths which don't have the handlers.
This is useful when you want to document the
API without implementing it or index all the paths.
