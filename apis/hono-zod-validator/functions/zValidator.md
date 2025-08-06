[@jderjs/hono-zod-validator](../README.md) / zValidator

# Function: zValidator()

```ts
function zValidator<T, Target>(target, schema): MiddlewareHandler<Env, string, {
  in: HasUndefined<zInput<T>> extends true ? { [K in keyof ValidationTargets]?: zInput<T> extends ValidationTargets[K] ? ValidationTargets[K] & zInput<T> : { [K2 in string | number | symbol]?: ValidationTargets[K][K2] } } : { [K in keyof ValidationTargets]: zInput<T> extends ValidationTargets[K] ? ValidationTargets[K] & zInput<T> : { [K2 in string | number | symbol]: ValidationTargets[K][K2] } };
  out: { [K in keyof ValidationTargets]: zOutput<T> };
}>;
```

Defined in: [packages/hono-zod-validator/src/index.ts:69](https://github.com/jder-std/hono/blob/206880bc1e845cf7bddf84d4b8c9af705bc6e006/packages/hono-zod-validator/src/index.ts#L69)

Validate the request with Zod.

Following error may returned if the request is invalid:

```jsonc
// Status: 400
{
    "success": false,
    "error": {
        "code": "invalid",
        "field": "xxx",
        "message": "Expected string, received number"
    }
}
```

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

`T` *extends* `ZodSchema`

### Target

`Target` *extends* keyof `ValidationTargets`

## Parameters

### target

`Target`

### schema

`T`

## Returns

`MiddlewareHandler`\<`Env`, `string`, \{
  `in`: `HasUndefined`\<`zInput`\<`T`\>\> *extends* `true` ? \{ \[K in keyof ValidationTargets\]?: zInput\<T\> extends ValidationTargets\[K\] ? ValidationTargets\[K\] & zInput\<T\> : \{ \[K2 in string \| number \| symbol\]?: ValidationTargets\[K\]\[K2\] \} \} : \{ \[K in keyof ValidationTargets\]: zInput\<T\> extends ValidationTargets\[K\] ? ValidationTargets\[K\] & zInput\<T\> : \{ \[K2 in string \| number \| symbol\]: ValidationTargets\[K\]\[K2\] \} \};
  `out`: `{ [K in keyof ValidationTargets]: zOutput<T> }`;
\}\>
