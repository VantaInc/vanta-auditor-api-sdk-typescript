/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Audit,
  Audit$inboundSchema,
  Audit$Outbound,
  Audit$outboundSchema,
} from "./audit.js";
import {
  PageInfo,
  PageInfo$inboundSchema,
  PageInfo$Outbound,
  PageInfo$outboundSchema,
} from "./pageinfo.js";

export type Results = {
  data: Array<Audit>;
  /**
   * Provides information about the pagination of a dataset.
   */
  pageInfo: PageInfo;
};

export type PaginatedResponseAudit = {
  results: Results;
};

/** @internal */
export const Results$inboundSchema: z.ZodType<Results, z.ZodTypeDef, unknown> =
  z.object({
    data: z.array(Audit$inboundSchema),
    pageInfo: PageInfo$inboundSchema,
  });

/** @internal */
export type Results$Outbound = {
  data: Array<Audit$Outbound>;
  pageInfo: PageInfo$Outbound;
};

/** @internal */
export const Results$outboundSchema: z.ZodType<
  Results$Outbound,
  z.ZodTypeDef,
  Results
> = z.object({
  data: z.array(Audit$outboundSchema),
  pageInfo: PageInfo$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Results$ {
  /** @deprecated use `Results$inboundSchema` instead. */
  export const inboundSchema = Results$inboundSchema;
  /** @deprecated use `Results$outboundSchema` instead. */
  export const outboundSchema = Results$outboundSchema;
  /** @deprecated use `Results$Outbound` instead. */
  export type Outbound = Results$Outbound;
}

export function resultsToJSON(results: Results): string {
  return JSON.stringify(Results$outboundSchema.parse(results));
}

export function resultsFromJSON(
  jsonString: string,
): SafeParseResult<Results, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Results$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Results' from JSON`,
  );
}

/** @internal */
export const PaginatedResponseAudit$inboundSchema: z.ZodType<
  PaginatedResponseAudit,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.lazy(() => Results$inboundSchema),
});

/** @internal */
export type PaginatedResponseAudit$Outbound = {
  results: Results$Outbound;
};

/** @internal */
export const PaginatedResponseAudit$outboundSchema: z.ZodType<
  PaginatedResponseAudit$Outbound,
  z.ZodTypeDef,
  PaginatedResponseAudit
> = z.object({
  results: z.lazy(() => Results$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaginatedResponseAudit$ {
  /** @deprecated use `PaginatedResponseAudit$inboundSchema` instead. */
  export const inboundSchema = PaginatedResponseAudit$inboundSchema;
  /** @deprecated use `PaginatedResponseAudit$outboundSchema` instead. */
  export const outboundSchema = PaginatedResponseAudit$outboundSchema;
  /** @deprecated use `PaginatedResponseAudit$Outbound` instead. */
  export type Outbound = PaginatedResponseAudit$Outbound;
}

export function paginatedResponseAuditToJSON(
  paginatedResponseAudit: PaginatedResponseAudit,
): string {
  return JSON.stringify(
    PaginatedResponseAudit$outboundSchema.parse(paginatedResponseAudit),
  );
}

export function paginatedResponseAuditFromJSON(
  jsonString: string,
): SafeParseResult<PaginatedResponseAudit, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaginatedResponseAudit$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaginatedResponseAudit' from JSON`,
  );
}
