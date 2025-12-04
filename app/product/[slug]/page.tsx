import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/app/lib/getProducts";
import { Product } from "../../types/product";
import Categories from "../../components/Categories";
import Link from "next/link";
import GoBackButton from "../../components/GoBackButton";
import ProductClientSection from "@/app/components/ProductClientSection";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

function getConvex() {
  const url = process.env.NEXT_PUBLIC_CONVEX_URL;
  if (!url) {
    throw new Error(
      "Environment variable NEXT_PUBLIC_CONVEX_URL is not set. Set it in Vercel/your environment to your Convex deployment URL."
    );
  }
  return new ConvexHttpClient(url);
}

export async function generateStaticParams() {
  const convex = getConvex();
  const products = await convex.query(api.products.getAll);
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Unwrap params Promise (fixes undefined slug issue)
  const { slug } = await params;

  const convex = getConvex();
  const product = await convex.query(api.products.getBySlug, { slug })
  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      {/* === PRODUCT HERO SECTION === */}
      <GoBackButton />
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 bg-[#f1f1f1] rounded-lg flex justify-center p-8">
          <Image
            src={product.image.desktop.replace("./assets", "/assets")}
            alt={product.name}
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        <div className="flex-1 text-center lg:text-left">
          {product.new && (
            <p className="text-[#D87D4A] uppercase tracking-[0.4em] mb-4">
              New Product
            </p>
          )}

          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase mb-6">
            {product.name}
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          <p className="font-bold text-lg mb-6">
            $ {product.price.toLocaleString()}
          </p>
          <ProductClientSection product={product} />
        </div>
      </div>

      {/* === FEATURES SECTION === */}
      <section className="mt-24">
        <h2 className="text-2xl font-bold uppercase mb-6">Features</h2>
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {product.features}
        </p>
      </section>

      {/* === IN THE BOX SECTION === */}
      <section className="mt-16 grid sm:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold uppercase mb-6">In the Box</h2>
          <ul className="space-y-3">
            {product.includes.map((item, i) => (
              <li key={i} className="text-gray-700">
                <span className="text-[#D87D4A] font-bold mr-2">
                  {item.quantity}x
                </span>
                {item.item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* === GALLERY SECTION === */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-24">
        <div className="sm:col-span-1 flex flex-col gap-6">
          {/* First Image */}
          <Image
            src={product.gallery.first.mobile.replace("./assets", "/assets")}
            alt={`${product.name} gallery image 1`}
            width={500}
            height={500}
            className="rounded-lg block sm:hidden"
          />
          <Image
            src={product.gallery.first.tablet.replace("./assets", "/assets")}
            alt={`${product.name} gallery image 1`}
            width={500}
            height={500}
            className="rounded-lg hidden sm:block lg:hidden"
          />
          <Image
            src={product.gallery.first.desktop.replace("./assets", "/assets")}
            alt={`${product.name} gallery image 1`}
            width={500}
            height={500}
            className="rounded-lg hidden lg:block"
          />

          {/* Second Image */}
          <Image
            src={product.gallery.second.mobile.replace("./assets", "/assets")}
            alt={`${product.name} gallery image 2`}
            width={500}
            height={500}
            className="rounded-lg block sm:hidden"
          />
          <Image
            src={product.gallery.second.tablet.replace("./assets", "/assets")}
            alt={`${product.name} gallery image 2`}
            width={500}
            height={500}
            className="rounded-lg hidden sm:block lg:hidden"
          />
          <Image
            src={product.gallery.second.desktop.replace("./assets", "/assets")}
            alt={`${product.name} gallery image 2`}
            width={500}
            height={500}
            className="rounded-lg hidden lg:block"
          />
        </div>

        <div className="sm:col-span-1 lg:col-span-2">
          {/* Third Image */}
          <Image
            src={product.gallery.third.mobile.replace("./assets", "/assets")}
            alt={`${product.name} gallery image 3`}
            width={900}
            height={900}
            className="rounded-lg block sm:hidden"
          />
          <Image
            src={product.gallery.third.tablet.replace("./assets", "/assets")}
            alt={`${product.name} gallery image 3`}
            width={900}
            height={900}
            className="rounded-lg hidden sm:block lg:hidden"
          />
          <Image
            src={product.gallery.third.desktop.replace("./assets", "/assets")}
            alt={`${product.name} gallery image 3`}
            width={900}
            height={900}
            className="rounded-lg hidden lg:block"
          />
        </div>
      </section>

      {/* === YOU MAY ALSO LIKE === */}
      <section className="text-center mt-32">
        <h2 className="text-2xl font-extrabold uppercase mb-12">
          You May Also Like
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {product.others.map((item) => (
            <div key={item.slug}>
              <div className="bg-[#f1f1f1] rounded-lg mb-8">
                <Image
                  src={item.image.desktop.replace("./assets", "/assets")}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="mx-auto object-contain"
                />
              </div>

              <h3 className="text-xl font-bold uppercase mb-6">{item.name}</h3>

              <Link
                href={`/product/${item.slug}`}
                className="inline-block bg-[#D87D4A] hover:bg-[#FBAF85] text-white uppercase tracking-widest text-sm font-bold px-8 py-3 transition"
              >
                See Product
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Categories />


    </main>
  );
}
