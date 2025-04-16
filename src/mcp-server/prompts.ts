/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { RequestHandlerExtra } from "@modelcontextprotocol/sdk/shared/protocol.js";
import { GetPromptResult } from "@modelcontextprotocol/sdk/types.js";
import {
  objectOutputType,
  ZodOptional,
  ZodType,
  ZodTypeAny,
  ZodTypeDef,
} from "zod";
import { VantaCore } from "../core.js";
import { ConsoleLogger } from "./console-logger.js";
import { MCPScope } from "./scopes.js";

// '@modelcontextprotocol/sdk' currently does not export this type
export type PromptArgsRawShape = {
  [k: string]:
    | ZodType<string, ZodTypeDef, string>
    | ZodOptional<ZodType<string, ZodTypeDef, string>>;
};

export type PromptDefinition<
  Args extends undefined | PromptArgsRawShape = undefined,
> = Args extends PromptArgsRawShape ? {
    name: string;
    description?: string;
    scopes?: MCPScope[];
    args: Args;
    prompt: (
      client: VantaCore,
      args: objectOutputType<Args, ZodTypeAny>,
      extra: RequestHandlerExtra,
    ) => GetPromptResult | Promise<GetPromptResult>;
  }
  : {
    name: string;
    description?: string;
    scopes?: MCPScope[];
    args?: undefined;
    prompt: (
      client: VantaCore,
      extra: RequestHandlerExtra,
    ) => GetPromptResult | Promise<GetPromptResult>;
  };

// Optional function to assist with formatting prompt results
export async function formatResult(value: string): Promise<GetPromptResult> {
  return {
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: value,
        },
      },
    ],
  };
}

export function createRegisterPrompt(
  logger: ConsoleLogger,
  server: McpServer,
  sdk: VantaCore,
  allowedScopes: Set<MCPScope>,
): <A extends PromptArgsRawShape | undefined>(
  prompt: PromptDefinition<A>,
) => void {
  return <A extends PromptArgsRawShape | undefined>(
    prompt: PromptDefinition<A>,
  ): void => {
    const scopes = prompt.scopes ?? [];
    if (allowedScopes.size > 0 && scopes.length === 0) {
      return;
    }

    if (
      allowedScopes.size > 0
      && !scopes.every((s: MCPScope) => allowedScopes.has(s))
    ) {
      return;
    }

    if (prompt.args) {
      if (prompt.description) {
        server.prompt(
          prompt.name,
          prompt.description,
          prompt.args,
          async (args, ctx) => prompt.prompt(sdk, args, ctx),
        );
      } else {
        server.prompt(
          prompt.name,
          prompt.args,
          async (args, ctx) => prompt.prompt(sdk, args, ctx),
        );
      }
    } else {
      if (prompt.description) {
        server.prompt(
          prompt.name,
          prompt.description,
          async (ctx) => prompt.prompt(sdk, ctx),
        );
      } else {
        server.prompt(prompt.name, async (ctx) => prompt.prompt(sdk, ctx));
      }
    }

    logger.debug("Registered prompt", { name: prompt.name });
  };
}
