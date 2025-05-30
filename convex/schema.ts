import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  pdfs: defineTable({
    quoteId: v.string(),
    storageId: v.string(),
    filename: v.string(),
    createdAt: v.string(),
  }),
  envelopes: defineTable({
    docusignEnvelopeId: v.string(),
    status: v.string(), // e.g., 'sent', 'delivered', 'signed', 'completed', 'declined', 'voided'
    quoteId: v.string(),
    createdAt: v.number(),
  }).index("by_docusignEnvelopeId", ["docusignEnvelopeId"]),
  quotes: defineTable({
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
    createdAt: v.number(),
  }),
})
