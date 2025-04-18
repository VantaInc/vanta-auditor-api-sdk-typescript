/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { auditsListComments } from "../../funcs/auditsListComments.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListAuditCommentsRequest$inboundSchema,
};

export const tool$auditsListComments: ToolDefinition<typeof args> = {
  name: "audits-list-comments",
  description: `List audit comments

Returns a paginated list of comments for an audit.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await auditsListComments(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
