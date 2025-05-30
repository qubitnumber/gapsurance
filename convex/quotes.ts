import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createQuote = mutation({
  args: {
    quoteId: v.string(),
    businessName: v.string(),
    businessType: v.string(),
    industry: v.string(),
    annualRevenue: v.string(),
    numberOfEmployees: v.string(),
    coverages: v.array(v.string()),
    businessAddress: v.string(),
    city: v.string(),
    province: v.string(),
    postalCode: v.string(),
    yearsInBusiness: v.string(),
    previousClaims:  v.string(),
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    preferredContact: v.string(),
    agreeTerm: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("quotes", {
      ...args,
      createdAt: Date.now(),
    });
  },
});