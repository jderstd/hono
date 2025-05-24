[@jderjs/hono-zod-validator](../README.md) / zValidator

# Function: zValidator()

```ts
function zValidator<T, Target>(target, schema): MiddlewareHandler<Env, string, {
  in: HasUndefined<input<T>> extends true ? { [K in keyof ValidationTargets]?: input<T> extends ValidationTargets[K] ? input<input<T>> : { [K2 in string | number | symbol]?: ValidationTargets[K][K2] } } : { [K in keyof ValidationTargets]: input<T> extends ValidationTargets[K] ? input<input<T>> : { [K2 in string | number | symbol]: ValidationTargets[K][K2] } };
  out: { [K in keyof ValidationTargets]: output<T> };
}>;
```

Defined in: packages/hono-zod-validator/src/index.ts:52

Validate the request with Zod.

### Example

```ts
import type { Context, Env } from "hono";

import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@jderjs/hono-zod-validator";

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
    zValidator("json", json),
    (c: RouteContext): Response => {
        const data: Json = c.req.valid("json");
        return c.json(data);
    }
);
```

## Type Parameters

### T

`T` *extends* `ZodType`\<`any`, `ZodTypeDef`, `any`\>

### Target

`Target` *extends* keyof `ValidationTargets`

## Parameters

### target

`Target`

### schema

`T`

## Returns

`MiddlewareHandler`\<`Env`, `string`, \{
  `in`: `HasUndefined`\<`input`\<`T`\>\> *extends* `true` ? \{ \[K in keyof ValidationTargets\]?: input\<T\> extends ValidationTargets\[K\] ? input\<input\<T\>\> : \{ \[K2 in string \| number \| symbol\]?: ValidationTargets\[K\]\[K2\] \} \} : \{ \[K in keyof ValidationTargets\]: input\<T\> extends ValidationTargets\[K\] ? input\<input\<T\>\> : \{ \[K2 in string \| number \| symbol\]: ValidationTargets\[K\]\[K2\] \} \};
  `out`: `{ [K in keyof ValidationTargets]: output<T> }`;
\}\>
