/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Comment = {
  /**
   * The unique identifier for the comment
   */
  id: string;
  /**
   * The unique identifier for the audit evidence related to the comment.
   */
  auditEvidenceId: string;
  /**
   * The comment message
   */
  text: string;
  /**
   * When the comment was created
   */
  creationDate: Date;
  /**
   * When the comment was updated
   */
  modificationDate: Date | null;
  /**
   * When the comment was deleted
   */
  deletionDate: Date | null;
  /**
   * The email of the comment author. This acts as a unique identifier to map users between Vanta and external systems.
   */
  email: string | null;
};

/** @internal */
export const Comment$inboundSchema: z.ZodType<Comment, z.ZodTypeDef, unknown> =
  z.object({
    id: z.string(),
    auditEvidenceId: z.string(),
    text: z.string(),
    creationDate: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ),
    modificationDate: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ),
    deletionDate: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ),
    email: z.nullable(z.string()),
  });

/** @internal */
export type Comment$Outbound = {
  id: string;
  auditEvidenceId: string;
  text: string;
  creationDate: string;
  modificationDate: string | null;
  deletionDate: string | null;
  email: string | null;
};

/** @internal */
export const Comment$outboundSchema: z.ZodType<
  Comment$Outbound,
  z.ZodTypeDef,
  Comment
> = z.object({
  id: z.string(),
  auditEvidenceId: z.string(),
  text: z.string(),
  creationDate: z.date().transform(v => v.toISOString()),
  modificationDate: z.nullable(z.date().transform(v => v.toISOString())),
  deletionDate: z.nullable(z.date().transform(v => v.toISOString())),
  email: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Comment$ {
  /** @deprecated use `Comment$inboundSchema` instead. */
  export const inboundSchema = Comment$inboundSchema;
  /** @deprecated use `Comment$outboundSchema` instead. */
  export const outboundSchema = Comment$outboundSchema;
  /** @deprecated use `Comment$Outbound` instead. */
  export type Outbound = Comment$Outbound;
}

export function commentToJSON(comment: Comment): string {
  return JSON.stringify(Comment$outboundSchema.parse(comment));
}

export function commentFromJSON(
  jsonString: string,
): SafeParseResult<Comment, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Comment$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Comment' from JSON`,
  );
}
