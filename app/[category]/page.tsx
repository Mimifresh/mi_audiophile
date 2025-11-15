import { getProductsByCategory } from "../lib/getProducts";
import { Product } from "../types/product";
import PageHeader from "../components/PageHeader";
import ProductCard from "../components/ProductCard";
import { notFound } from "next/navigation";
import Categories from "../components/Categories";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  // ✅ Unwrap params Promise (prevents undefined category)
  const { category } = await params;

  // ✅ Validate category names (case insensitive)
  const validCategories = ["headphones", "speakers", "earphones"];
  if (!validCategories.includes(category.toLowerCase())) {
    notFound();
  }

  // ✅ Get products for the category
  const categoryProducts: Product[] = getProductsByCategory(category);

  if (!categoryProducts.length) {
    console.warn(`⚠️ No products found for category: ${category}`);
  }

  return (
    <div className="pb-10">
      <PageHeader title={category} />

      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 mt-24 space-y-32">
        {categoryProducts.map((product, index) => (
          <ProductCard
            key={product.slug}
            name={product.name}
            description={product.description}
            images={product.categoryImage}
            alt={product.name}
            href={`/product/${product.slug}`}
            isNew={product.new}
            reverse={index % 2 === 1}
          />
        ))}
        <Categories />
      </section>
    </div>
  );
}