import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  pdfs: defineTable({
    storageId: v.string(),
    filename: v.string(),
    createdAt: v.string(),
  })
})
