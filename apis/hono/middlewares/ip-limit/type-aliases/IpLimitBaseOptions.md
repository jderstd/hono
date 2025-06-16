[@jderjs/hono](../../../README.md) / [middlewares/ip-limit](../README.md) / IpLimitBaseOptions

# Type Alias: IpLimitBaseOptions

```ts
type IpLimitBaseOptions = object;
```

Defined in: [packages/hono/src/middlewares/ip-limit.ts:23](https://github.com/jder-std/hono/blob/8c7789aedbc9936c4862cd649747186bca01fdb1/packages/hono/src/middlewares/ip-limit.ts#L23)

Base options for `ipLimit` middleware.

## Properties

### allowList?

```ts
optional allowList: IPRestrictionRule[];
```

Defined in: [packages/hono/src/middlewares/ip-limit.ts:25](https://github.com/jder-std/hono/blob/8c7789aedbc9936c4862cd649747186bca01fdb1/packages/hono/src/middlewares/ip-limit.ts#L25)

Allowed IP addresses.

***

### denyList?

```ts
optional denyList: IPRestrictionRule[];
```

Defined in: [packages/hono/src/middlewares/ip-limit.ts:27](https://github.com/jder-std/hono/blob/8c7789aedbc9936c4862cd649747186bca01fdb1/packages/hono/src/middlewares/ip-limit.ts#L27)

Denied IP addresses.

***

### verbose?

```ts
optional verbose: boolean;
```

Defined in: [packages/hono/src/middlewares/ip-limit.ts:32](https://github.com/jder-std/hono/blob/8c7789aedbc9936c4862cd649747186bca01fdb1/packages/hono/src/middlewares/ip-limit.ts#L32)

Whether show more information.
By default, it's `false`.
