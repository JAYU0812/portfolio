import React from "react";

export default function MedicalStore() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">

      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Shree Ambica Medical Store
        </h1>

        <a
          href="tel:9876543210"
          className="bg-white text-blue-600 px-4 py-1 rounded"
        >
          Call Now
        </a>
      </header>

      {/* Hero */}
      <section className="bg-white text-center py-10 px-4">

        <h2 className="text-3xl font-bold mb-3">
          Trusted Medical Store Near You
        </h2>

        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          All types of medicines available. Genuine products and fast local
          service.
        </p>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition"
        >
          Order via WhatsApp
        </a>

      </section>

      {/* Services */}
      <section className="py-10 px-4">

        <h3 className="text-2xl font-semibold text-center mb-6">
          Our Services
        </h3>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

          {[
            "Allopathic Medicines",
            "Surgical & Medical Supplies",
            "Health & Wellness Products",
            "Baby Care Products",
            "Blood Pressure & Sugar Testing",
            "Home Delivery (Local Area)",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow"
            >
              ✔ {item}
            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 p-4">
        © 2025 Shree Ambica Medical Store
      </footer>

    </div>
  );
}