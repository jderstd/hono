[@jderstd/hono-openapi](../README.md) / resolver

# Function: resolver()

```ts
function resolver<Schema>(schema, userDefinedOptions?): object;
```

Defined in: node\_modules/.pnpm/hono-openapi@1.1.0\_@standard-community+standard-json@0.3.5\_@standard-schema+spec@1.0.0\_\_5f2c3a73d5963cd70769b36756039d15/node\_modules/hono-openapi/dist/index.d.ts:77

Generate a resolver for a validation schema

## Type Parameters

### Schema

`Schema` *extends* `StandardSchemaV1`\<`unknown`, `unknown`\>

## Parameters

### schema

`Schema`

Validation schema

### userDefinedOptions?

`Record`\<`string`, `unknown`\>

## Returns

`object`

Resolver result

### toJSONSchema()

```ts
toJSONSchema: (customOptions?) => JSONSchema7 | Promise<JSONSchema7>;
```

#### Parameters

##### customOptions?

`Record`\<`string`, `unknown`\>

#### Returns

`JSONSchema7` \| `Promise`\<`JSONSchema7`\>

### toOpenAPISchema()

```ts
toOpenAPISchema: (customOptions?) => Promise<{
  components: ComponentsObject | undefined;
  schema: SchemaObject;
}>;
```

#### Parameters

##### customOptions?

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<\{
  `components`: `ComponentsObject` \| `undefined`;
  `schema`: `SchemaObject`;
\}\>

### validate()

```ts
validate: (value) => Result<unknown> | Promise<Result<unknown>>;
```

#### Parameters

##### value

`unknown`

#### Returns

`Result`\<`unknown`\> \| `Promise`\<`Result`\<`unknown`\>\>

### vendor

```ts
vendor: string;
```
