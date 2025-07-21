# PageInfo

Provides information about the pagination of a dataset.

## Example Usage

```typescript
import { PageInfo } from "vanta-auditor-api-sdk/models/components";

let value: PageInfo = {
  endCursor: "<value>",
  hasNextPage: true,
  hasPreviousPage: true,
  startCursor: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `endCursor`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | The cursor that points to the end of the current page, or null if there is no such cursor.   |
| `hasNextPage`                                                                                | *boolean*                                                                                    | :heavy_check_mark:                                                                           | Indicates if there is another page after the current page.                                   |
| `hasPreviousPage`                                                                            | *boolean*                                                                                    | :heavy_check_mark:                                                                           | Indicates if there is a page before the current page.                                        |
| `startCursor`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | The cursor that points to the start of the current page, or null if there is no such cursor. |