# InformationRequestEvidenceUnion

Union type representing the different forms of evidence content.
The specific type is determined by the `evidenceType` field in InformationRequestEvidence.


## Supported Types

### `components.UploadedDocumentEvidence`

```typescript
const value: components.UploadedDocumentEvidence = {
  id: "<id>",
  mimeType: "<value>",
  url: "https://enchanting-cork.net",
};
```

### `components.LinkEvidence`

```typescript
const value: components.LinkEvidence = {
  title: "<value>",
  url: "https://smug-affect.net",
};
```

### `components.ObservationEvidence`

```typescript
const value: components.ObservationEvidence = {
  observationDetails: "<value>",
};
```

### `components.VantaDocumentEvidence`

```typescript
const value: components.VantaDocumentEvidence = {
  title: "<value>",
  documentVersionId: "<id>",
  file: {
    type: "uploaded",
    id: "<id>",
    mimeType: "<value>",
    url: "https://phony-thorn.com/",
  },
};
```

### `components.VantaPolicyEvidence`

```typescript
const value: components.VantaPolicyEvidence = {
  title: "<value>",
  policyId: "<id>",
  policyVersionId: "<id>",
  policyVersionFileId: "<id>",
  file: {
    effectiveOrCreationDate: new Date("2024-02-19T17:41:10.303Z"),
    locale: "it",
    url: "https://private-rim.biz",
    mimeType: "<value>",
    id: "<id>",
  },
};
```

### `components.VantaTestEvidence`

```typescript
const value: components.VantaTestEvidence = {
  title: "<value>",
  testId: "<id>",
  snapshotId: "<id>",
  testRunStatus: "DISABLED",
  executedAt: new Date("2025-07-06T03:35:33.799Z"),
  fileType: "API_REQUESTS",
  file: {
    mimeType: "<value>",
    url: "https://rowdy-minor.name/",
  },
};
```

### `components.VantaTestSnapshotEvidence`

```typescript
const value: components.VantaTestSnapshotEvidence = {
  snapshotId: "<id>",
  testId: "<id>",
  testRunId: "<id>",
  testRunTitle: "<value>",
  testRunStatus: "PASS",
  testRunExecutedAt: new Date("2025-06-17T05:02:25.953Z"),
};
```

