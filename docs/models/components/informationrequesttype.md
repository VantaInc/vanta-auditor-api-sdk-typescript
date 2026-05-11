# InformationRequestType

Type of information request, defining what scope of evidence is needed.

- POINT_IN_TIME: Evidence for a specific moment (e.g., current state of a policy)
- POPULATION: Evidence covering all items in a category (e.g., all employees)
- SAMPLE: Evidence for a representative sample (e.g., 10 random customer records)

## Example Usage

```typescript
import { InformationRequestType } from "vanta-auditor-api-sdk/models/components";

let value: InformationRequestType = "SAMPLE";
```

## Values

```typescript
"POINT_IN_TIME" | "POPULATION" | "SAMPLE"
```