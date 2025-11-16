
"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    payment: "e-money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) return;
    clearCart();
    router.push("/checkout/success");
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-10 mt-15">

        {/* === LEFT SIDE FORM === */}
        <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold uppercase mb-8">Checkout</h2>

          {/* BILLING DETAILS */}
          <section className="mb-10">
            <h3 className="text-[#D87D4A] tracking-wider font-bold uppercase mb-4">
              Billing Details
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              <Input name="name" label="Name" value={form.name} onChange={handleChange} />
              <Input 
                name="email"
                label="Email Address"
                value={form.email}
                pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                onChange={handleChange} />
              <Input name="phone" label="Phone Number" value={form.phone} onChange={handleChange} />
            </div>
          </section>

          {/* SHIPPING INFO */}
          <section className="mb-10">
            <h3 className="text-[#D87D4A] tracking-wider font-bold uppercase mb-4">
              Shipping Info
            </h3>

            <Input name="address" label="Address" value={form.address} onChange={handleChange} />
            <div className="grid sm:grid-cols-3 gap-6 mt-6">
              <Input name="zip" label="ZIP Code" value={form.zip} onChange={handleChange} />
              <Input name="city" label="City" value={form.city} onChange={handleChange} />
              <Input name="country" label="Country" value={form.country} onChange={handleChange} />
            </div>
          </section>

          {/* PAYMENT DETAILS */}
          <section>
            <h3 className="text-[#D87D4A] tracking-wider font-bold uppercase mb-4">
              Payment Details
            </h3>

            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-4 border p-4 rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={form.payment === "e-money"}
                  onChange={() => setForm({ ...form, payment: "e-money" })}
                />
                e-Money
              </label>

              <label className="flex items-center gap-4 border p-4 rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={form.payment === "cash"}
                  onChange={() => setForm({ ...form, payment: "cash" })}
                />
                Cash on Delivery
              </label>
            </div>

            {form.payment === "e-money" && (
              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                <Input name="eMoneyNumber" label="e-Money Number" value={form.eMoneyNumber} onChange={handleChange} />
                <Input name="eMoneyPin" label="e-Money PIN" value={form.eMoneyPin} onChange={handleChange} />
              </div>
            )}
          </section>
        </div>

        {/* === RIGHT SIDE SUMMARY === */}
        <Summary />
      </form>
    </div>
  );
}

/* ------------------ INPUT COMPONENT ------------------ */

function Input({ name, label, value, onChange }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-sm">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        required
        className="border rounded-lg px-4 py-2 focus:outline-[#D87D4A]"
      />
    </div>
  );
}

/* ------------------ SUMMARY COMPONENT ------------------ */

function Summary() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 50;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping + vat;

  return (
    <div className="bg-white p-8 rounded-lg shadow h-fit">
      <h3 className="text-xl font-bold uppercase mb-6">Summary</h3>

      <div className="space-y-6 mb-8">
        {cart.map((item) => (
          <div key={item.slug} className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded" />
              <div>
                <p className="font-bold uppercase">{item.name}</p>
                <p className="text-gray-600">${item.price.toLocaleString()}</p>
              </div>
            </div>
            <p>x{item.quantity}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2 text-sm">
        <Row label="Total" value={"$" + total.toLocaleString()} />
        <Row label="Shipping" value={"$" + shipping} />
        <Row label="VAT (included)" value={"$" + vat.toLocaleString()} />
      </div>

      <div className="mt-6">
        <Row label="Grand Total" value={"$" + grandTotal.toLocaleString()} bold />
      </div>

      <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white w-full py-3 mt-8 rounded-lg uppercase">
        Continue & Pay
      </button>
    </div>
  );
}

function Row({ label, value, bold = false }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex justify-between">
      <p className={bold ? "font-bold" : "text-gray-500"}>{label}</p>
      <p className={bold ? "font-bold" : ""}>{value}</p>
    </div>
  );
}
