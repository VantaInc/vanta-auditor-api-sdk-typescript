# OrderDirection

Sort direction shared across the external REST API surface.

`"asc"` for ascending, `"desc"` for descending. Endpoints expose this as the
`orderDirection` / `sortDirection` query parameter and map it onto whatever
internal direction representation the underlying service expects.

## Example Usage

```typescript
import { OrderDirection } from "vanta-auditor-api-sdk/models/components";

let value: OrderDirection = "asc";
```

## Values

```typescript
"asc" | "desc"
```