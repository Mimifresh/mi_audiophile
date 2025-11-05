"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

interface Props {
  onClose: () => void;
}

export default function CartModal({ onClose }: Props) {
  const { cart, clearCart, updateQuantity } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-24 z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-md shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold uppercase">
            Cart ({cart.length})
          </h2>
          <button
            onClick={clearCart}
            className="text-gray-500 text-sm hover:text-[#D87D4A]"
          >
            Remove all
          </button>
        </div>

        {/* Cart items */}
        <div className="space-y-4 max-h-72 overflow-y-auto">
          {cart.map((item) => (
            <div
              key={item.slug}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image.replace("./assets", "/assets")}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div>
                  <p className="font-bold text-sm">{item.name}</p>
                  <p className="text-gray-500 text-sm">
                    $ {item.price.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-100 px-3 py-1 rounded">
                <button
                  onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                  className="text-gray-500 hover:text-[#D87D4A]"
                >
                  -
                </button>
                <span className="font-bold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                  className="text-gray-500 hover:text-[#D87D4A]"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex justify-between mt-6">
          <span className="uppercase text-gray-500">Total</span>
          <span className="font-bold text-lg">
            $ {total.toLocaleString()}
          </span>
        </div>

        {/* Checkout */}
        <button
          className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white uppercase tracking-widest text-sm font-bold px-6 py-3 mt-6 rounded transition"
        >
          Checkout
        </button>

        <button
          onClick={onClose}
          className="block mx-auto mt-4 text-gray-400 text-sm hover:text-black"
        >
          Close
        </button>
      </div>
    </div>
  );
}