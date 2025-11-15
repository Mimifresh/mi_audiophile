"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  slug: string;     // ✅ FIXED
  name: string;
  price: number;
  quantity: number;
  // path to product image (prefer a public path like '/assets/...')
  image?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  badgeCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [badgeCount, setBadgeCount] = useState<number>(0);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.slug === item.slug);
      if (existing) {
        return prev.map((p) =>
          p.slug === item.slug
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        );
      }
      return [...prev, item];
    });
    // Increment the navbar badge by 1 for every Add to Cart click,
    // regardless of the item's quantity value.
    setBadgeCount((b) => b + 1);
  };

  const removeFromCart = (slug: string) => {
    setCart((prev) => prev.filter((p) => p.slug !== slug));
    setBadgeCount((b) => Math.max(0, b - 1));
  };

  const clearCart = () => {
    setCart([]);
    setBadgeCount(0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, badgeCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart must be used within a CartProvider");
  return context;
};
