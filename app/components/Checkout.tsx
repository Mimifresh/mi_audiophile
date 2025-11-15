'use client';
export default function Checkout() {
    return (
        <section className="py-20 px-4 text-center">
            <form className="max-w-lg mx-auto mt-10 text-left">
                <h2 className="text-2xl font-bold mb-6">Checkout</h2>
                <h3 className="text-lg font-semibold mb-4">Billing Details</h3>
                <div className="mb-4">
                    <label className="block mb-2 font-semibold" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    <label className="block mb-2 font-semibold mt-4" htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />

                    <label className="block mb-2 font-semibold mt-4" htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <h3 className="text-lg font-semibold mb-4">Shipping Info</h3>
                <div className="mb-4">
                    <label className="block mb-2 font-semibold" htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    <label className="block mb-2 font-semibold mt-4" htmlFor="zip">ZIP Code</label>
                    <input
                        type="text"
                        id="zip"
                        name="zip"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    <label className="block mb-2 font-semibold mt-4" htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    <label className="block mb-2 font-semibold mt-4" htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
            </form>
        </section>
    )
}