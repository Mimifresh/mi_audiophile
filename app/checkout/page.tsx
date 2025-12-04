
"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  // Refs for accessibility + focusing first invalid field
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const addressRef = useRef<HTMLInputElement | null>(null);
  const zipRef = useRef<HTMLInputElement | null>(null);
  const cityRef = useRef<HTMLInputElement | null>(null);
  const countryRef = useRef<HTMLInputElement | null>(null);
  const eMoneyNumberRef = useRef<HTMLInputElement | null>(null);
  const eMoneyPinRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const raw = e.target.value;
    let value = raw;
    // If phone or zip include invalid characters, show an immediate error message
    if (fieldName === "phone") {
      // Allow an optional leading + followed by digits
      if (!/^(\+)?[0-9]*$/.test(raw)) {
        setErrors((prev) => ({ ...prev, phone: "Phone may start with '+' and must contain only numbers" }));
      } else {
        setErrors((prev) => {
          const copy = { ...prev } as Record<string, string>;
          delete copy.phone;
          return copy;
        });
      }
      // Preserve leading + if present, otherwise keep only digits
      value = (raw.startsWith("+") ? "+" : "") + raw.replace(/\D/g, "");
    } else if (fieldName === "zip") {
      if (/\D/.test(raw)) {
        setErrors((prev) => ({ ...prev, zip: "ZIP must contain only numbers" }));
      } else {
        setErrors((prev) => {
          const copy = { ...prev } as Record<string, string>;
          delete copy.zip;
          return copy;
        });
      }
      // Keep only digits in state
      value = raw.replace(/\D/g, "");
    }
    setForm({ ...form, [fieldName]: value });
    // Clear field error when user types
    // For non-numeric fields, clear the error when typing
    if (fieldName !== "phone" && fieldName !== "zip") {
      setErrors((prev) => {
        const copy = { ...prev } as Record<string, string>;
        delete copy[e.target.name];
        return copy;
      });
    }
  };

  // Validate a single field and update errors state. Called on blur.
  function handleFieldBlur(fieldName: string, value: string) {
    const err = validateField(fieldName, value, form);
    setErrors((prev) => {
      const copy = { ...prev } as Record<string, string>;
      if (err) copy[fieldName] = err;
      else delete copy[fieldName];
      return copy;
    });
  }

  function validateForm() {
    const errs = validateFormValues(form);
    setErrors(errs);
    // focus first invalid field in preferred order
    const order = [
      { key: "name", ref: nameRef },
      { key: "email", ref: emailRef },
      { key: "phone", ref: phoneRef },
      { key: "address", ref: addressRef },
      { key: "zip", ref: zipRef },
      { key: "city", ref: cityRef },
      { key: "country", ref: countryRef },
      { key: "eMoneyNumber", ref: eMoneyNumberRef },
      { key: "eMoneyPin", ref: eMoneyPinRef },
    ];

    for (const o of order) {
      if ((errs as any)[o.key]) {
        o.ref.current?.focus();
        break;
      }
    }

    return Object.keys(errs).length === 0;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const valid = validateForm();
    if (!valid) return;

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
      <form onSubmit={handleSubmit} noValidate className="grid lg:grid-cols-3 gap-10 mt-15">

        {/* === LEFT SIDE FORM === */}
        <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold uppercase mb-8">Checkout</h2>

          {/* BILLING DETAILS */}
          <section className="mb-10">
            <h3 className="text-[#D87D4A] tracking-wider font-bold uppercase mb-4">
              Billing Details
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              <Input
                name="name"
                label="Name"
                value={form.name}
                onChange={handleChange}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleFieldBlur("name", e.target.value)}
                error={errors.name}
                inputRef={nameRef}
                errorId="error-name"
              />
              <Input
                name="email"
                label="Email Address"
                value={form.email}
                pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                onChange={handleChange}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleFieldBlur("email", e.target.value)}
                error={errors.email}
                inputRef={emailRef}
                errorId="error-email"
              />
              <Input
                name="phone"
                label="Phone Number"
                value={form.phone}
                type="tel"
                inputMode="tel"
                pattern="^\\+?\\d*$"
                onChange={handleChange}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleFieldBlur("phone", e.target.value)}
                error={errors.phone}
                inputRef={phoneRef}
                errorId="error-phone"
              />
            </div>
          </section>

          {/* SHIPPING INFO */}
          <section className="mb-10">
            <h3 className="text-[#D87D4A] tracking-wider font-bold uppercase mb-4">
              Shipping Info
            </h3>

            <Input
              name="address"
              label="Address"
              value={form.address}
              onChange={handleChange}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleFieldBlur("address", e.target.value)}
              error={errors.address}
              inputRef={addressRef}
              errorId="error-address"
            />
            <div className="grid sm:grid-cols-3 gap-6 mt-6">
              <Input
                name="zip"
                label="ZIP Code"
                value={form.zip}
                type="tel"
                inputMode="numeric"
                pattern="\\d*"
                onChange={handleChange}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleFieldBlur("zip", e.target.value)}
                error={errors.zip}
                inputRef={zipRef}
                errorId="error-zip"
              />
              <Input
                name="city"
                label="City"
                value={form.city}
                onChange={handleChange}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleFieldBlur("city", e.target.value)}
                error={errors.city}
                inputRef={cityRef}
                errorId="error-city"
              />
              <Input
                name="country"
                label="Country"
                value={form.country}
                onChange={handleChange}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleFieldBlur("country", e.target.value)}
                error={errors.country}
                inputRef={countryRef}
                errorId="error-country"
              />
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
                <Input
                  name="eMoneyNumber"
                  label="e-Money Number"
                  value={form.eMoneyNumber}
                  onChange={handleChange}
                  onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleFieldBlur("eMoneyNumber", e.target.value)}
                  error={errors.eMoneyNumber}
                  inputRef={eMoneyNumberRef}
                  errorId="error-eMoneyNumber"
                />
                <Input
                  name="eMoneyPin"
                  label="e-Money PIN"
                  value={form.eMoneyPin}
                  onChange={handleChange}
                  onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleFieldBlur("eMoneyPin", e.target.value)}
                  error={errors.eMoneyPin}
                  inputRef={eMoneyPinRef}
                  errorId="error-eMoneyPin"
                />
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

function Input({ name, label, value, onChange, onBlur, pattern, type = "text", inputMode, maxLength, error, inputRef, errorId }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-sm">{label}</label>
      <input
        name={name}
        type={type}
        pattern={pattern}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        inputMode={inputMode}
        maxLength={maxLength}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        ref={inputRef}
        className={`border rounded-lg px-4 py-2 focus:outline-[#D87D4A] ${error ? 'border-red-500' : ''}`}
      />
      {error && (
        <p id={errorId} role="alert" className="text-red-600 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

// -------- Validation helpers --------
function validateEmail(email: string) {
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
}

function validateFormValues(values: any) {
  const errs: Record<string, string> = {};
  if (!values.name || values.name.trim().length === 0) errs.name = "Name is required";
  if (!values.email || !validateEmail(values.email)) errs.email = "Valid email is required";
  if (!values.phone || values.phone.trim().length === 0) errs.phone = "Phone is required";
  else if (!/^\+?\d+$/.test(values.phone)) errs.phone = "Phone must contain only numbers (optional leading +)";
  if (!values.address || values.address.trim().length === 0) errs.address = "Address is required";
  if (!values.zip || values.zip.trim().length === 0) errs.zip = "ZIP code is required";
  else if (!/^\d+$/.test(values.zip)) errs.zip = "ZIP code must contain only numbers";
  if (!values.city || values.city.trim().length === 0) errs.city = "City is required";
  if (!values.country || values.country.trim().length === 0) errs.country = "Country is required";
  if (values.payment === "e-money") {
    if (!values.eMoneyNumber || values.eMoneyNumber.trim().length === 0) errs.eMoneyNumber = "e-Money number is required";
    if (!values.eMoneyPin || values.eMoneyPin.trim().length === 0) errs.eMoneyPin = "e-Money PIN is required";
  }
  return errs;
}

// Validate a single field given current form state (used on blur)
function validateField(fieldName: string, value: string, values: any) {
  const merged = { ...values, [fieldName]: value };
  const errs = validateFormValues(merged);
  return errs[fieldName];
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
