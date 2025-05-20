[@jderjs/hono](../../README.md) / [ip-limit](../README.md) / IpLimitOptions

# Type Alias: IpLimitOptions

```ts
type IpLimitOptions = object;
```

Defined in: package/src/middlewares/ip-limit.ts:22

Options for `bodyLimit` middleware.

## Properties

### allowList?

```ts
optional allowList: IPRestrictionRule[];
```

Defined in: package/src/middlewares/ip-limit.ts:26

Allowed IP addresses.

***

### denyList?

```ts
optional denyList: IPRestrictionRule[];
```

Defined in: package/src/middlewares/ip-limit.ts:28

Denied IP addresses.

***

### getConnInfo

```ts
getConnInfo: GetIPAddr;
```

Defined in: package/src/middlewares/ip-limit.ts:24

Function to get IP address.

***

### verbose?

```ts
optional verbose: boolean;
```

Defined in: package/src/middlewares/ip-limit.ts:33

Whether show more information.
By default, it's `false`.
