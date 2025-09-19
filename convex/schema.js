import { defineSchema } from "convex/server";
import { defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  UserTable: defineTable({
    name: v.string(),
    email: v.string(),
    ImageUrl: v.string()
  })
});