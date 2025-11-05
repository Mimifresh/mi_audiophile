import { Product } from "../types/product";
import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "public", "assets", "db.json");

export function getAllProducts(): Product[] {
  const file = fs.readFileSync(dbPath, "utf-8");
  const data = JSON.parse(file);

  if (!data || !Array.isArray(data.data)) {
    console.error("❌ db.json is missing or malformed.");
    return [];
  }

  return data.data as Product[];
}

export function getProductsByCategory(category: string): Product[] {
  if (!category) {
    console.error("⚠️ getProductsByCategory called with undefined category!");
    return [];
  }

  const allProducts = getAllProducts();

  return allProducts.filter((p) => {
    if (!p || !p.category) {
      console.warn("⚠️ Skipping product with missing category:", p?.name);
      return false;
    }

    return p.category.toLowerCase() === category.toLowerCase();
  });
}

export function getProductBySlug(slug: string): Product | undefined {
  if (!slug) {
    console.error("⚠️ getProductBySlug called with undefined slug!");
    return undefined;
  }

  const products = getAllProducts();
  return products.find((p) => p.slug === slug);
}
