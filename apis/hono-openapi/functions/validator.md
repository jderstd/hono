[@jderstd/hono-openapi](../README.md) / validator

# Function: validator()

```ts
function validator<Target, Schema>(target, schema): MiddlewareHandler<Env, string, {
  in: HasUndefined<InferInput<Schema>> extends true ? { [K in keyof ValidationTargets]?: InferInput<Schema> extends ValidationTargets[K] ? InferInput<InferInput<Schema>> : { [K2 in string | number | symbol]?: ValidationTargets[K][K2] } } : { [K in keyof ValidationTargets]: InferInput<Schema> extends ValidationTargets[K] ? InferInput<InferInput<Schema>> : { [K2 in string | number | symbol]: ValidationTargets[K][K2] } };
  out: { [K in keyof ValidationTargets]: InferOutput<Schema> };
}>;
```

Defined in: [packages/hono-openapi/src/validator.ts:10](https://github.com/jderstd/hono/blob/9b33b7a2db9d95365aa7ce18087da7a31e14229a/packages/hono-openapi/src/validator.ts#L10)

Create a validator middleware.

## Type Parameters

### Target

`Target` *extends* keyof `ValidationTargets`

### Schema

`Schema` *extends* `StandardSchemaV1`\<`unknown`, `unknown`\>

## Parameters

### target

`Target`

### schema

`Schema`

## Returns

`MiddlewareHandler`\<`Env`, `string`, \{
  `in`: `HasUndefined`\<`InferInput`\<`Schema`\>\> *extends* `true` ? \{ \[K in keyof ValidationTargets\]?: InferInput\<Schema\> extends ValidationTargets\[K\] ? InferInput\<InferInput\<Schema\>\> : \{ \[K2 in string \| number \| symbol\]?: ValidationTargets\[K\]\[K2\] \} \} : \{ \[K in keyof ValidationTargets\]: InferInput\<Schema\> extends ValidationTargets\[K\] ? InferInput\<InferInput\<Schema\>\> : \{ \[K2 in string \| number \| symbol\]: ValidationTargets\[K\]\[K2\] \} \};
  `out`: `{ [K in keyof ValidationTargets]: InferOutput<Schema> }`;
\}\>
