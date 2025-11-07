// convex/products.ts

// Import both 'query' and 'mutation'
import { query, mutation } from "./_generated/server"; 
import { v } from "convex/values";

// A "migration" mutation to run once
export const _admin_migrateProducts = mutation({
  args: { data: v.array(v.any()) }, // Use v.any() for a one-time script
  handler: async (ctx, { data }) => {
    // Check if products already exist to avoid duplicates
    const existing = await ctx.db.query("products").first();
    if (existing) return "Database already seeded.";

    // Insert each product from your JSON file
    for (const product of data) {
      // The `id` field from db.json is not needed, Convex creates its own
      const { id, ...productData } = product;
      await ctx.db.insert("products", productData);
    }
    return `Inserted ${data.length} products.`;
  },
});

// Get all products
export const getAll = query({
  handler: async (ctx) => {
    return await ctx.db.query("products").collect();
  },
});

// Get products by category
export const getByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, { category }) => {
    return await ctx.db
      .query("products")
      .withIndex("by_category", (q) => q.eq("category", category.toLowerCase()))
      .collect();
  },
});

// Get a single product by its slug
export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    return await ctx.db
      .query("products")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .unique(); // We expect only one
  },
});