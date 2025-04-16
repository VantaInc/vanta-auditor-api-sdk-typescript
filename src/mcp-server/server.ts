/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { VantaCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { createRegisterPrompt } from "./prompts.js";
import {
  createRegisterResource,
  createRegisterResourceTemplate,
} from "./resources.js";
import { MCPScope } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$auditorsCreate } from "./tools/auditorsCreate.js";
import { tool$auditsCreateCommentForEvidence } from "./tools/auditsCreateCommentForEvidence.js";
import { tool$auditsCreateCustomControl } from "./tools/auditsCreateCustomControl.js";
import { tool$auditsCreateCustomEvidenceRequest } from "./tools/auditsCreateCustomEvidenceRequest.js";
import { tool$auditsGetEvidenceUrls } from "./tools/auditsGetEvidenceUrls.js";
import { tool$auditsList } from "./tools/auditsList.js";
import { tool$auditsListComments } from "./tools/auditsListComments.js";
import { tool$auditsListControls } from "./tools/auditsListControls.js";
import { tool$auditsListEvidence } from "./tools/auditsListEvidence.js";
import { tool$auditsUpdateEvidence } from "./tools/auditsUpdateEvidence.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  allowedTools?: string[] | undefined;
  scopes?: MCPScope[] | undefined;
  serverURL?: string | undefined;
  bearerAuth?: SDKOptions["bearerAuth"] | undefined;
  serverIdx?: SDKOptions["serverIdx"] | undefined;
}) {
  const server = new McpServer({
    name: "Vanta",
    version: "0.2.0",
  });

  const client = new VantaCore({
    bearerAuth: deps.bearerAuth,
    serverURL: deps.serverURL,
    serverIdx: deps.serverIdx,
  });

  const scopes = new Set(deps.scopes);

  const allowedTools = deps.allowedTools && new Set(deps.allowedTools);
  const tool = createRegisterTool(
    deps.logger,
    server,
    client,
    scopes,
    allowedTools,
  );
  const resource = createRegisterResource(deps.logger, server, client, scopes);
  const resourceTemplate = createRegisterResourceTemplate(
    deps.logger,
    server,
    client,
    scopes,
  );
  const prompt = createRegisterPrompt(deps.logger, server, client, scopes);
  const register = { tool, resource, resourceTemplate, prompt };
  void register; // suppress unused warnings

  tool(tool$auditsList);
  tool(tool$auditsGetEvidenceUrls);
  tool(tool$auditsListEvidence);
  tool(tool$auditsListComments);
  tool(tool$auditsListControls);
  tool(tool$auditsCreateCommentForEvidence);
  tool(tool$auditsUpdateEvidence);
  tool(tool$auditsCreateCustomEvidenceRequest);
  tool(tool$auditsCreateCustomControl);
  tool(tool$auditorsCreate);

  return server;
}
