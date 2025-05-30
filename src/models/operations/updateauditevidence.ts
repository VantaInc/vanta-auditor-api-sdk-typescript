/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateAuditEvidenceRequest = {
  auditId: string;
  auditEvidenceId: string;
  auditEvidenceUpdateInput: components.AuditEvidenceUpdateInput;
};

/** @internal */
export const UpdateAuditEvidenceRequest$inboundSchema: z.ZodType<
  UpdateAuditEvidenceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  auditId: z.string(),
  auditEvidenceId: z.string(),
  AuditEvidenceUpdateInput: components.AuditEvidenceUpdateInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "AuditEvidenceUpdateInput": "auditEvidenceUpdateInput",
  });
});

/** @internal */
export type UpdateAuditEvidenceRequest$Outbound = {
  auditId: string;
  auditEvidenceId: string;
  AuditEvidenceUpdateInput: components.AuditEvidenceUpdateInput$Outbound;
};

/** @internal */
export const UpdateAuditEvidenceRequest$outboundSchema: z.ZodType<
  UpdateAuditEvidenceRequest$Outbound,
  z.ZodTypeDef,
  UpdateAuditEvidenceRequest
> = z.object({
  auditId: z.string(),
  auditEvidenceId: z.string(),
  auditEvidenceUpdateInput: components.AuditEvidenceUpdateInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    auditEvidenceUpdateInput: "AuditEvidenceUpdateInput",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAuditEvidenceRequest$ {
  /** @deprecated use `UpdateAuditEvidenceRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateAuditEvidenceRequest$inboundSchema;
  /** @deprecated use `UpdateAuditEvidenceRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateAuditEvidenceRequest$outboundSchema;
  /** @deprecated use `UpdateAuditEvidenceRequest$Outbound` instead. */
  export type Outbound = UpdateAuditEvidenceRequest$Outbound;
}

export function updateAuditEvidenceRequestToJSON(
  updateAuditEvidenceRequest: UpdateAuditEvidenceRequest,
): string {
  return JSON.stringify(
    UpdateAuditEvidenceRequest$outboundSchema.parse(updateAuditEvidenceRequest),
  );
}

export function updateAuditEvidenceRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateAuditEvidenceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateAuditEvidenceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateAuditEvidenceRequest' from JSON`,
  );
}
