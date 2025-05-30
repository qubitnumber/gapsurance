import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createEnvelope = mutation({
  args: {
    docusignEnvelopeId: v.string(),
    status: v.string(),
    quoteId: v.string(),
    // Add other fields as needed
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("envelopes", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

export const updateStatus = mutation({
  args: {
    docusignEnvelopeId: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const envelope = await ctx.db
      .query("envelopes")
      .withIndex("by_docusignEnvelopeId", (q) => q.eq("docusignEnvelopeId", args.docusignEnvelopeId))
      .unique();

    if (envelope) {
      await ctx.db.patch(envelope._id, {
        status: args.status,
      });
      return { success: true, envelopeId: envelope._id };
    } else {
      return { success: false, message: "Envelope not found" };
    }
  },
});