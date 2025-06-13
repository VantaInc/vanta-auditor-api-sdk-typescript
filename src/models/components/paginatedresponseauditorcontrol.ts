/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AuditorControl,
  AuditorControl$inboundSchema,
  AuditorControl$Outbound,
  AuditorControl$outboundSchema,
} from "./auditorcontrol.js";
import {
  PageInfo,
  PageInfo$inboundSchema,
  PageInfo$Outbound,
  PageInfo$outboundSchema,
} from "./pageinfo.js";

export type PaginatedResponseAuditorControlResults = {
  data: Array<AuditorControl>;
  /**
   * Provides information about the pagination of a dataset.
   */
  pageInfo: PageInfo;
};

export type PaginatedResponseAuditorControl = {
  results: PaginatedResponseAuditorControlResults;
};

/** @internal */
export const PaginatedResponseAuditorControlResults$inboundSchema: z.ZodType<
  PaginatedResponseAuditorControlResults,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(AuditorControl$inboundSchema),
  pageInfo: PageInfo$inboundSchema,
});

/** @internal */
export type PaginatedResponseAuditorControlResults$Outbound = {
  data: Array<AuditorControl$Outbound>;
  pageInfo: PageInfo$Outbound;
};

/** @internal */
export const PaginatedResponseAuditorControlResults$outboundSchema: z.ZodType<
  PaginatedResponseAuditorControlResults$Outbound,
  z.ZodTypeDef,
  PaginatedResponseAuditorControlResults
> = z.object({
  data: z.array(AuditorControl$outboundSchema),
  pageInfo: PageInfo$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaginatedResponseAuditorControlResults$ {
  /** @deprecated use `PaginatedResponseAuditorControlResults$inboundSchema` instead. */
  export const inboundSchema =
    PaginatedResponseAuditorControlResults$inboundSchema;
  /** @deprecated use `PaginatedResponseAuditorControlResults$outboundSchema` instead. */
  export const outboundSchema =
    PaginatedResponseAuditorControlResults$outboundSchema;
  /** @deprecated use `PaginatedResponseAuditorControlResults$Outbound` instead. */
  export type Outbound = PaginatedResponseAuditorControlResults$Outbound;
}

export function paginatedResponseAuditorControlResultsToJSON(
  paginatedResponseAuditorControlResults:
    PaginatedResponseAuditorControlResults,
): string {
  return JSON.stringify(
    PaginatedResponseAuditorControlResults$outboundSchema.parse(
      paginatedResponseAuditorControlResults,
    ),
  );
}

export function paginatedResponseAuditorControlResultsFromJSON(
  jsonString: string,
): SafeParseResult<PaginatedResponseAuditorControlResults, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PaginatedResponseAuditorControlResults$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaginatedResponseAuditorControlResults' from JSON`,
  );
}

/** @internal */
export const PaginatedResponseAuditorControl$inboundSchema: z.ZodType<
  PaginatedResponseAuditorControl,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.lazy(() => PaginatedResponseAuditorControlResults$inboundSchema),
});

/** @internal */
export type PaginatedResponseAuditorControl$Outbound = {
  results: PaginatedResponseAuditorControlResults$Outbound;
};

/** @internal */
export const PaginatedResponseAuditorControl$outboundSchema: z.ZodType<
  PaginatedResponseAuditorControl$Outbound,
  z.ZodTypeDef,
  PaginatedResponseAuditorControl
> = z.object({
  results: z.lazy(() => PaginatedResponseAuditorControlResults$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaginatedResponseAuditorControl$ {
  /** @deprecated use `PaginatedResponseAuditorControl$inboundSchema` instead. */
  export const inboundSchema = PaginatedResponseAuditorControl$inboundSchema;
  /** @deprecated use `PaginatedResponseAuditorControl$outboundSchema` instead. */
  export const outboundSchema = PaginatedResponseAuditorControl$outboundSchema;
  /** @deprecated use `PaginatedResponseAuditorControl$Outbound` instead. */
  export type Outbound = PaginatedResponseAuditorControl$Outbound;
}

export function paginatedResponseAuditorControlToJSON(
  paginatedResponseAuditorControl: PaginatedResponseAuditorControl,
): string {
  return JSON.stringify(
    PaginatedResponseAuditorControl$outboundSchema.parse(
      paginatedResponseAuditorControl,
    ),
  );
}

export function paginatedResponseAuditorControlFromJSON(
  jsonString: string,
): SafeParseResult<PaginatedResponseAuditorControl, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaginatedResponseAuditorControl$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaginatedResponseAuditorControl' from JSON`,
  );
}
