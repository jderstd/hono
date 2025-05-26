[@jderjs/hono](../../../README.md) / [middlewares/ip-limit](../README.md) / NetAddrInfo

# Type Alias: NetAddrInfo

```ts
type NetAddrInfo = object & 
  | {
  address: string;
  addressType: AddressType;
}
  | {
};
```

Defined in: node\_modules/.pnpm/hono@4.5.0/node\_modules/hono/dist/types/helper/conninfo/types.d.ts:3

## Type declaration

### address?

```ts
optional address: string;
```

### addressType?

```ts
optional addressType: AddressType;
```

### port?

```ts
optional port: number;
```

Transport port number

### transport?

```ts
optional transport: "tcp" | "udp";
```

Transport protocol type
