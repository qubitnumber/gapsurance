// convex/pdf.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getUploadUrl = mutation({
  args: {},
  handler: async (ctx, args) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const savePdfMetadata = mutation({
  args: {
    storageId: v.string(),
    filename: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("pdfs", {
      storageId: args.storageId,
      filename: args.filename,
      createdAt: Date.now().toString(),
    });
  },
});

export const getPdfUrl = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});