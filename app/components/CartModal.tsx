"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CartModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const { cart, removeFromCart, clearCart } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex p-5">
      {/* === BACKDROP === */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* === RIGHT SIDEBAR (desktop/tablet) / FULLSCREEN (mobile) === */}
      <div
        className="
          relative ml-auto bg-white shadow-xl 
          w-full sm:w-[420px] 
          h-full sm:h-auto 
          sm:my-10 sm:rounded-xl 
          p-6 animate-slideLeft
        "
      >
        {/* === HEADER === */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold uppercase">
            Cart ({cart.length})
          </h2>

          {cart.length > 0 && (
            <button 
              onClick={clearCart}
              className="text-sm text-gray-500 hover:text-black"
            >
              Remove all
            </button>
          )}
        </div>

        {/* === EMPTY CART === */}
        {cart.length === 0 && (
          <div className="py-20 text-center text-gray-500">
            Your cart is empty.
          </div>
        )}

        {/* === CART ITEMS === */}
        {cart.length > 0 && (
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.slug} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded">
                      {/* Normalize image paths: convert relative './assets/..' to '/assets/..' (public folder)
                          and provide a fallback placeholder if image is missing. */}
                      {
                        (() => {
                          const src = item.image
                            ? item.image.replace(/^\.\/assets/, '/assets')
                            : '/assets/placeholder.png';
                          return (
                            <img
                              src={src}
                              alt={item.name}
                              className="w-full h-full object-cover rounded"
                            />
                          );
                        })()
                      }
                    </div>

                  <div>
                    <p className="font-bold uppercase text-sm">{item.name}</p>
                    <p className="text-sm text-gray-500">${item.price.toLocaleString()}</p>
                  </div>
                </div>

                {/* QUANTITY BOX */}
                <div className="flex items-center bg-gray-100 px-2 py-1 gap-2">
                  <button className="text-sm">-</button>
                  <p>{item.quantity}</p>
                  <button className="text-sm">+</button>
                </div>
              </div>
            ))}

            {/* TOTAL */}
            <div className="flex justify-between mt-6 font-bold">
              <p>TOTAL</p>
              <p>
                $
                {cart
                  .reduce((sum, p) => sum + p.price * p.quantity, 0)
                  .toLocaleString()}
              </p>
            </div>

            {/* CHECKOUT */}
            <button
              onClick={() => {
                // Navigate to the checkout page
                onClose();
                router.push("/checkout");
              }}
              className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white w-full py-3 uppercase font-bold tracking-wide mt-4 rounded"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
