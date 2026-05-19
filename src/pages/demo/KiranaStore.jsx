import React from "react";

export default function KiranaStore() {

  const products = [
    "Rice & Wheat",
    "Pulses & Grains",
    "Oil & Ghee",
    "Snacks & Biscuits",
    "Spices",
    "Dairy Products",
    "Soaps & Detergents",
    "Daily Essentials",
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">

      {/* Header */}
      <header className="bg-green-600 text-white p-4 flex justify-between items-center">

        <h1 className="text-xl font-bold">
          Shree Patel Kirana Store
        </h1>

        <a
          href="tel:9876543210"
          className="bg-white text-green-600 px-4 py-1 rounded"
        >
          Call Now
        </a>

      </header>

      {/* Hero */}
      <section className="text-center py-10 px-4 bg-white">

        <h2 className="text-3xl font-bold mb-3">
          Daily Grocery Delivered Near You
        </h2>

        <p className="text-gray-600 mb-6">
          Fresh groceries, best prices & quick service in your area.
        </p>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition"
        >
          Order on WhatsApp
        </a>

      </section>

      {/* Products */}
      <section className="py-10 px-4">

        <h3 className="text-2xl font-semibold text-center mb-6">
          Our Products
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">

          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow text-center"
            >
              <p className="font-medium">{product}</p>
            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 p-4">
        © 2025 Shree Patel Kirana Store
      </footer>

    </div>
  );
}