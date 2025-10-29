[@jderstd/hono](../../../README.md) / [middlewares/ip-limit](../README.md) / IpLimitBaseOptions

# Type Alias: IpLimitBaseOptions

```ts
type IpLimitBaseOptions = object;
```

Defined in: [packages/hono/src/middlewares/ip-limit.ts:24](https://github.com/jderstd/hono/blob/f5b12e262138ddfb5fccdd78e3274b708c2b86c1/packages/hono/src/middlewares/ip-limit.ts#L24)

Base options for `ipLimit` middleware.

## Properties

### allowList?

```ts
optional allowList: IPRestrictionRule[];
```

Defined in: [packages/hono/src/middlewares/ip-limit.ts:26](https://github.com/jderstd/hono/blob/f5b12e262138ddfb5fccdd78e3274b708c2b86c1/packages/hono/src/middlewares/ip-limit.ts#L26)

Allowed IP addresses.

***

### denyList?

```ts
optional denyList: IPRestrictionRule[];
```

Defined in: [packages/hono/src/middlewares/ip-limit.ts:28](https://github.com/jderstd/hono/blob/f5b12e262138ddfb5fccdd78e3274b708c2b86c1/packages/hono/src/middlewares/ip-limit.ts#L28)

Denied IP addresses.

***

### verbose?

```ts
optional verbose: boolean;
```

Defined in: [packages/hono/src/middlewares/ip-limit.ts:33](https://github.com/jderstd/hono/blob/f5b12e262138ddfb5fccdd78e3274b708c2b86c1/packages/hono/src/middlewares/ip-limit.ts#L33)

Whether show more information.
By default, it's `false`.
