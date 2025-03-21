/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ControlSource,
  ControlSource$inboundSchema,
  ControlSource$outboundSchema,
} from "./controlsource.js";

/**
 * The control's owner.
 */
export type Owner = {
  /**
   * Unique identifier for the person.
   */
  id: string;
  /**
   * Name of the person that is shown in product.
   */
  displayName: string;
  /**
   * Email address of the person.
   */
  emailAddress: string;
};

export type AuditorControl = {
  /**
   * The control's unique ID.
   */
  id: string;
  /**
   * The control's external ID.
   */
  externalId: string | null;
  /**
   * The control's name.
   */
  name: string;
  /**
   * The control's description.
   */
  description: string;
  source: ControlSource;
  /**
   * The security domains that the control belongs to.
   */
  domains: Array<string>;
  /**
   * The control's owner.
   */
  owner: Owner | null;
  /**
   * The control's GDPR role, if the control is a GDPR control.
   */
  role?: string | undefined;
  /**
   * The report standard framework fulfilled by the control.
   */
  framework: string;
};

/** @internal */
export const Owner$inboundSchema: z.ZodType<Owner, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string(),
    displayName: z.string(),
    emailAddress: z.string(),
  });

/** @internal */
export type Owner$Outbound = {
  id: string;
  displayName: string;
  emailAddress: string;
};

/** @internal */
export const Owner$outboundSchema: z.ZodType<
  Owner$Outbound,
  z.ZodTypeDef,
  Owner
> = z.object({
  id: z.string(),
  displayName: z.string(),
  emailAddress: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Owner$ {
  /** @deprecated use `Owner$inboundSchema` instead. */
  export const inboundSchema = Owner$inboundSchema;
  /** @deprecated use `Owner$outboundSchema` instead. */
  export const outboundSchema = Owner$outboundSchema;
  /** @deprecated use `Owner$Outbound` instead. */
  export type Outbound = Owner$Outbound;
}

export function ownerToJSON(owner: Owner): string {
  return JSON.stringify(Owner$outboundSchema.parse(owner));
}

export function ownerFromJSON(
  jsonString: string,
): SafeParseResult<Owner, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Owner$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Owner' from JSON`,
  );
}

/** @internal */
export const AuditorControl$inboundSchema: z.ZodType<
  AuditorControl,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  externalId: z.nullable(z.string()),
  name: z.string(),
  description: z.string(),
  source: ControlSource$inboundSchema,
  domains: z.array(z.string()),
  owner: z.nullable(z.lazy(() => Owner$inboundSchema)),
  role: z.string().optional(),
  framework: z.string(),
});

/** @internal */
export type AuditorControl$Outbound = {
  id: string;
  externalId: string | null;
  name: string;
  description: string;
  source: string;
  domains: Array<string>;
  owner: Owner$Outbound | null;
  role?: string | undefined;
  framework: string;
};

/** @internal */
export const AuditorControl$outboundSchema: z.ZodType<
  AuditorControl$Outbound,
  z.ZodTypeDef,
  AuditorControl
> = z.object({
  id: z.string(),
  externalId: z.nullable(z.string()),
  name: z.string(),
  description: z.string(),
  source: ControlSource$outboundSchema,
  domains: z.array(z.string()),
  owner: z.nullable(z.lazy(() => Owner$outboundSchema)),
  role: z.string().optional(),
  framework: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuditorControl$ {
  /** @deprecated use `AuditorControl$inboundSchema` instead. */
  export const inboundSchema = AuditorControl$inboundSchema;
  /** @deprecated use `AuditorControl$outboundSchema` instead. */
  export const outboundSchema = AuditorControl$outboundSchema;
  /** @deprecated use `AuditorControl$Outbound` instead. */
  export type Outbound = AuditorControl$Outbound;
}

export function auditorControlToJSON(auditorControl: AuditorControl): string {
  return JSON.stringify(AuditorControl$outboundSchema.parse(auditorControl));
}

export function auditorControlFromJSON(
  jsonString: string,
): SafeParseResult<AuditorControl, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AuditorControl$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AuditorControl' from JSON`,
  );
}
