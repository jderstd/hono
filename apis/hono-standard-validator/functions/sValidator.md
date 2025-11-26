[@jderstd/hono-standard-validator](../README.md) / sValidator

# Function: sValidator()

```ts
function sValidator<Target, Schema>(target, schema): Handler<Env, string, {
  in: HasUndefined<InferInput<Schema>> extends true ? { [K in keyof ValidationTargets]?: InferInput<Schema> extends ValidationTargets[K] ? InferInput<InferInput<Schema>> : { [K2 in string | number | symbol]?: ValidationTargets[K][K2] } } : { [K in keyof ValidationTargets]: InferInput<Schema> extends ValidationTargets[K] ? InferInput<InferInput<Schema>> : { [K2 in string | number | symbol]: ValidationTargets[K][K2] } };
  out: { [K in keyof ValidationTargets]: InferOutput<Schema> };
}, Response & TypedResponse<{
  data: ValidationTargets[Target];
  error: readonly Issue[];
  success: false;
}, 400, "json">>;
```

Defined in: [packages/hono-standard-validator/src/index.ts:68](https://github.com/jderstd/hono/blob/b7289eeab79174059fbd4658ba039f0cf97c5d74/packages/hono-standard-validator/src/index.ts#L68)

Validate the request with validator based on Standard Schema.

Following error may returned if the request is invalid:

```jsonc
// Status: 400
{
    "success": false,
    "errors": [
        {
            "code": "parse",
            "path": ["xxx"],
            "message": "xxx"
        }
    ]
}
```

### Example

```ts
import type { Context, Env } from "hono";

import { Hono } from "hono";
import { z } from "zod";
import { sValidator } from "@jderstd/hono-standard-validator";

const app: Hono = new Hono();

const json = z.object({
    name: z.string(),
    age: z.number()
});

type Json = z.infer<typeof json>;

type RouteContext = Context<
    Env,
    "/",
    {
        in: {
            json: Json;
        },
        out: {
            json: Json;
        },
    },
>;

app.post(
    "/",
    sValidator("json", json),
    (c: RouteContext): Response => {
        const data: Json = c.req.valid("json");
        return c.json(data);
    }
);
```

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

`Handler`\<`Env`, `string`, \{
  `in`: `HasUndefined`\<`InferInput`\<`Schema`\>\> *extends* `true` ? \{ \[K in keyof ValidationTargets\]?: InferInput\<Schema\> extends ValidationTargets\[K\] ? InferInput\<InferInput\<Schema\>\> : \{ \[K2 in string \| number \| symbol\]?: ValidationTargets\[K\]\[K2\] \} \} : \{ \[K in keyof ValidationTargets\]: InferInput\<Schema\> extends ValidationTargets\[K\] ? InferInput\<InferInput\<Schema\>\> : \{ \[K2 in string \| number \| symbol\]: ValidationTargets\[K\]\[K2\] \} \};
  `out`: `{ [K in keyof ValidationTargets]: InferOutput<Schema> }`;
\}, `Response` & `TypedResponse`\<\{
  `data`: `ValidationTargets`\[`Target`\];
  `error`: readonly `Issue`[];
  `success`: `false`;
\}, `400`, `"json"`\>\>
