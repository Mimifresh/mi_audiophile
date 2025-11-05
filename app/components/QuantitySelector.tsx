"use client";

import { useState } from "react";

interface Props {
  onChange?: (quantity: number) => void;
}

export default function QuantitySelector({ onChange }: Props) {
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (newQty: number) => {
    if (newQty < 1) return;
    setQuantity(newQty);
    onChange?.(newQty);
  };

  return (
    <div className="flex items-center bg-gray-100 w-32 justify-between px-4 py-2">
      <button
        onClick={() => updateQuantity(quantity - 1)}
        className="text-gray-500 hover:text-[#D87D4A]"
      >
        -
      </button>
      <span className="font-bold">{quantity}</span>
      <button
        onClick={() => updateQuantity(quantity + 1)}
        className="text-gray-500 hover:text-[#D87D4A]"
      >
        +
      </button>
    </div>
  );
}
