[@jderjs/hono](../../README.md) / [ip-limit](../README.md) / IpLimitOptions

# Type Alias: IpLimitOptions

```ts
type IpLimitOptions = object;
```

Defined in: [package/src/middlewares/ip-limit.ts:22](https://github.com/jder-std/hono/blob/74d7763c44e1d14d82209dadd03223da473b2ce4/package/src/middlewares/ip-limit.ts#L22)

Options for `bodyLimit` middleware.

## Properties

### allowList?

```ts
optional allowList: IPRestrictionRule[];
```

Defined in: [package/src/middlewares/ip-limit.ts:26](https://github.com/jder-std/hono/blob/74d7763c44e1d14d82209dadd03223da473b2ce4/package/src/middlewares/ip-limit.ts#L26)

Allowed IP addresses.

***

### denyList?

```ts
optional denyList: IPRestrictionRule[];
```

Defined in: [package/src/middlewares/ip-limit.ts:28](https://github.com/jder-std/hono/blob/74d7763c44e1d14d82209dadd03223da473b2ce4/package/src/middlewares/ip-limit.ts#L28)

Denied IP addresses.

***

### getConnInfo

```ts
getConnInfo: GetIPAddr;
```

Defined in: [package/src/middlewares/ip-limit.ts:24](https://github.com/jder-std/hono/blob/74d7763c44e1d14d82209dadd03223da473b2ce4/package/src/middlewares/ip-limit.ts#L24)

Function to get IP address.

***

### verbose?

```ts
optional verbose: boolean;
```

Defined in: [package/src/middlewares/ip-limit.ts:33](https://github.com/jder-std/hono/blob/74d7763c44e1d14d82209dadd03223da473b2ce4/package/src/middlewares/ip-limit.ts#L33)

Whether show more information.
By default, it's `false`.
