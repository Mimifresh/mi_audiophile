"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import QuantitySelector from "../components/QuantitySelector";
import { Product } from "../types/product";
import toast from "react-hot-toast";

export default function ProductClientSection({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image.desktop,
      quantity,
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <QuantitySelector onChange={setQuantity} />
        <button
          onClick={handleAddToCart}
          className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white uppercase tracking-widest text-sm font-bold px-8 py-3 transition"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}
