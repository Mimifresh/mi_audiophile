// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // 1. Products Table (replaces db.json)
  products: defineTable({
    slug: v.string(),
    name: v.string(),
    category: v.string(),
    price: v.number(),
    description: v.string(),
    features: v.string(),
    new: v.boolean(),
    // Store image/gallery/includes/others as objects and arrays
    image: v.object({
      mobile: v.string(),
      tablet: v.string(),
      desktop: v.string(),
    }),
    categoryImage: v.object({
      mobile: v.string(),
      tablet: v.string(),
      desktop: v.string(),
    }),
    includes: v.array(
      v.object({
        quantity: v.number(),
        item: v.string(),
      })
    ),
    gallery: v.object({
      first: v.object({ mobile: v.string(), tablet: v.string(), desktop: v.string() }),
      second: v.object({ mobile: v.string(), tablet: v.string(), desktop: v.string() }),
      third: v.object({ mobile: v.string(), tablet: v.string(), desktop: v.string() }),
    }),
    others: v.array(
      v.object({
        slug: v.string(),
        name: v.string(),
        image: v.object({ mobile: v.string(), tablet: v.string(), desktop: v.string() }),
      })
    ),
  })
    // Add indexes to query products by slug or category
    .index("by_slug", ["slug"])
    .index("by_category", ["category"]),

  // 2. Orders Table (for checkout)
  orders: defineTable({
    customerName: v.string(),
    customerEmail: v.string(),
    // You can add more fields like address, zip, etc.
    items: v.array(
      v.object({
        // Store a reference to the product
        productId: v.id("products"),
        name: v.string(), // Store name/price for a snapshot
        price: v.number(),
        quantity: v.number(),
      })
    ),
    total: v.number(),
    status: v.string(), // e.g., "pending", "paid"
  }),
});