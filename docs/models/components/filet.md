# FileT

The file or link associated with this document version.
Use the `type` discriminator to determine whether it's an uploaded file
or an external link.


## Supported Types

### `components.VantaDocumentUploadedEvidence`

```typescript
const value: components.VantaDocumentUploadedEvidence = {
  type: "uploaded",
  id: "<id>",
  mimeType: "<value>",
  url: "https://shameful-secrecy.name/",
};
```

### `components.VantaDocumentLinkEvidence`

```typescript
const value: components.VantaDocumentLinkEvidence = {
  type: "link",
  id: "<id>",
  url: "https://dark-opera.biz/",
};
```

