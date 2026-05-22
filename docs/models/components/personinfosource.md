# PersonInfoSource

The source of the person's information.


## Supported Types

### `components.VantaBasedPersonInfoSource`

```typescript
const value: components.VantaBasedPersonInfoSource = {
  type: "VANTA",
};
```

### `components.ScimBasedPersonInfoSource`

```typescript
const value: components.ScimBasedPersonInfoSource = {
  type: "SCIM",
};
```

### `components.IntegrationBasedPersonInfoSource`

```typescript
const value: components.IntegrationBasedPersonInfoSource = {
  integrationId: "<id>",
  resourceId: "<id>",
  type: "INTEGRATION",
};
```

